import { getExerciseModalMarkup } from './markupUtils';
import { fetchExerciseById } from './api.js';
import { initializeFavoriteExercises } from './favoriteExercise.js';

export const initializeExerciseModal = () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modal = document.querySelector('.modal');
  const exercisesList = document.querySelector('.exercises-list');

  const checkIfFavorited = exerciseId => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(fav => fav._id === exerciseId);
  };

  const escKeyListener = e => {
    if (e.key === 'Escape') hideModal();
  };

  const hideModal = () => {
    modalBackdrop.classList.remove('active');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    modal.innerHTML = '';
    document.removeEventListener('keydown', escKeyListener);
  };

  const updateFavoriteButton = exerciseId => {
    const favoriteButton = modal.querySelector('.favorite-button');
    const isFavorited = checkIfFavorited(exerciseId);

    if (favoriteButton) {
      favoriteButton.innerHTML = `
        ${isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        <svg width="20" height="20">
          <use href="./img/sprite.svg#${
            isFavorited ? 'icon-trash' : 'icon-heart'
          }"></use>
        </svg>
      `;
    }
  };

  const toggleFavorite = exerciseData => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = favorites.some(fav => fav._id === exerciseData._id);

    localStorage.setItem(
      'favorites',
      JSON.stringify(
        isFavorited
          ? favorites.filter(fav => fav._id !== exerciseData._id)
          : [...favorites, exerciseData]
      )
    );

    updateFavoriteButton(exerciseData._id);
    if (window.location.pathname.endsWith('favorites.html')) {
      initializeFavoriteExercises();
    }
  };

  const showModal = async exerciseId => {
    try {
      const exerciseData = await fetchExerciseById(exerciseId);

      modal.innerHTML = getExerciseModalMarkup(
        exerciseData,
        checkIfFavorited(exerciseId)
      );

      const closeButton = modal.querySelector('.close-modal');
      const favoriteButton = modal.querySelector('.favorite-button');

      modalBackdrop.classList.add('active');
      modal.classList.add('active');
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', escKeyListener);

      if (closeButton) closeButton.addEventListener('click', hideModal);
      if (favoriteButton) {
        favoriteButton.addEventListener('click', () =>
          toggleFavorite(exerciseData)
        );
      }
    } catch (error) {
      console.error('Failed to fetch exercise details:', error);
    }
  };

  exercisesList.addEventListener('click', event => {
    const deleteButton = event.target.closest('.favorites-delete-button');
    const exerciseItem = event.target.closest('.exercise-list-item');

    if (deleteButton) {
      const exerciseId = deleteButton.dataset.id;
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter(item => item._id !== exerciseId))
      );
      initializeFavoriteExercises();
    }

    if (exerciseItem && !deleteButton) showModal(exerciseItem.dataset.id);
  });

  modalBackdrop.addEventListener('click', hideModal);
};
