import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { WorkersScreen } from './screens/WorkersScreen';
import { ChatScreen } from './screens/ChatScreen';
import { RootStackParamList } from './utils/navigator';
import { HiredWorkersScreen } from './screens/HiredWorkersScreen';
import { HiredWorkersContext } from './contexts/hired-workers.context';
import { WorkerDetails } from './data/worker-details';
import { commonStyle } from './utils/style';

// Navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'home'}
              size={40}
              color={focused ? commonStyle.secondaryColor : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HiredWorkersScreen"
        component={HiredWorkersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'account-check'}
              size={40}
              color={focused ? commonStyle.secondaryColor : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
          </Stack.Navigator>
        </NavigationContainer>
      </HiredWorkersContext.Provider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
