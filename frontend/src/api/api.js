// frontend/src/api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api', // same as your Express base URL
});

export const testConnection = async () => {
  try {
    const response = await API.get('/student/test');
    return response.data;
  } catch (error) {
    console.error('Error connecting to backend:', error.message);
    throw error;
  }
};

export default API;