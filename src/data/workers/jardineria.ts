import { WorkerDetailsWithId } from '../worker-details';
import {
  Jardineria1Image,
  Jardineria2Image,
  Jardineria3Image,
  Jardineria4Image,
  Jardineria5Image,
} from '../../assets';

export const jardineriaData: WorkerDetailsWithId = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Jardineria1Image,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Jardineria2Image,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Jardineria3Image,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Jardineria4Image,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Jardineria5Image,
    id: 5,
  },
];
