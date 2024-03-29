import { WorkerDetailsWithId } from '../worker-details';
import {
  Fumigacion1Image,
  Fumigacion2Image,
  Fumigacion3Image,
  Fumigacion4Image,
  Fumigacion5Image,
} from '../../assets';

export const fumigacionData: Array<WorkerDetailsWithId> = [
  {
    name: 'Franco Diaz',
    location: 'Puerto Madero, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Fumigacion1Image,
    rating: 4,
    reviewsAmount: 65,
    id: 1,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
  {
    name: 'Gabriel Torres',
    location: 'Ramos Mejia, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Fumigacion2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
  {
    name: 'Alejandro Perez',
    location: 'Lanus, Buenos Aires',
    deliveryTime: '25 min',
    distance: '30 km',
    image: Fumigacion3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
  {
    name: 'Facundo Suarez',
    location: 'Santa Fe, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Fumigacion4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
  {
    name: 'Martin Ortega',
    location: 'Tortuguitas, Buenos Aires',
    deliveryTime: '25 min',
    distance: '60 km',
    image: Fumigacion5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
];
