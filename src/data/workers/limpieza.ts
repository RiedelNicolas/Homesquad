import { WorkerDetailsWithId } from '../worker-details';
import {
  Limpieza1Image,
  Limpieza2Image,
  Limpieza3Image,
  Limpieza4Image,
  Limpieza5Image,
} from '../../assets';

export const limpiezaData: Array<WorkerDetailsWithId> = [
  {
    name: 'Mario Rodriguez',
    location: 'Palermo, CABA',
    deliveryTime: '20 min',
    distance: '2.5 km',
    image: Limpieza1Image,
    rating: 4.2,
    reviewsAmount: 28,
    id: 1,
    description:
      '¡Hola! Soy Juan, un profesional de la limpieza. A lo largo de los años he aprendido a dejar todo impecable. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Fernanda Herrera',
    location: 'Morón, Buenos Aires',
    deliveryTime: '30 min',
    distance: '3.8 km',
    image: Limpieza2Image,
    rating: 4.7,
    reviewsAmount: 35,
    id: 2,
    description:
      '¡Hola! Soy Carlitos, el asesino de la suciedad. Cuando el polvo aparece, yo lo hago desaparecer. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Carolina Paredes',
    location: 'La Plata, Buenos Aires',
    deliveryTime: '60 min',
    distance: '10 km',
    image: Limpieza3Image,
    rating: 4.5,
    reviewsAmount: 14,
    id: 3,
    description:
      '¡Hola! Soy Martin, me dicen el "Rey de la limpieza" porque me encanta dejar todo impecable. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Marcela Suarez',
    location: 'Quilmes, Buenos Aires',
    deliveryTime: '55 min',
    distance: '6.2 km',
    image: Limpieza4Image,
    rating: 3.7,
    reviewsAmount: 21,
    id: 4,
    description:
      '¡Hola!, Cuantas veces te paso que no tenes tiempo para limpiar tu casa, y cuando llegas del trabajo, no tenes ganas de hacerlo. Bueno, yo te puedo ayudar con eso. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Javier Rios',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Limpieza5Image,
    rating: 4.8,
    reviewsAmount: 18,
    id: 5,
    description:
      'La limpieza es mi pasión. A veces me dicen que soy un poco obsesivo, pero yo creo que es mejor así. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
];
