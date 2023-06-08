import React, { createContext } from 'react';
import { WorkerDetails } from '../data/worker-details';

export type HiredWorkersContextType = [
  WorkerDetails[],
  React.Dispatch<React.SetStateAction<WorkerDetails[]>>
];

export const HiredWorkersContext = createContext(
  [] as unknown as HiredWorkersContextType
);
