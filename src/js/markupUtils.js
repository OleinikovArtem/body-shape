import { getRoundedRating } from './utils.js';

export const renderTitle = (element, category) => {
  element.innerHTML = category
    ? `Exercises /<span>${category}</span>`
    : 'Exercises';
};

export const getCategoriesMarkup = categories => {
  return categories
    .map(
      ({ filter, name, imgURL }) => `
    <li class="categories-list-item" data-filter="${filter}" data-name="${name}"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url(${imgURL})">
      <p class="categories-list-item-title">${name}</p>
      <p class="categories-list-item-sub-title">${filter}</p>
    </li>
  `
    )
    .join('');
};

export const getExercisesMarkup = (exercises, favoritesPage) => {
  return exercises
    .map(
      ({ rating, name, bodyPart, target, burnedCalories, _id }) => `
    <li class="exercise-list-item" data-id="${_id}">
      <div class="first-row">
        <div class="workout-element">WORKOUT</div>
        ${
          favoritesPage
            ? `
            <button type="button" data-id="${_id}" class="favorites-delete-button">
              <svg width="20" height="20">
                <use href="./img/sprite.svg#icon-trash"></use>
              </svg>
            </button>
            `
            : `
            <div class="rating-holder">
              <span>${getRoundedRating(rating)}</span>
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-star"></use>
              </svg>
            </div>
        `
        }
        <button class="start-button">
          Start
          <svg width="16" height="16">
            <use href="./img/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      <div class="second-row">
        <svg width="24" height="24">
          <use href="./img/sprite.svg#icon-running-black"></use>
        </svg>
        <p>${name}</p>
      </div>
      <ul class="exercise-description-list">
        <li><span>Burned calories:</span> ${burnedCalories} / 3 min</li>
        <li><span>Body part:</span> ${bodyPart}</li>
        <li><span>Target:</span> ${target}</li>
      </ul>
    </li>
  `
    )
    .join('');
};

export const getExerciseModalMarkup = (exerciseData, isFavorited) => {
  const {
    name,
    rating,
    gifUrl,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    description,
    time,
  } = exerciseData;

  const ratingMarkup = Array.from({ length: 5 })
    .map((_, index) => {
      const isActive = index < getRoundedRating(rating);
      return `
        <li>
          <svg width="18" height="18" class="rating-icon ${
            isActive ? 'active' : ''
          }">
            <use href="./img/sprite.svg#icon-star"></use>
          </svg>
        </li>`;
    })
    .join('');

  return `
    <button class="close-modal">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
        <path
          stroke="#F4F4F4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19.833 8.167 8.167 19.833m0-11.666 11.666 11.666"
        />
      </svg>
    </button>
    <img src="${gifUrl}" alt="${name}" class="exercise-gif" />
    <div>
      <div class="modal-content-holder">
        <h2 class="exercise-name">${name}</h2>
        <div class="exercise-rating">
          <span>${getRoundedRating(rating)}</span>
          <ul class="rating-holder">${ratingMarkup}</ul>
        </div>
        <ul class="modal-exercise-description-list">
          <li>Target <span>${target}</span></li>
          <li>Body Part <span>${bodyPart}</span></li>
          <li>Equipment <span>${equipment}</span></li>
          <li>Popular <span>${popularity}</span></li>
          <li>Calories Burned <span>${burnedCalories}/${time} min</span></li>
        </ul>
        <p class="exercise-description">${description}</p>
      </div>
      <button class="favorite-button ${isFavorited ? 'favorited' : ''}">
        ${isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        <svg width="20" height="20">
          <use href="./img/sprite.svg#${
            isFavorited ? 'icon-trash' : 'icon-heart'
          }"></use>
        </svg>
      </button>
    </div>
  `;
};
