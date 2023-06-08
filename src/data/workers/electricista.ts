import { WorkerDetailsWithId } from '../worker-details';
import {
  Electricista1Image,
  Electricista2Image,
  Electricista3Image,
  Electricista4Image,
  Electricista5Image,
} from '../../assets';

export const electricistaData: Array<WorkerDetailsWithId> = [
  {
    name: 'Pedro Fernandez',
    location: 'Recoleta, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Electricista1Image,
    rating: 5,
    reviewsAmount: 15,
    id: 1,
    description:
      'Soy Pedro, un electricista apasionado. Recuerdo una vez en la que solucioné un problema eléctrico en una casa antigua. Encontré un cableado defectuoso no registrado en los planos. Con creatividad y habilidad, resolví el desafío de manera eficiente, dejando a los clientes satisfechos. Esto refuerza mi compromiso de brindar un servicio eléctrico de calidad en cada trabajo.',
  },
  {
    name: 'Manuel Rodriguez',
    location: 'Quilmes, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Electricista2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
    description:
      'Soy Manuel Rodríguez, un electricista confiable y experimentado. Me especializo en soluciones seguras y eficientes para problemas eléctricos. Con habilidad, resolví un problema en el panel eléctrico de una empresa, asegurando un funcionamiento sin interrupciones. Siempre estoy comprometido en superar las expectativas de mis clientes.',
  },
  {
    name: 'Lucas Morales',
    location: 'Olivos, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Electricista3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
    description:
      'El mundo de la electricidad a veces puede ser complicado, pero no te preocupes, yo te puedo ayudar. Si necesitas un electricista matriculado, no dudes en contactarme.',
  },
  {
    name: 'Nicolas Riedel',
    location: 'La Plata, Buenos Aires',
    deliveryTime: '240 min',
    distance: '50 km',
    image: Electricista4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
    description:
      'Comenze estudiando ingenieria informatica, pero durante la carrera descubri las maravillas del mundo de la electricidad y mi vida cambio para siempre. Si necesitas un electricista matriculado, no dudes en contactarme',
  },
  {
    name: 'Victoria Medina',
    location: 'Tigre, Buenos Aires',
    deliveryTime: '25 min',
    distance: '13.1 km',
    image: Electricista5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
    description: 'Soy tu futura mano derecha para todo lo que necesites.',
  },
];
