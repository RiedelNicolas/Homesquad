import axios from 'axios';
import { AddressType, CategoryType } from '../data/dataTypes';
import * as DefaultCategories from '../data/categories';
import * as DefaultAddresses from '../data/addresses';
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
    console.log(error);
    return DefaultCategories.categories;
  }
};

export const getAddresses = async () => {
  try {
    const addresses = (await axiosClient.get<AddressType[]>('addresses')).data;
    return addresses;
  } catch (error) {
    console.log(error);
    return DefaultAddresses.addresses;
  }
};

export const addAddress = async (address: AddressType) => {
  try {
    await axiosClient.post<AddressType[]>('addresses', address);
  } catch (error) {
    console.log(error);
  }
};
