import { WorkerDetails } from './worker-details';
import { carpinteriaData } from './workers/carpinteria';
import { electricistaData } from './workers/electricista';
import { fumigacionData } from './workers/fumigacion';
import { gasistaData } from './workers/gasista';
import { jardineriaData } from './workers/jardineria';
import { limpiezaData } from './workers/limpieza';

export const WorkersData: {
  [key: string]: Array<WorkerDetails & { id: number }>;
} = {
  Gasista: gasistaData,
  'Paseador de perros': gasistaData,
  Electricista: electricistaData,
  Pintor: gasistaData,
  Plomería: gasistaData,
  Limpieza: limpiezaData,
  Jardinería: jardineriaData,
  Fumigación: fumigacionData,
  'Técnico de aire': gasistaData,
  Carpintería: carpinteriaData,
  Otros: gasistaData,
};
