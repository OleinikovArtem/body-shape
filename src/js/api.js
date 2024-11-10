import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

class APIService {
  constructor() {
    this.baseURL = BASE_URL;
    this.page = 0;
  }

  resetPage() {
    this.page = 0;
  }

  async getExercises(params1, params2, page = 1) {
    const fullUrl = `${this.baseURL}/exercises?${params1}=${params2}&page=${page}&limit=10`;
    return this.requestGET(fullUrl);
  }

  async getSearch(params1, params2, params3) {
    const fullUrl = `${this.baseURL}/exercises?${params1}=${params2}&keyword=${params3}&page=1&limit=10`;
    return this.requestGET(fullUrl);
  }

  async getExercisesById(id) {
    const fullUrl = `${this.baseURL}/exercises/${id}`;
    return this.requestGET(fullUrl);
  }

  async getFilter(params, page = 1) {
    const fullUrl = `${this.baseURL}/filters?filter=${params}&page=${page}&limit=12`;
    return this.requestGET(fullUrl);
  }

  async getExercisesByCategory(page = 1, limit = 12, filter = 'Muscles') {
    const params = { filter, page, limit };
    const fullUrl = `${this.baseURL}/filters?${this.getParameters(params)}`;
    return this.requestGET(fullUrl);
  }

  async getExercisesByKeyword(page = 1, limit = 12, category, categoryName, keyword) {
    const params = { page, limit };
    params[category] = categoryName;
    if (keyword) {
      params['keyword'] = keyword;
    }
    const fullUrl = `${this.baseURL}/exercises?${this.getParameters(params)}`;
    return this.requestGET(fullUrl);
  }

  async getQuote() {
    const fullUrl = `${this.baseURL}/quote`;
    return this.requestGET(fullUrl);
  }

  async patchRating(id, ratingData) {
    const fullUrl = `${this.baseURL}/exercises/${id}/rating`;
    return this.requestPATCH(fullUrl, ratingData);
  }

  async postSubscriptions(email) {
    const fullUrl = `${this.baseURL}/subscription`;
    return this.requestPOST(fullUrl, { email });
  }

  async rateExercise(id, rate = 0, email = '', review = '') {
    const fullUrl = `${this.baseURL}/exercises/${id}/rating`;
    return this.requestPATCH(fullUrl, { rate, email, review });
  }

  async requestGET(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async requestPOST(url, body) {
    try {
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async requestPATCH(url, body) {
    try {
      const response = await axios.patch(url, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  getParameters(parameters) {
    const params = new URLSearchParams(parameters);
    return params.toString();
  }
}

export default APIService;
