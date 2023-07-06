import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { commonStyle } from '../utils/style';

export type EmploymentsScreenProps = {
  title: string;
};

// type Employments = Array<{day: string, employments: Array<{time: string, title: string, description: string}>}>
type DayEmployments = {
  day: string;
  employments: Employments;
};
type Employments = Array<{
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}>;

const getEmployments = () => [
  {
    day: 'Martes 18/07/23',
    employments: [
      {
        time: '09:30',
        title: 'Leandro Lencinas',
        description: 'Av. San Juan 987, Mendoza',
        icon: <Text>L</Text>,
      },
    ],
  },
  {
    day: 'Miércoles 19/07/23',
    employments: [
      {
        time: '14:00',
        title: 'Facundo Barboza',
        description: 'Calle Belgrano 567, Mendoza',
        icon: <Text>F</Text>,
      },
    ],
  },
  {
    day: 'Jueves 20/07/23',
    employments: [
      {
        time: '10:30',
        title: 'Juan Andrada',
        description: 'Calle San Martín 654, Mendoza',
        icon: <Text>J</Text>,
      },
    ],
  },
  {
    day: 'Viernes 21/07/23',
    employments: [
      {
        time: '11:30',
        title: 'Victorio Ramis',
        description: 'Av. España 789, Mendoza',
        icon: <Text>V</Text>,
      },
      {
        time: '18:30',
        title: 'Luciano Pizarro',
        description: 'Calle Belgrano 987, Mendoza',
        icon: <Text>L</Text>,
      },
    ],
  },
  {
    day: 'Lunes 24/07/23',
    employments: [
      {
        time: '10:00',
        title: 'Juan Andrada',
        description: 'Calle 25 de Mayo 345, Mendoza',
        icon: <Text>J</Text>,
      },
      {
        time: '15:00',
        title: 'Victorio Ramis',
        description: 'Av. San Martín 123, Mendoza',
        icon: <Text>V</Text>,
      },
    ],
  },
  {
    day: 'Miércoles 26/07/23',
    employments: [
      {
        time: '11:00',
        title: 'Ezequiel Zbogar',
        description: 'Dr. Luis Beláustegui 543, C1416 CXA, Buenos Aires',
        icon: <Text>E</Text>,
      },
    ],
  },
  {
    day: 'Jueves 27/07/23 (Hoy)',
    employments: [
      {
        time: '09:00',
        title: 'Nicolas Riedel',
        description: 'Av. Sta. Fe 3253, 1091 CABA',
        icon: <Text>N</Text>,
      },
      {
        time: '13:00',
        title: 'Diego Balestieri',
        description: 'Av. La Plata 96, C1184AAN CABA',
        icon: <Text>D</Text>,
      },
      {
        time: '18:00',
        title: 'Nicole Raveszani',
        description: 'Rocamora 4584, C1184 ABL, Buenos Aires',
        icon: <Text>N</Text>,
      },
    ],
  },
  {
    day: 'Viernes 28/07/23 (Mañana)',
    employments: [
      {
        time: '09:00',
        title: 'Sebastián Capelli',
        description: 'Av. Sarmiento s/n, C1425 CABA',
        icon: <Text>S</Text>,
      },
      {
        time: '14:00',
        title: 'Ivan Soriano',
        description: 'Av. Costanera Rafael Obligado s/n, C1425 CABA',
        icon: <Text>I</Text>,
      },
    ],
  },
];

const renderTimeline = (employments: Employments) => {
  return (
    <Timeline
      style={styles.timeline}
      timeStyle={styles.time}
      descriptionStyle={styles.description}
      titleStyle={styles.title}
      data={employments}
      lineColor={commonStyle.secondaryColor}
      lineWidth={5}
      circleColor={commonStyle.secondaryColor}
      circleSize={30}
      innerCircle={'icon'}
      isUsingFlatlist={false}
      separator={true}
    />
  );
};

const dateIsToday = (date: string) => {
  return date.includes('Hoy');
};

const renderDayTimeline = (dayEmployments: DayEmployments, index: number) => {
  const isToday = dateIsToday(dayEmployments.day);
  return (
    <View key={index}>
      <Text style={isToday ? styles.today : styles.day}>
        {dayEmployments.day}
      </Text>
      {renderTimeline(dayEmployments.employments)}
    </View>
  );
};

const renderPaymentRecordButton = () => {
  const navigation = useNavigation<RootStackParamList>();

  const onPressPaymentRecordButton = () => {
    navigation.navigate('PaymentsRecordScreen', { title: 'Registro de pagos' });
  };

  return (
    <View style={styles.paymentButtonContainer}>
      <MaterialCommunityIcons name="cash-register" size={30} color={'black'} />
      <Button style={styles.paymentButton} onPress={onPressPaymentRecordButton}>
        <Text style={styles.paymentText}>Ver pagos</Text>
      </Button>
    </View>
  );
};

const renderHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Mis prestaciones</Text>
      {renderPaymentRecordButton()}
      <View style={{ height: 1, backgroundColor: 'grey' }}></View>
    </View>
  );
};

const renderTimelineSection = () => {
  const employments = getEmployments();
  const scrollViewRef = React.useRef<ScrollView>(null);
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current?.scrollToEnd({ animated: true })
      }
    >
      {employments.map((day, index) => renderDayTimeline(day, index))}
    </ScrollView>
  );
};

export const EmploymentsScreen = () =>
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
    flex: 0.15,
    backgroundColor: commonStyle.backgroundColor,
  },

  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },

  scrollViewContainer: {
    backgroundColor: commonStyle.backgroundColor,
    flex: 0.85,
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
    flexGrow: 1,
  },

  paymentButton: {
    flexDirection: 'row',
  },

  paymentText: {
    fontSize: 16,
    fontWeight: '300',
  },
});
