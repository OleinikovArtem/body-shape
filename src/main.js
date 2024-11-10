import 'izitoast/dist/css/iziToast.min.css';

import './js/api-service';
import './js/filters';
import './js/modal-exercises';
import './js/modal-rating';
import './js/exercises';

import { initializeMenu, initializeNavigationLinks } from './js/menu.js';
import { displayQuoteOfTheDay } from './js/quote.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeMenu();
  initializeNavigationLinks();
  displayQuoteOfTheDay();
});
