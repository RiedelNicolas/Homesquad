import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { ProfileScreen } from './screens/ProfesionalProfile';
import { WorkersScreen } from './screens/WorkersScreen';
import { ChatScreen } from './screens/ChatScreen';
import { RootStackParamList } from './utils/navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'CategoriesScreen'}>
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="WorkersScreen" component={WorkersScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
