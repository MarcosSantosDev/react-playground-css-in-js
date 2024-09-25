import axios from 'axios';

import { env } from '@/env';
import localStorageUtils from '@/utils/localStorage';

const axiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: env.VITE_API_URL,
  });

  axiosInstance.interceptors.request.use(
    config => {
      const token = localStorageUtils.getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

const apiClient = axiosInstance();

export { apiClient };
