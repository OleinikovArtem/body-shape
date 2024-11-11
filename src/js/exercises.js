import { fetchCategories, fetchExercises } from './api.js';
import { Pagination } from './Pagination.js';
import {
  renderTitle,
  getCategoriesMarkup,
  getExercisesMarkup,
} from './markupUtils.js';
import { toggleClearButton, clearInput, scrollToElement } from './utils.js';

export const initializeExercisesSection = () => {
  const categoriesContainer = document.querySelector('.categories-list');
  const filtersTitle = document.querySelector('.filters-title');
  const filters = document.querySelector('#filters');
  const paginationContainer = document.querySelector('.pagination');
  const exercisesContainer = document.querySelector('.exercises-list');
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  const clearButton = document.querySelector('.clear-button');

  let activeFilter = 'Muscles';
  let categoryPagination;
  let exercisePagination;
  let currentCategory = '';
  let currentFilter = '';

  searchInput.addEventListener('input', () =>
    toggleClearButton(searchInput, clearButton)
  );
  clearButton.addEventListener('click', () =>
    clearInput(searchInput, clearButton)
  );
  searchForm.addEventListener('submit', event => handleFormSubmit(event));

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    loadExercises({
      category: currentCategory,
      filter: currentFilter,
      keyword: searchTerm || '',
      resetPagination: true,
    });
  };

  const renderCategories = (categories, scrollToFilters) => {
    categoriesContainer.innerHTML = '';
    categoriesContainer.style.display = 'grid';
    exercisesContainer.style.display = 'none';
    searchForm.style.display = 'none';
    renderTitle(filtersTitle, null);

    categoriesContainer.insertAdjacentHTML(
      'beforeend',
      categories && categories.length
        ? getCategoriesMarkup(categories)
        : '<p>No categories found for the selected filter.</p>'
    );

    scrollToFilters && scrollToElement(filtersTitle);
  };

  const renderExercises = (exercises, category) => {
    exercisesContainer.innerHTML = '';
    categoriesContainer.style.display = 'none';
    exercisesContainer.style.display = 'grid';
    searchForm.style.display = 'flex';
    renderTitle(filtersTitle, category);
    scrollToElement(filtersTitle);

    exercisesContainer.insertAdjacentHTML(
      'beforeend',
      exercises && exercises.length
        ? getExercisesMarkup(exercises)
        : '<p>No exercises found for the selected category and filter.</p>'
    );
  };

  const setActiveFilterButton = filterName => {
    document.querySelectorAll('.filter-button').forEach(button => {
      button.classList.toggle('active', button.dataset.filter === filterName);
    });
  };

  const loadCategories = async ({
    filter,
    page = 1,
    resetPagination = false,
    scrollToFilters,
  }) => {
    activeFilter = filter;
    setActiveFilterButton(filter);

    const data = await fetchCategories(filter, page);
    renderCategories(data.results, scrollToFilters);

    if (!categoryPagination || resetPagination) {
      categoryPagination = new Pagination({
        container: paginationContainer,
        totalPages: data.totalPages,
        onPageChange: page =>
          loadCategories({ filter: activeFilter, page, scrollToFilters: true }),
      });
    } else {
      categoryPagination.setTotalPages(data.totalPages);
    }
  };

  const loadExercises = async ({
    category,
    filter,
    keyword = '',
    page = 1,
    resetPagination = false,
  }) => {
    currentCategory = category;
    currentFilter = filter;

    const data = await fetchExercises({
      bodypart: filter === 'Body parts' ? category : '',
      muscles: filter === 'Muscles' ? category : '',
      equipment: filter === 'Equipment' ? category : '',
      keyword,
      page,
      limit: 10,
    });

    renderExercises(data.results, category);

    if (resetPagination || !exercisePagination) {
      exercisePagination = new Pagination({
        container: paginationContainer,
        totalPages: data.totalPages,
        onPageChange: newPage =>
          loadExercises({
            category,
            filter,
            keyword,
            page: newPage,
          }),
      });
    } else {
      exercisePagination.setTotalPages(data.totalPages);
    }
  };

  categoriesContainer.addEventListener('click', event => {
    const categoryItem = event.target.closest('.categories-list-item');
    if (categoryItem) {
      loadExercises({
        category: categoryItem.dataset.name,
        filter: categoryItem.dataset.filter,
        resetPagination: true,
      });
    }
  });

  filters.addEventListener('click', event => {
    const filterButton = event.target.closest('.filter-button');
    if (filterButton) {
      loadCategories({
        filter: filterButton.dataset.filter,
        resetPagination: true,
      });
    }
  });

  loadCategories({ filter: 'Muscles' });
};
