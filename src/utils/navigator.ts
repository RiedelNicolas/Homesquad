import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { ProfileScreenProps } from '../screens/ProfileScreen';
import { ChatScreenProps } from '../screens/ChatScreen';

export type RootStackParamList = {
  ProfileScreen: ProfileScreenProps;
  CategoriesScreen: undefined;
  WorkersScreen: undefined;
  ChatScreen: ChatScreenProps;
};

export const useNavigation = () => {
  const navigation = useNativeNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};
