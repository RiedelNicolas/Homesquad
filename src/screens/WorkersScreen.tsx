import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { WorkerCard, WorkerDetails } from '../components/WorkerCard';
import {
  Architect1Image,
  Architect2Image,
  Architect3Image,
  Architect4Image,
  Architect5Image,
} from '../assets';
import { Searchbar } from 'react-native-paper';

const workersData: Array<WorkerDetails & { id: number }> = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Architect1Image,
    rating: 5,
    reviewsAmount: 30,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Architect2Image,
    rating: 4.5,
    reviewsAmount: 13,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Architect3Image,
    rating: 4,
    reviewsAmount: 14,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Tero Violado, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Architect4Image,
    rating: 5,
    reviewsAmount: 52,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Architect5Image,
    rating: 3.5,
    reviewsAmount: 17,
    id: 5,
  },
];

export const WorkersScreen = () => {
  const [search, setSearch] = useState('');
  const [workers, setWorkers] = useState([...workersData]);

  const searchFilterFunction = (text: string) => {
    setSearch(text);
    const filtered = workersData.filter((worker: WorkerDetails) => {
      return worker.name.includes(text) || worker.location.includes(text);
    });
    setWorkers(filtered);
  };

  const onClearSearch = () => {
    setWorkers([...workersData]);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Header label="Architects nearby" />

      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={searchFilterFunction}
        onClearIconPress={onClearSearch}
        value={search}
        mode="view"
        showDivider={false}
      />

      <StatusBar barStyle="dark-content" />

      <FlatList
        data={workers}
        renderItem={({ item }) => {
          return <WorkerCard details={item} />;
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
  searchBar: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
