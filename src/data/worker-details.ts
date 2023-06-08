import { Image } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

export type WorkerDetails = {
  name: string;
  location: string;
  deliveryTime: string;
  distance: string;
  image: React.ComponentProps<typeof Image>['source'];
  rating: React.ComponentProps<typeof AirbnbRating>['defaultRating'];
  reviewsAmount: number;
};
