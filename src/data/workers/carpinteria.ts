import { WorkerDetailsWithId } from '../worker-details';
import {
  Carpintero1Image,
  Carpintero2Image,
  Carpintero3Image,
  Carpintero4Image,
  Carpintero5Image,
} from '../../assets';

export const carpinteriaData: WorkerDetailsWithId = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Carpintero1Image,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Carpintero2Image,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Carpintero3Image,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Carpintero4Image,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Carpintero5Image,
    id: 5,
  },
];
