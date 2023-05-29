import React from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { WorkerCard, WorkerDetails } from '../components/WorkerCard';

import {
  Architect1Image,
  Architect2Image,
  Architect3Image,
  Architect4Image,
  Architect5Image,
} from '../assets';

const workers: Array<WorkerDetails & { id: number }> = [
  {
    name: 'Juan Fernandez',
    categories: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Architect1Image,
    rating: 5,
    reviewsAmount: 30,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    categories: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Architect2Image,
    rating: 4.5,
    reviewsAmount: 13,
    id: 2,
  },
  {
    name: 'Martín Morales',
    categories: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Architect3Image,
    rating: 4,
    reviewsAmount: 14,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    categories: 'Tero Violado, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Architect4Image,
    rating: 5,
    reviewsAmount: 52,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    categories: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Architect5Image,
    rating: 3.5,
    reviewsAmount: 17,
    id: 5,
  },
];

export const WorkersScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header label="Architects nearby" />
      {/* <Card /> */}
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={workers}
        renderItem={({ item }) => {
          return <WorkerCard details={item} navigation={navigation} />;
        }}
        keyExtractor={(worker) => worker.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DB2BF',
    alignItems: 'center',
  },
});
