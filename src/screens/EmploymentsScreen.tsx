import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist';
import { useEffect } from 'react';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { commonStyle } from '../utils/style';
import { fetchEmployments } from '../services/json-server.service';

export type EmploymentsScreenProps = {
  title: string;
};

export type DayEmployments = {
  day: string;
  employments: Employments;
};
export type Employments = Array<{
  time: string;
  title: string;
  description: string;
}>;

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

const renderTimelineSection = (employmentsByDay: DayEmployments[]) => {
  const scrollViewRef = React.useRef<ScrollView>(null);
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current?.scrollToEnd({ animated: true })
      }
    >
      {employmentsByDay.map((day, index) => renderDayTimeline(day, index))}
    </ScrollView>
  );
};

export const EmploymentsScreen = () => {
  const [employmentsByDay, setEmploymentsByDay] = React.useState<
    DayEmployments[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchEmployments();
        response.forEach((day: DayEmployments) => {
          day.employments = day.employments.map((employment) => ({
            ...employment,
            icon: <Text>{employment.title.charAt(0)}</Text>,
          }));
        });
        setEmploymentsByDay(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderTimelineSection(employmentsByDay)}
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
