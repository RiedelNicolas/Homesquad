import { WorkerDetailsWithId } from '../worker-details';
import {
  Carpintero1Image,
  Carpintero2Image,
  Carpintero3Image,
  Carpintero4Image,
  Carpintero5Image,
} from '../../assets';

export const carpinteriaData: Array<WorkerDetailsWithId> = [
  {
    name: 'Pedro Rodriguez',
    location: 'Palermo, CABA',
    deliveryTime: '40 min',
    distance: '4.2 km',
    image: Carpintero1Image,
    rating: 4.5,
    reviewsAmount: 9,
    id: 1,
  },
  {
    name: 'Carlos Perez',
    location: 'Morón, Buenos Aires',
    deliveryTime: '50 min',
    distance: '4.9 km',
    image: Carpintero2Image,
    rating: 4,
    reviewsAmount: 6,
    id: 2,
  },
  {
    name: 'Mario Gomez',
    location: 'Olivos, Buenos Aires',
    deliveryTime: '30 min',
    distance: '3.5 km',
    image: Carpintero3Image,
    rating: 4.5,
    reviewsAmount: 14,
    id: 3,
  },
  {
    name: 'Luis Fernandez',
    location: 'Santa Fe, Santa Fe',
    deliveryTime: '240 min',
    distance: '40 km',
    image: Carpintero4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
  },
  {
    name: 'Javier Lopez',
    location: 'Belgrano, Buenos Aires',
    deliveryTime: '30 min',
    distance: '3.3 km',
    image: Carpintero5Image,
    rating: 3,
    reviewsAmount: 5,
    id: 5,
  },
];
