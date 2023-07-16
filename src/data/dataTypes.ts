import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface CategoryType {
  key: string;
  category: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export interface AddressType {
  key: string;
  address: string;
}
