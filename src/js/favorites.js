import ApiService from './api.js';
import { initializeMenu, initializeNavigationLinks } from './menu.js';
import { displayQuoteOfTheDay } from './quote.js';

const apiService = new ApiService();

// Функція для отримання масиву ID обраних вправ із localStorage
function getFavoriteExerciseIds() {
  return JSON.parse(localStorage.getItem('favoriteExercises')) || [];
}

// Функція для видалення вправи з обраного
function removeFavoriteExercise(id) {
  const updatedFavorites = getFavoriteExerciseIds().filter(
    favId => favId !== id
  );
  localStorage.setItem('favoriteExercises', JSON.stringify(updatedFavorites));
  displayFavoriteExercises(); // Оновлення списку
}

// Функція для відображення обраних вправ
async function displayFavoriteExercises() {
  const exerciseContainer = document.querySelector('.favorites-list');
  if (!exerciseContainer) return;
  const favoriteIds = getFavoriteExerciseIds();
  exerciseContainer.innerHTML = favoriteIds.length
    ? (
        await Promise.all(
          favoriteIds.map(id => apiService.getExercisesById(id))
        )
      )
        .map(createExerciseCardHtml)
        .join('')
    : `<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`;
}

// Функція для створення HTML для кожної картки вправи
function createExerciseCardHtml(exercise) {
  return `
    <li class="exercises_item" id="${exercise._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${getLogoSvg(exercise._id)}</div>
        </div>
        <button class="card__btn card-start" data-id="${
          exercise._id
        }" type="button">
          <span class="card-start-name usual-text">Start</span>
          <span class="card-start-arrow">${svg.arrow}</span>
        </button>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${svg.runner}</div>
        <div class="card-body-name card-text-name">${capitalize(
          exercise.name
        )}</div>
      </div>
      <div class="card-footer">
        ${createExerciseInfo(
          'Burned calories',
          `${exercise.burnedCalories || 0} / ${exercise.time || 0} min`
        )}
        ${createExerciseInfo(
          'Category',
          capitalize(exercise.categoryName || '')
        )}
        ${createExerciseInfo('Target', capitalize(exercise.target || ''))}
      </div>
    </li>
  `;
}

// Функція для спрощення створення інформаційного блоку
function createExerciseInfo(label, value) {
  return `
    <div class="card-info card-text-info">
      <span class="info-item-name">${label}: </span>
      <span class="long-text">${value}</span>
    </div>
  `;
}

// Функція для генерації SVG з параметром id
function getLogoSvg(id) {
  return svg.recycleBin.replace('CARD_ID', id);
}

// Функція для зміни стилів text
function capitalize(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

// Додатковий SVG контент
const svg = {
  recycleBin: `
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,
  arrow: `
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,
  runner: `
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`,
};

// Подія для видалення обраної вправи по кліку на значок видалення
document.addEventListener('click', event => {
  const target = event.target.closest('.recycle-bin');
  if (target) {
    const exerciseId = target.getAttribute('data-id');
    removeFavoriteExercise(exerciseId);
  }
});

// Ініціалізація сторінки
document.addEventListener('DOMContentLoaded', () => {
  displayQuoteOfTheDay();
  displayFavoriteExercises();
  initializeMenu();
  initializeNavigationLinks();
});
