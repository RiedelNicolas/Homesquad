import { WorkerDetailsWithId } from '../worker-details';
import {
  Gasista1Image,
  Gasista2Image,
  Gasista3Image,
  Gasista4Image,
  Gasista5Image,
} from '../../assets';

export const gasistaData: Array<WorkerDetailsWithId> = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Gasista1Image,
    rating: 5,
    reviewsAmount: 7,
    id: 1,
    description:
      '¡Hola! Soy Juan, un gasista matriculado con más de 10 años de experiencia. Estoy aquí para ofrecerte servicios de instalación, mantenimiento y reparación de gas. Mi objetivo es brindarte soluciones seguras y eficientes. Confía en mí para mantener tu hogar o negocio en perfectas condiciones.',
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Gasista2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
    description:
      '¡Hola!, soy Carlitos, me apasiona el mundo del Gas, y me encanta ayudar a las personas a resolver sus problemas. Si necesitas un gasista matriculado, no dudes en contactarme.',
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Gasista3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
    description:
      '¡Hola!, soy Martín, mi creencia es que el cliente es lo primero, y me esfuerzo por brindar un servicio de calidad. Si necesitas un gasista matriculado, no dudes en contactarme.',
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Gasista4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
    description:
      '¡Hola!, soy Facundo, a veces las cosas se rompen, y cuando eso sucede, estoy aquí para ayudarte. Si necesitas un gasista matriculado, no dudes en contactarme.',
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Gasista5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
    description:
      '¡Hola!, soy Ignacio, alguna vez te preguntaste ¿qué pasaría si no tuvieras gas? Yo sí, y por eso me dedico a ayudar a las personas a resolver sus problemas. Si necesitas un gasista matriculado, no dudes en contactarme.',
  },
];
