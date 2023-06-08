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
    description:
      '¡Hola! Soy Pedro, y me encanta trabajar con madera. A veces me dicen que soy un poco obsesivo con los detalles, pero es que me gusta que todo quede perfecto. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
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
    description:
      '!Hola! Soy Carlos y considero que la madera es un material noble, por lo que debe ser tratado con respeto. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
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
    description:
      '¡Hola! Soy Mario, el salvador de los muebles viejos. Restauro muebles antiguos y los dejo como nuevos. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
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
    description:
      '¡Hola! Soy Luis. Pensás en madera, pensás en mí. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
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
    description:
      'A veces me preguntan si me gusta trabajar con madera, y yo les respondo: "Me encanta". Soy Javier, y me encanta trabajar con madera. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
];
