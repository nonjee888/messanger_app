import axios from "axios";

export const instance = axios.create({
  // baseURL: ,
});

instance.interceptors.request.use((config) => {
  return config;
});
