import { Image } from 'react-native';

export type WorkerDetailsWithId = Array<WorkerDetails & { id: number }>;

export type Review = {
  user: string;
  title: string;
  rating: number;
  body: string;
};

export type WorkerDetails = {
  name: string;
  location: string;
  deliveryTime: string;
  distance: string;
  image: React.ComponentProps<typeof Image>['source'];
  reviews?: Array<Review>;
};
