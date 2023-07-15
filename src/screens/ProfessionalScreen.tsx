import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { commonStyle } from '../utils/style';
import { Carpintero3Image } from '../assets';
import { ProfileScreen } from './ProfileScreen';
import { ProfessionalChats } from './ProfessionalChats';

const Tab = createBottomTabNavigator();

export const ProfessionalScreen = () => {
  const workerDetails = {
    name: 'Mario Gomez',
    location: 'Olivos, Buenos Aires',
    deliveryTime: '30 min',
    distance: '3.5 km',
    image: Carpintero3Image,
    rating: 4.5,
    reviewsAmount: 14,
    id: 3,
    description:
      '¡Hola! Soy Mario, el salvador de los muebles viejos. Restauro muebles antiguos y los dejo como nuevos. Si necesitas ayuda con la tuya, ¡no dudes en contactarme!',
  };

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        initialParams={{ details: workerDetails, editable: true }}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'account'}
              size={40}
              color={focused ? commonStyle.secondaryColor : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfessionalChats"
        component={ProfessionalChats}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'chat'}
              size={40}
              color={focused ? commonStyle.secondaryColor : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
