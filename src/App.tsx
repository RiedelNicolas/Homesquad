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
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </HiredWorkersContext.Provider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
