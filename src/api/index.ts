import axios from 'axios';

export const ServiceApi  = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_BACKEND
});