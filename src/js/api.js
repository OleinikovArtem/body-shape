import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

class APIService {
  constructor() {
    this.baseURL = BASE_URL;
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

  async getQuote() {
    const fullUrl = `${this.baseURL}/quote`;
    return this.requestGET(fullUrl);
  }

  async postSubscriptions(email) {
    const fullUrl = `${this.baseURL}/subscription`;
    return axios.post(fullUrl, { email });
  }

  async requestGET(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
}

export default APIService;
