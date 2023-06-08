import { WorkerDetailsWithId } from '../worker-details';
import {
  Jardineria1Image,
  Jardineria2Image,
  Jardineria3Image,
  Jardineria4Image,
  Jardineria5Image,
} from '../../assets';

export const jardineriaData: Array<WorkerDetailsWithId> = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Jardineria1Image,
    rating: 5,
    reviewsAmount: 7,
    id: 1,
    description:
      '¡Hola!, soy Juan. ¿Te gustan los jardines? ¡A mi también!. Me encanta trabajar en ellos y hacerlos crecer. Si necesitas ayuda con el tuyo, ¡no dudes en contactarme!',
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Jardineria2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
    description:
      '¡Hola!, soy Carlitos, y me encanta trabajar en jardines. Si necesitas ayuda con el tuyo, ¡no dudes en contactarme!',
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Jardineria3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
    description:
      '¡Hola!, soy Martin. De pequeño me encantaba jugar en el jardín de mi casa, y ahora me encanta trabajar en ellos. Si necesitas ayuda con el tuyo, ¡no dudes en contactarme!',
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Jardineria4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
    description:
      '¡Hola!, soy Facundo, y tengo una filosofia de vida: "Si no hay plantas, no hay vida". Si necesitas ayuda con tu jardín, ¡no dudes en contactarme!',
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Jardineria5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
    description:
      '¡Hola!, soy Ignacio. De joven descubrí las marravillas de la jardinería. Si necesitas ayuda con tu jardín, ¡no dudes en contactarme!',
  },
];
