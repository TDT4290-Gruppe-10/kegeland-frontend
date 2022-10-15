import axios, { Method } from 'axios';

import { Token } from '../state/ducks/auth/auth.helpers';

import { isApiError } from './isApiError';
import { retrieveToken } from './storage';

const API_URL = 'localhost:8000'

const httpInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
});

httpInstance.interceptors.request.use(
  async (config) => {
    const token = await retrieveToken(Token.ACCESS_TOKEN);
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token;
      console.log(config.headers);
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export const apiCaller = <T = unknown>(
  endpoint: string,
  method: Method,
  data?: any,
) =>
  httpInstance
    .request<T>({ url: endpoint, method, data })
    .then((res) => res.data)
    .catch((err) => {
      if (err instanceof Error) {
        if (axios.isAxiosError(err)) {
          if (err.response && isApiError(err)) {
            let message = err.response.data.message;
            if (message instanceof Array) {
              message = message[0];
            }
            throw new Error(message);
          }
        }
        throw new Error(err.message);
      }
      throw new Error('An unknown error has occurred');
    });
