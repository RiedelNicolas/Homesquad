import { WorkerDetailsWithId } from '../worker-details';
import {
  Limpieza1Image,
  Limpieza2Image,
  Limpieza3Image,
  Limpieza4Image,
  Limpieza5Image,
} from '../../assets';

export const limpiezaData: WorkerDetailsWithId = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Limpieza1Image,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Limpieza2Image,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Limpieza3Image,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Limpieza4Image,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Limpieza5Image,
    id: 5,
  },
];
