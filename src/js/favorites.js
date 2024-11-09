import { getQuote, getExerciseById } from './api.js';

// Функція для відображення цитати дня
async function displayQuote() {
  try {
    const response = await getQuote();

    if (response) {
      const quoteText = response.quote;
      const quoteAuthor = response.author;

      const quoteElement = document.querySelector('.quote-text');
      const authorElement = document.querySelector('.quote-author');

      if (quoteElement && authorElement) {
        quoteElement.textContent = quoteText;
        authorElement.textContent = `${quoteAuthor}`;
      }
    } else {
      console.log('Failed to load quote of the day.');
    }
  } catch (error) {
    console.error('Error fetching quote of the day:', error);
  }
}

document.addEventListener('DOMContentLoaded', displayQuote);

// Функція для отримання масиву ID обраних вправ із localStorage
function getFavoriteExerciseIds() {
  const favorites = localStorage.getItem('favoriteExercises');
  return favorites ? JSON.parse(favorites) : [];
}

// Функція для відображення обраних вправ
async function displayFavoriteExercises() {
  const exerciseContainer = document.querySelector('.favorites-list');
  const favoriteIds = getFavoriteExerciseIds();

  exerciseContainer.innerHTML = '';

  if (favoriteIds.length === 0) {
    exerciseContainer.innerHTML = `
      <li class="empty-favorites">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </li>
    `;
    return;
  }

  const exercisePromises = favoriteIds.map(id => getExerciseById(id));
  const exercises = await Promise.all(exercisePromises);

  exercises.forEach(exercise => {
    const exerciseHtml = createExerciseCardHtml(exercise);
    exerciseContainer.insertAdjacentHTML('beforeend', exerciseHtml);
  });
}

// Функція для створення HTML для кожної картки вправи
function createExerciseCardHtml(exercise) {
  return `
    <li class="exercises_item" id="${exercise._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon text-usual">${getLogoSvg(
            true,
            exercise._id,
            exercise.rating || 0
          )}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${svg.arrow}</div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-body-logo">${svg.runner}</div>
        <div class="card-body-name card-text-name">
          ${capitalize(exercise.name)}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-info card-text-info">
          <span class="info-item-name">Burned calories: </span>
          <span class="long-text">
            ${exercise.burnedCalories || 0} / ${exercise.time || 0} min
          </span>
        </div>
        <div class="card-info card-text-info">
          <span class="info-item-name">Category: </span>
          <span class="long-text">${capitalize(
            exercise.categoryName || ''
          )}</span>
        </div>
        <div class="card-info card-text-info">
          <span class="info-item-name">Target: </span>
          <span class="long-text">${capitalize(exercise.target || '')}</span>
        </div>
      </div>
    </li>
  `;
}

// Функція для налаштування кнопок видалення вправ
function setupRemoveFavoriteButtons() {
  document.addEventListener('click', event => {
    if (event.target.closest('.recycle-bin')) {
      const exerciseId = event.target
        .closest('.recycle-bin')
        .getAttribute('data-card');
      removeFavoriteExercise(exerciseId);
      displayFavoriteExercises(); // Оновлюємо список після видалення
    }
  });
}

// Функція для видалення вправи з обраного
function removeFavoriteExercise(id) {
  const favoriteIds = getFavoriteExerciseIds();
  const updatedFavorites = favoriteIds.filter(favId => favId !== id);
  localStorage.setItem('favoriteExercises', JSON.stringify(updatedFavorites));
}

// Ініціалізація сторінки обраних вправ
document.addEventListener('DOMContentLoaded', () => {
  displayFavoriteExercises();
  setupRemoveFavoriteButtons();
});

/*-----------------------------------------------------------*/

function capitalize(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

function getLogoSvg(isFavorites, id) {
  return isFavorites ? svg.recycleBin.replace('CARD_ID', id) : svg.rating;
}

const svg = {
  recycleBin: `
    <svg class="card-icon recycle-bin" data-card="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove" data-card="CARD_ID"></use>
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
