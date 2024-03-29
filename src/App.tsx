import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from './screens/ProfileScreen';
import { WorkersScreen } from './screens/WorkersScreen';
import { ChatScreen } from './screens/ChatScreen';
import { RootStackParamList } from './utils/navigator';
import { HiredWorkersContext } from './contexts/hired-workers.context';
import { WorkerDetails } from './data/worker-details';
import { Home } from './screens/HomeScreen';
import { CustomerScreen } from './screens/CustomerScreen';
import { ProfessionalScreen } from './screens/ProfessionalScreen';
import { AddressScreen } from './screens/AddressScreen';
import { EmploymentsScreen } from './screens/EmploymentsScreen';
import { PaymentsRecordScreen } from './screens/PaymentsRecordScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { ChatScreenProfesional } from './screens/ChatScreenProfesional';
import { ProposalScreen } from './screens/ProposalScreen';

// Navigators
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [hiredWorkers, setHiredWorkers] = useState([] as WorkerDetails[]);

  return (
    <SafeAreaProvider>
      <HiredWorkersContext.Provider value={[hiredWorkers, setHiredWorkers]}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="WorkersScreen" component={WorkersScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="AddressScreen" component={AddressScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
            <Stack.Screen
              name="ProfessionalScreen"
              component={ProfessionalScreen}
            />
            <Stack.Screen
              name="EmploymentsScreen"
              component={EmploymentsScreen}
            />
            <Stack.Screen
              name="PaymentsRecordScreen"
              component={PaymentsRecordScreen}
            />
            <Stack.Screen
              name="chatScreenProfesional"
              component={ChatScreenProfesional}
            />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="ProposalScreen" component={ProposalScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </HiredWorkersContext.Provider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
