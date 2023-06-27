import axios, { AxiosInstance } from 'axios';
import { COCKTAIL_RECIPE_API_URL, COCKTAIL_RECIPE_STATIC_UTL } from './endpoint';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: COCKTAIL_RECIPE_API_URL,
});

export const axiosStaticInstance: AxiosInstance = axios.create({
  baseURL: COCKTAIL_RECIPE_STATIC_UTL,
});
