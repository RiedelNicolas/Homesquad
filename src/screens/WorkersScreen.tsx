import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { WorkerCard } from '../components/WorkerCard';
import { commonStyle } from '../utils/style';
import { WorkerDetails } from '../data/worker-details';
import { RootStackParamList } from '../utils/navigator';

export const WorkersScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'WorkersScreen'>) => {
  const workersData = route.params;
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
      <StatusBar barStyle="light-content" />

      <FlatList
        style={styles.workersList}
        data={workers}
        renderItem={({ item }) => {
          return <WorkerCard details={item} isHired={false} />;
        }}
        keyExtractor={(worker) => worker.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      <Searchbar
        style={styles.searchBar}
        placeholder="Busqueda"
        onChangeText={searchFilterFunction}
        onClearIconPress={onClearSearch}
        value={search}
        mode="view"
        showDivider={false}
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
  workersList: {
    paddingTop: 80,
  },
  searchBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: 4, // Add elevation to make the search bar hover
    backgroundColor: commonStyle.shadeColor,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 20,
  },
});
