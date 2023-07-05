import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import Timeline from 'react-native-timeline-flatlist';
import { commonStyle } from '../utils/style';

export type EmploymentsScreenProps = {
  title: string;
};

// type Employments = Array<{day: string, employments: Array<{time: string, title: string, description: string}>}>
type DayEmployments = {
  day: string;
  employments: Array<{ time: string; title: string; description: string }>;
};
// type Employments = Array<{time: string, title: string, description: string}>

const getEmployments = () => [
  {
    day: 'Miércoles 17/08/23',
    employments: [
      {
        time: '11:00',
        title: 'Ezequiel Zbogar',
        description: 'Dr. Luis Beláustegui 543, C1416 CXA, Buenos Aires',
      },
    ],
  },
  {
    day: 'Jueves 17/08/23 (Hoy)',
    employments: [
      {
        time: '09:00',
        title: 'Nicolas Riedel',
        description: 'Av. Sta. Fe 3253, 1091 CABA',
      },
      {
        time: '14:00',
        title: 'Diego Balestieri',
        description: 'Rocamora 4584, C1184 ABL, Buenos Aires',
      },
      {
        time: '18:00',
        title: 'Nicole Raveszani',
        description: 'Av. La Plata 96, C1184AAN CABA',
      },
    ],
  },
];

const renderDayTimeline = (dayEmployments: DayEmployments, index: number) => {
  return (
    <View id={index.toString()}>
      <Text> {dayEmployments.day} </Text>
      <Timeline
        data={dayEmployments.employments}
        showTime={true}
        lineColor="red"
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{ color: 'gray' }}
        isUsingFlatlist={false}
        lineWidth={2}
        separator={true}
      />
    </View>
  );
};
export const EmploymentsScreen = () =>
  // {
  //   route,
  // }: NativeStackScreenProps<RootStackParamList, 'EmploymentsScreen'>
  {
    const employments = getEmployments();
    return (
      <ScrollView style={styles.container}>
        {employments.map((day, index) => renderDayTimeline(day, index))}
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.backgroundColor,
  },
});
