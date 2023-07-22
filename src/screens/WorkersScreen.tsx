import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
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
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <LinearGradient
        style={styles.searchBarContainer}
        colors={['rgba(248, 248, 258, 1)', 'transparent']}
      >
        <Searchbar
          style={styles.searchBar}
          placeholder="Busqueda"
          onChangeText={searchFilterFunction}
          onClearIconPress={onClearSearch}
          value={search}
          mode="view"
          showDivider={false}
        />
      </LinearGradient>
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
    paddingTop: 100,
  },
  searchBar: {
    elevation: 4, // Add elevation to make the search bar hover
    backgroundColor: commonStyle.shadeColor,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
