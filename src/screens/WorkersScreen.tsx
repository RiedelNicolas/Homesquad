import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { WorkerCard, WorkerDetails } from '../components/WorkerCard';

import {
  Architect1Image,
  Architect2Image,
  Architect3Image,
  Architect4Image,
  Architect5Image,
} from '../assets';
import { commonStyle } from '../utils/style';

const workersData: Array<WorkerDetails & { id: number }> = [
  {
    name: 'Juan Fernandez',
    location: 'San Telmo, CABA',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: Architect1Image,
    rating: 5,
    reviewsAmount: 7,
    id: 1,
  },
  {
    name: 'Carlitos Sanchez',
    location: 'Haedo, Buenos Aires',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: Architect2Image,
    rating: 4.5,
    reviewsAmount: 4,
    id: 2,
  },
  {
    name: 'Martín Morales',
    location: 'Ballester, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3 km',
    image: Architect3Image,
    rating: 4,
    reviewsAmount: 12,
    id: 3,
  },
  {
    name: 'Facundo Luna',
    location: 'Rosario, Santa Fe',
    deliveryTime: '240 min',
    distance: '450 km',
    image: Architect4Image,
    rating: 5,
    reviewsAmount: 9,
    id: 4,
  },
  {
    name: 'Ignacio Castro',
    location: 'Vicente Lopez, Buenos Aires',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: Architect5Image,
    rating: 3.5,
    reviewsAmount: 3,
    id: 5,
  },
];

export const WorkersScreen = () => {
  const [search, setSearch] = useState('');
  const [workers, setWorkers] = useState([...workersData]);

  const searchFilterFunction = (text: string) => {
    setSearch(text);
    text = text.toLowerCase();
    const filtered = workersData.filter((worker: WorkerDetails) => {
      return (
        worker.name.toLowerCase().includes(text) ||
        worker.location.toLowerCase().includes(text)
      );
    });
    setWorkers(filtered);
  };

  const onClearSearch = () => {
    setWorkers([...workersData]);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Busqueda"
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
    backgroundColor: commonStyle.backgroundColor,
    alignItems: 'center',
  },
  searchBar: {
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: commonStyle.shadeColor,
  },
});
