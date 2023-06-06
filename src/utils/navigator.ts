import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { ProfileScreenProps } from '../screens/ProfesionalProfile';

export type RootStackParamList = {
  ProfileScreen: ProfileScreenProps;
  CategoriesScreen: undefined;
  WorkersScreen: undefined;
  ChatScreen: undefined;
};

export const useNavigation = () => {
  const navigation = useNativeNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};
