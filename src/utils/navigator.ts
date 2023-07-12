import {
  useNavigation as useNativeNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { ProfileScreenProps } from '../screens/ProfileScreen';
import { ChatScreenProps } from '../screens/ChatScreen';
import { WorkerDetailsWithId } from '../data/worker-details';
import { EmploymentsScreenProps } from '../screens/EmploymentsScreen';
import { PaymentsRecordScreenProps } from '../screens/PaymentsRecordScreen';
import { PaymentScreenProps } from '../screens/PaymentScreen';
import { ChatScreenProfesionalProps } from '../screens/ChatScreenProfesional';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: ProfileScreenProps;
  WorkersScreen: Array<WorkerDetailsWithId>;
  ChatScreen: ChatScreenProps;
  CustomerScreen: undefined;
  ProfessionalScreen: undefined;
  EmploymentsScreen: EmploymentsScreenProps;
  PaymentsRecordScreen: PaymentsRecordScreenProps;
  PaymentScreen: PaymentScreenProps;
  chatScreenProfesional: ChatScreenProfesionalProps;
  ProposalScreen: undefined;
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
