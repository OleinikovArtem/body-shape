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
      <div">Card-exercise
      </div>
    </li>
  `;
}

// Функція для налаштування кнопок видалення вправ
function setupRemoveFavoriteButtons() {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('remove-favorite-btn')) {
      const exerciseId = event.target.getAttribute('data-id');
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
