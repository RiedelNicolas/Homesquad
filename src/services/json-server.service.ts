import axios from 'axios';
import { CategoryType } from '../data/dataTypes';
import * as DefaultCategories from '../data/categories';
const axiosClient = axios.create({
  baseURL: `https://homesquad-json-server.fly.dev`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getCategories = async () => {
  try {
    const categories = (await axiosClient.get<CategoryType[]>('categories'))
      .data;
    return categories;
  } catch (error) {
    return DefaultCategories.categories;
  }
};
