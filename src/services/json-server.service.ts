import axios from 'axios';
import { CategoryType } from '../data/dataTypes';

const axiosClient = axios.create({
  baseURL: `https://homesquad-json-server.fly.dev`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getCategories = async () => {
  return (await axiosClient.get<CategoryType[]>('categories')).data;
};
