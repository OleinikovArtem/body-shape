import { getExercisesMarkup } from './markupUtils.js';

export const initializeFavoriteExercises = () => {
  const exercisesList = document.querySelector('.exercises-list');
  const exercisesContainer = document.querySelector('.exercises-container');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  exercisesList.innerHTML = '';

  if (favorites.length > 0) {
    exercisesList.insertAdjacentHTML(
      'beforeend',
      getExercisesMarkup(favorites, true)
    );
  } else {
    exercisesContainer.insertAdjacentHTML(
      'beforeend',
      `
      <p class="exercises-empty-text">
        It appears that you haven't added any exercises to your favorites yet. 
        To get started, you can add exercises that you like to your favorites 
        for easier access in the future.
      </p>
      `
    );
  }
};
