import { WorkerDetailsWithId } from '../worker-details';
import {
  Electricista1Image,
  Electricista2Image,
  Electricista3Image,
  Electricista4Image,
  Electricista5Image,
} from '../../assets';

export const electricistaData: WorkerDetailsWithId = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Electricista1Image,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Electricista2Image,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Electricista3Image,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Electricista4Image,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Electricista5Image,
    id: 5,
  },
];
