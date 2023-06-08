import { WorkerDetails } from './worker-details';
import { carpinteriaData } from './workers/carpinteria';
import { electricistaData } from './workers/electricista';
import { fumigacionData } from './workers/fumigacion';
import { gasistaData } from './workers/gasista';

export const WorkersData: {
  [key: string]: Array<WorkerDetails & { id: number }>;
} = {
  Gasista: gasistaData,
  'Paseador de perros': gasistaData,
  Electricista: electricistaData,
  Pintor: gasistaData,
  Plomería: gasistaData,
  Limpieza: gasistaData,
  Jardinería: gasistaData,
  Fumigación: fumigacionData,
  'Técnico de aire': gasistaData,
  Carpintería: carpinteriaData,
  Otros: gasistaData,
};
