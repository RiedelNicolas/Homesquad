import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { commonStyle } from '../utils/style';
import { CategoriesScreen } from './CategoriesScreen';
import { HiredWorkersScreen } from './HiredWorkersScreen';

const Tab = createBottomTabNavigator();

export const CustomerScreen = () => {
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
};
