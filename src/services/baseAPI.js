import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'http://localhost:3333',
});

export default baseAPI;
