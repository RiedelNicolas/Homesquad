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
          return <WorkerCard details={item} isHired={false} />;
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
