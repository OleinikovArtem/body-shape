import APIService from './api';
import icons from '../img/sprite.svg';
import pagingIcons from '../img/paging-icons.svg';

const apiService = new APIService();
const listItem = document.querySelector('.js-list');
const paginationButtons = document.getElementById('pagination-numbers');
const searchForm = document.querySelector('.search__form');
const span = document.querySelector('.exercises__span');
const text = document.querySelector('.exercises__text');
let currentPage = 1;

listItem.addEventListener('click', onCardClick);

async function onCardClick(event) {
  if (!event.target.closest('.filters__item')) {
    return;
  }
  searchForm.classList.remove('hidden');
  const item = event.target.closest('.filters__item');

  let filter = item.lastElementChild.children[0].innerText
    .toLowerCase()
    .replace(/\s/g, '');

  const name = item.lastElementChild.children[1].innerText
    .toLowerCase()
    .replace(/\s/g, '%20');

  if (filter === 'bodyparts') {
    filter = 'bodypart';
  }

  const obj = { filter, name };

  localStorage.setItem('paramSearch', JSON.stringify(obj));

  try {
    const { results, totalPages } = await apiService.getExercises(
      filter,
      name,
      currentPage
    );

    setupPagination({ filter, name, totalPages });
    renderExercises(results);
    textExercises(results);
  } catch (error) {
    console.log(error);
  }
}

function textExercises(results) {
  text.innerText = `${results[0].bodyPart}`;
  text.classList.remove('hidden');
  span.classList.remove('hidden');
}

export function renderExercises(results) {
  listItem.innerHTML = '';
  const markup = results
    .map(({ _id, rating, name, burnedCalories, bodyPart, target }) => {
      return `
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${rating}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${icons}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${_id}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${icons}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${icons}#icon-running-man"></use>
                </svg>
                </div>
                <h2 class="card__title">${name}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${burnedCalories}</p>
                <p class="card__text-info"><span>Body part:</span>${bodyPart}</p>
                <p class="card__text-info"><span>Target:</span>${target}</p>
              </div>
        </div>
      </li>`;
    })
    .join('');
  listItem.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.exercises__btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      searchForm.classList.add('hidden');
      text.classList.add('hidden');
      span.classList.add('hidden');
    });
  });
});

async function setCurrentPage(filter, name, i) {
  currentPage = i;

  try {
    const { results, totalPages } = await apiService.getExercises(
      filter,
      name,
      currentPage
    );

    setupPagination({ filter, name, totalPages });
    renderExercises(results);
    textExercises(results);
  } catch (error) {
    console.log(error);
  }
  scrollToTop();
}

function setupPagination({ filter, name, totalPages }) {
  paginationButtons.innerHTML = '';

  if (totalPages <= 1) return;

  if (totalPages > 5) {
    const backwards = ['first', 'prev'];
    backwards.forEach(button => {
      const navButton = document.createElement('button');
      const active = currentPage !== 1;
      if (active) {
        navButton.classList.add('active-btn');
        navButton.addEventListener('click', () => {
          if (button === 'first') {
            setCurrentPage(filter, name, 1);
          } else if (button === 'prev') {
            setCurrentPage(filter, name, currentPage - 1);
          }
        });
      }
      navButton.insertAdjacentHTML(
        'beforeend',
        `<svg class="pagination-icon" width="24" height="24">
                  <use href="${pagingIcons}#icon-page-${button}"></use>
                </svg>`
      );
      paginationButtons.appendChild(navButton);
    });

    const dots = document.createElement('button');
    dots.className = 'pagination-button-dots';
    dots.insertAdjacentHTML('beforeend', `<p>...</p>`);

    if (currentPage === 1) {
      for (let i = 1; i <= 3; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = 'pagination-button';
        pageNumber.textContent = i;
        paginationButtons.appendChild(pageNumber);
        pageNumber.addEventListener('click', () => {
          setCurrentPage(filter, name, i);
        });
      }
      paginationButtons.appendChild(dots);
    } else if (currentPage === totalPages) {
      paginationButtons.appendChild(dots);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = 'pagination-button';
        pageNumber.textContent = i;
        paginationButtons.appendChild(pageNumber);
        pageNumber.addEventListener('click', () => {
          setCurrentPage(filter, name, i);
        });
      }
    } else {
      paginationButtons.appendChild(dots);
      const start = currentPage > 3 ? currentPage - 2 : 1;
      const end = currentPage < totalPages - 2 ? currentPage + 2 : totalPages;
      for (let i = start; i <= end; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = 'pagination-button';
        pageNumber.textContent = i;
        paginationButtons.appendChild(pageNumber);
        pageNumber.addEventListener('click', () => {
          setCurrentPage(filter, name, i);
        });
      }
      paginationButtons.appendChild(dots.cloneNode(true));
    }

    const forwards = ['next', 'last'];
    forwards.forEach(button => {
      const navButton = document.createElement('button');
      const active = currentPage !== totalPages;
      if (active) {
        navButton.classList.add('active-btn');
        navButton.addEventListener('click', () => {
          if (button === 'last') {
            setCurrentPage(filter, name, totalPages);
          } else if (button === 'next') {
            setCurrentPage(filter, name, currentPage + 1);
          }
        });
      }
      navButton.insertAdjacentHTML(
        'beforeend',
        `<svg class="pagination-icon" width="24" height="24">
                  <use href="${pagingIcons}#icon-page-${button}"></use>
                </svg>`
      );
      paginationButtons.appendChild(navButton);
    });
  } else {
    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement('button');
      pageNumber.className = 'pagination-button';
      pageNumber.textContent = i;
      paginationButtons.appendChild(pageNumber);
      pageNumber.addEventListener('click', () => {
        setCurrentPage(filter, name, i);
      });
    }
  }
  handleActivePageNumber();
}

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-button').forEach(button => {
    button.classList.remove('active-btn');
    const page = Number(button.textContent);

    if (page === currentPage) {
      button.classList.add('active-btn');
    }
  });
};

function scrollToTop() {
  window.scrollTo({
    top: 830,
    behavior: 'auto',
  });
}
