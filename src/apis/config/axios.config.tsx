/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance } from "axios";

export function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  });

  instance.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      appid: process.env.NEXT_PUBLIC_API_KEY,
      lang: 'es'
    };

    return config;
  });


  return instance;
}
