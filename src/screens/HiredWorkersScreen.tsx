import React, { useContext } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { HiredWorkersContext } from '../contexts/hired-workers.context';
import { WorkerCard } from '../components/WorkerCard';

export const HiredWorkersScreen = () => {
  const [workers, _] = useContext(HiredWorkersContext);

  return (
    <View style={styles.container}>
      {workers.length == 0 ? (
        <View style={styles.centeredContainer}>
          <Text style={styles.noHired}>
            No tienes profesionales contratados
          </Text>
        </View>
      ) : (
        <FlatList
          data={workers}
          renderItem={({ item }) => {
            return <WorkerCard details={item} isHired={true} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noHired: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
});
