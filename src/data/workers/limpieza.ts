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
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Limpieza1Image,
    rating: 5,
    reviewsAmount: 7,
    id: 1,
    description:
      '¡Hola! Soy Juan, un profesional de la limpieza. A lo largo de los años he aprendido a dejar todo impecable. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Limpieza2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
    description:
      '¡Hola! Soy Carlitos, el asesino de la suciedad. Cuando el polvo aparece, yo lo hago desaparecer. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Limpieza3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
    description:
      '¡Hola! Soy Martin, me dicen el "Rey de la limpieza" porque me encanta dejar todo impecable. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Limpieza4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
    description:
      '¡Hola!, Cuantas veces te paso que no tenes tiempo para limpiar tu casa, y cuando llegas del trabajo, no tenes ganas de hacerlo. Bueno, yo te puedo ayudar con eso. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Limpieza5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
    description:
      'La limpieza es mi pasión. A veces me dicen que soy un poco obsesivo, pero yo creo que es mejor así. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  },
];
