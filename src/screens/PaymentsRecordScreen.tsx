import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist';
import { commonStyle } from '../utils/style';

type DayPayments = {
  day: string;
  payments: Payments;
};
type Payments = Array<{
  title: string;
  description: string;
  icon: React.ReactElement;
}>;

const getPayments = () => [
  {
    day: 'Martes 18/07/23',
    payments: [
      {
        title: 'Leandro Lencinas',
        description: '$5,000.00',
        icon: <Text>L</Text>,
      },
    ],
  },
  {
    day: 'Miércoles 19/07/23',
    payments: [
      {
        title: 'Facundo Barboza',
        description: '$7,500.00',
        icon: <Text>F</Text>,
      },
    ],
  },
  {
    day: 'Jueves 20/07/23',
    payments: [
      {
        title: 'Juan Andrada',
        description: '$9,800.00',
        icon: <Text>J</Text>,
      },
    ],
  },
  {
    day: 'Viernes 21/07/23',
    payments: [
      {
        title: 'Victorio Ramis',
        description: '$3,200.00',
        icon: <Text>V</Text>,
      },
      {
        title: 'Luciano Pizarro',
        description: '$6,700.00',
        icon: <Text>L</Text>,
      },
    ],
  },
  {
    day: 'Lunes 24/07/23',
    payments: [
      {
        title: 'Juan Andrada',
        description: '$8,500.00',
        icon: <Text>J</Text>,
      },
      {
        title: 'Victorio Ramis',
        description: '$2,300.00',
        icon: <Text>V</Text>,
      },
    ],
  },
  {
    day: 'Miércoles 26/07/23',
    payments: [
      {
        title: 'Ezequiel Zbogar',
        description: '$10,000.00',
        icon: <Text>E</Text>,
      },
    ],
  },
];

const renderTimeline = (payments: Payments) => {
  return (
    <Timeline
      style={styles.timeline}
      timeStyle={styles.time}
      descriptionStyle={styles.description}
      titleStyle={styles.title}
      data={payments}
      lineColor={commonStyle.secondaryColor}
      lineWidth={5}
      circleColor={commonStyle.secondaryColor}
      circleSize={30}
      innerCircle={'icon'}
      isUsingFlatlist={false}
      separator={true}
      showTime={false}
    />
  );
};

const renderDayTimeline = (dayPayments: DayPayments, index: number) => {
  return (
    <View key={index}>
      <Text style={styles.day}>{dayPayments.day}</Text>
      {renderTimeline(dayPayments.payments)}
    </View>
  );
};

const renderIconWithText = (
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
  text: string
) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
      <Text style={{ fontSize: 18, marginLeft: 10 }}>{text}</Text>
    </View>
  );
};

const renderHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Historial de pagos</Text>
      {renderIconWithText('counter', 'Cantidad: 8')}
      {renderIconWithText('cash', 'Total facturado: $52,000.00')}
      <View
        style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }}
      ></View>
    </View>
  );
};

const renderTimelineSection = () => {
  const payments = getPayments();
  return (
    <ScrollView style={styles.scrollViewContainer}>
      {payments.map((day, index) => renderDayTimeline(day, index))}
    </ScrollView>
  );
};

export type PaymentsRecordScreenProps = {
  title: string;
};

export const PaymentsRecordScreen = () =>
  // {
  //   route,
  // }: NativeStackScreenProps<RootStackParamList, 'EmploymentsScreen'>
  {
    return (
      <View style={{ flex: 1 }}>
        {renderHeader()}
        {renderTimelineSection()}
      </View>
    );
  };

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    backgroundColor: commonStyle.backgroundColor,
  },

  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    flexGrow: 1,
  },

  scrollViewContainer: {
    backgroundColor: commonStyle.backgroundColor,
    flex: 0.8,
  },

  day: {
    fontSize: 24,
    color: commonStyle.primaryColor,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    marginTop: 20,
  },

  today: {
    fontSize: 24,
    fontWeight: 'bold',
    color: commonStyle.secondaryColor,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    marginTop: 20,
  },

  timeline: {
    flex: 1,
    marginTop: 12,
    paddingLeft: 10,
    paddingRight: 30,
  },

  time: {
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
    borderRadius: 13,
  },

  description: {
    color: 'gray',
  },

  title: {
    color: 'black',
    marginTop: -5,
  },

  paymentButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  paymentButton: {
    flexDirection: 'row',
  },

  paymentText: {
    fontSize: 16,
    fontWeight: '300',
  },
});
