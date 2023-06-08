import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { HiredWorkersContext } from '../contexts/hired-workers.context';
import { WorkerCard } from '../components/WorkerCard';

export const HiredWorkersScreen = () => {
  const [workers, _] = useContext(HiredWorkersContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={workers}
        renderItem={({ item }) => {
          return <WorkerCard details={item} isHired={true} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
