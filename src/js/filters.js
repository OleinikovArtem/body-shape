import APIService from './api';
const apiService = new APIService();
const list = document.querySelector('.js-list');

const paginationButtons = document.getElementById('pagination-numbers');
let currentPage = 1;

getFiltersExercises('Muscles', currentPage);

async function getFiltersExercises(params, currentPage) {
  try {
    const { results, totalPages } = await apiService.getFilter(
      params,
      currentPage
    );

    setupPagination({ results, totalPages });
    displayExercises(results);
  } catch (error) {
    console.log(error);
  }
}

function displayExercises(results) {
  if (!list) return;
  list.innerHTML = '';

  if (results.length === 0) {
    list.insertAdjacentHTML(
      'beforeend',
      `<p class="filters__empty">No exercises found</p>`
    );
    return;
  }

  const markup = results
    .map(({ filter, name, imgURL }) => {
      return `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    <h2 class="filters__title-first">${capitalize(name)}</h2>
    <p class="filters__text-first">${filter}</p>
    </div>
  </li>
    `;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

document.querySelectorAll('.btnFilters').forEach(button => {
  button.addEventListener('click', () => {
    const params = button.innerText;
    list.innerHTML = '';
    currentPage = 1;
    getFiltersExercises(params, currentPage);
  });
});

function capitalize(val) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const words = val.split(' ');
  const capitalizedWords = words.map(capitalizeFirstLetter);
  return capitalizedWords.join(' ');
}

export function setupPagination({ results, totalPages }) {
  if (!paginationButtons) return;
  paginationButtons.innerHTML = '';

  if (totalPages <= 1) return;

  const params = results[0].filter;

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.className = 'pagination-button';
    pageNumber.textContent = i;

    paginationButtons.appendChild(pageNumber);

    pageNumber.addEventListener('click', () => {
      setCurrentPage(params, i);
    });
  }
  handleActivePageNumber(currentPage);
}

async function setCurrentPage(params, i) {
  currentPage = i;
  await getFiltersExercises(params, currentPage);
  handleActivePageNumber(currentPage);
  scrollToTop();
}

const handleActivePageNumber = currentPage => {
  document.querySelectorAll('.pagination-button').forEach((button, page) => {
    button.classList.remove('active-btn');
    if (page + 1 === currentPage) {
      button.classList.add('active-btn');
    }
    scrollToTop();
  });
};

function scrollToTop() {
  window.scrollTo({
    top: 830,
    behavior: 'auto',
  });
};
