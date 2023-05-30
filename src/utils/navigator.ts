import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';

export type RootStackParamList = {
  ProfileScreen: undefined;
  CategoriesScreen: undefined;
  WorkersScreen: undefined;
};

export const useNavigation = () => {
  const navigation = useNativeNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};
