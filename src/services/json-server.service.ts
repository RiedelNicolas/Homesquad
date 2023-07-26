import axios from 'axios';
import { AddressType, CategoryType } from '../data/dataTypes';
import * as DefaultCategories from '../data/categories';
import * as DefaultAddresses from '../data/addresses';
import { defaultEmployments } from '../data/employments';
import { DayEmployments } from '../screens/EmploymentsScreen';
import { defaultPayments } from '../data/payments';
import { DayPayments } from '../screens/PaymentsRecordScreen';
const axiosClient = axios.create({
  baseURL: `https://homesquad-json-server.fly.dev`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getCategories = async () => {
  try {
    console.log('Fetching Categories from json-server');
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
    console.log('Fetching Addresses from json-server');
    const addresses = (await axiosClient.get<AddressType[]>('addresses')).data;
    return addresses;
  } catch (error) {
    console.log(error);
    return DefaultAddresses.addresses;
  }
};

export const addAddress = async (address: AddressType) => {
  try {
    console.log('Posting address to json-server', address);
    await axiosClient.post<AddressType[]>('addresses', address);
  } catch (error) {
    console.log(error);
  }
};

export const addSelectedAddress = async (address: AddressType) => {
  try {
    console.log('Posting selected-address to json-server', address);
    await axiosClient.post<AddressType[]>('selectedAddress', address);
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedAddress = async (): Promise<AddressType> => {
  try {
    console.log('Getting selected address');
    const address = (await axiosClient.get<AddressType>('selectedAddress'))
      .data;
    return address;
  } catch (error) {
    console.log(error);
    return DefaultAddresses.addresses[0];
  }
};

export const fetchEmployments = async () => {
  try {
    console.log('Fetching Employments from json-server');
    return (await axiosClient.get<DayEmployments[]>('employmentsByDay')).data;
  } catch (error) {
    console.log(error);
    return defaultEmployments;
  }
};

export const addEmployment = async (employment: DayEmployments) => {
  try {
    console.log('Posting employment to json-server', employment);
    await axiosClient.post<DayEmployments[]>('employmentsByDay', {
      ...employment,
      id: 9, //TODO: VER SI SE PUEDE HACER ALGO PARA NO HARDCODEAR EL ID
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPayments = async () => {
  try {
    console.log('Fetching Payments from json-server');
    return (await axiosClient.get<DayPayments[]>('paymentsByDay')).data;
  } catch (error) {
    console.log(error);
    return defaultPayments;
  }
};

export const addPayment = async (payment: DayPayments) => {
  try {
    console.log('Posting payment to json-server', payment);
    await axiosClient.post<DayPayments[]>('paymentsByDay', {
      ...payment,
      id: 9, //TODO: VER SI SE PUEDE HACER ALGO PARA NO HARDCODEAR EL ID
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePayment = async () => {
  try {
    console.log('Deleting payment from json-server');
    await axiosClient.delete('paymentsByDay/7');
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployment = async () => {
  try {
    console.log('Deleting employment from json-server');
    await axiosClient.delete('employmentsByDay/9');
  } catch (error) {
    console.log(error);
  }
};
