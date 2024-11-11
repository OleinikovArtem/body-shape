import { displayQuoteOfTheDay } from './quote.js';
import { initializeExerciseModal } from './exerciseModal.js';
import { initializeMenu, initializeNavigationLinks } from './menu.js';
import { initializeFavoriteExercises } from './favoriteExercise.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeMenu();
  initializeNavigationLinks();
  displayQuoteOfTheDay();
  initializeFavoriteExercises();
  initializeExerciseModal();
});
