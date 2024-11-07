import axios from 'axios';

const url = {
  BASE_URL: 'https://your-energy.b.goit.study/api',
  EXERCISES: '/exercises',
  FILTERS: '/filters',
  QUOTE: '/quote',
  SUBSCRIPTION: '/subscription',
  RATING: '/rating',
};

// Вправа за категорією
function getExercisesByCategory(page = 1, limit = 12, filter = 'Muscles') {
  const params = { filter, page, limit };
  const fullUrl = getUrl(url.FILTERS, getParameters(params));

  return requestGET(fullUrl);
}

// Вправа за ключовим словом
function getExercisesByKeyword(
  page = 1,
  limit = 12,
  category,
  categoryName,
  keyword
) {
  const params = {
    page,
    limit,
  };
  params[category] = categoryName;
  if (keyword) {
    params['keyword'] = keyword;
  }
  const fullUrl = getUrl(url.EXERCISES, getParameters(params));

  return requestGET(fullUrl);
}

// Цитата
function getQuote() {
  return requestGET(getUrl(url.QUOTE));
}

// Інфо про вправу по ID
function getExerciseById(id) {
  const fullUrl = getUrl(url.EXERCISES) + `/${id}`;

  return requestGET(fullUrl);
}

// Підписка POST
async function subscribe(email) {
  const fullUrl = getUrl(url.SUBSCRIPTION);
  const requestBody = { email };

  return requestPOST(fullUrl, requestBody);
}

// Рейтинг вправи PATCH
function rateExercise(id, rate = 0, email = '', review = '') {
  const fullUrl = getUrl(url.EXERCISES) + `/${id}${url.RATING}`;
  const requestBody = { rate, email, review };
  return requestPATCH(fullUrl, requestBody);
}

// GET axios
async function requestGET(url) {
  return axios
    .get(url)
    .then(result => result.data)
    .catch(err => err.response);
}

// POST axios
async function requestPOST(url, body) {
  return axios
    .post(url, body)
    .then(result => result)
    .catch(err => err.response);
}

// PATCH axios
async function requestPATCH(url, body) {
  return axios
    .patch(url, body)
    .then(result => result)
    .catch(err => err.response);
}

// Форматування параметрів
function getParameters(parameters) {
  const params = new URLSearchParams(parameters);
  return params;
}

// URL
function getUrl(endpoint, params) {
  return url.BASE_URL + endpoint + (params ? `?${params}` : '');
}

export {
  getExercisesByCategory,
  getExercisesByKeyword,
  getQuote,
  getExerciseById,
  subscribe,
  rateExercise,
};
