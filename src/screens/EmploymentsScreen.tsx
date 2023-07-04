import * as React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native';
import { commonStyle } from '../utils/style';

export type EmploymentsScreenProps = {
  title: string;
};

export const EmploymentsScreen = () =>
  // {
  //   route,
  // }: NativeStackScreenProps<RootStackParamList, 'EmploymentsScreen'>
  {
    return (
      <ScrollView style={styles.container}>
        <Text> Hola </Text>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.backgroundColor,
  },
});
