import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with an error
      console.error(`API Error (${error.response.status}):`, error.response.data?.message || error.message);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error: No response received from server. Check if backend is running and CORS allows this origin.');
    } else {
      console.error('Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
