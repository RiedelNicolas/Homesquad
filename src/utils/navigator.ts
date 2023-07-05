import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { ProfileScreenProps } from '../screens/ProfileScreen';
import { ChatScreenProps } from '../screens/ChatScreen';
import { WorkerDetailsWithId } from '../data/worker-details';
import { AddressScreenProps } from '../screens/AddressScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: ProfileScreenProps;
  AddressScreen: AddressScreenProps;
  WorkersScreen: Array<WorkerDetailsWithId>;
  ChatScreen: ChatScreenProps;
  CustomerScreen: undefined;
  ProfessionalScreen: undefined;
};

export type TabParamList = {
  CategoriesScreen: undefined;
  HiredWorkersScreen: undefined;
};

export function useNavigation<
  T extends RootStackParamList | TabParamList
>(): NavigationProp<T> {
  const navigation = useNativeNavigation<NavigationProp<T>>();
  return navigation;
}
