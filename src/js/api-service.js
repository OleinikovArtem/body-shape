import axios from 'axios';

export default class APIService {
  constructor() {
    this.baseURL = 'https://your-energy.b.goit.study/api/';
    this.page = 0;
  }

  async getExercises(params1, params2, page) {
    try {
      const response = await axios.get(
        `${this.baseURL}exercises?${params1}=${params2}&page=${page}&limit=10`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getExercisesById(_id) {
    try {
      const response = await axios.get(`${this.baseURL}exercises/${_id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilter(params, page) {
    try {
      const response = await axios.get(
        `${this.baseURL}filters?filter=${params}&page=${page}&limit=12`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  
  async patchRating(_id, ratingData) {
    try {
      this.page += 1;
      const response = await axios.patch(
        `${this.baseURL}exercises/${_id}/rating`,
        ratingData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}
