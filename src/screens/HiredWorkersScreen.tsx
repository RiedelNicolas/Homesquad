import React, { useContext } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { HiredWorkersContext } from '../contexts/hired-workers.context';
import { WorkerCard } from '../components/WorkerCard';
import { commonStyle } from '../utils/style';

export const HiredWorkersScreen = () => {
  const [workers, _] = useContext(HiredWorkersContext);

  return (
    <View style={styles.container}>
      {workers.length == 0 ? (
        <View>
          <Text style={styles.noHired}>
            {' '}
            Todavia no contrataste ningun profesional{' '}
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
    alignItems: 'center',
  },
  noHired: {
    paddingTop: 50,
    fontWeight: '800',
    fontSize: 20,
  },
});
