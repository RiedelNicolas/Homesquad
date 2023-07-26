import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist';
import { useEffect } from 'react';
import { commonStyle } from '../utils/style';
import { fetchPayments } from '../services/json-server.service';

export type DayPayments = {
  day: string;
  payments: Payments;
};
export type Payments = Array<{
  title: string;
  description: string;
}>;

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

const calculateTotalPayments = (payments: DayPayments[]) => {
  let total = 0;
  payments.forEach((day) => {
    total += day.payments.length;
  });
  return total;
};

const calculateTotalProfits = (payments: DayPayments[]) => {
  let total = 0;
  payments.forEach((day) => {
    day.payments.forEach((payment) => {
      total += Number(payment.description.replace(/[^0-9.-]+/g, ''));
    });
  });
  return total;
};

const renderHeader = (paymentsByDay: DayPayments[]) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Historial de pagos</Text>
      {renderIconWithText(
        'counter',
        `Cantidad: ${calculateTotalPayments(paymentsByDay)}`
      )}
      {renderIconWithText(
        'cash',
        `Total facturado: $${calculateTotalProfits(paymentsByDay)}`
      )}
      <View
        style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }}
      ></View>
    </View>
  );
};

const renderTimelineSection = (paymentsByDay: DayPayments[]) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      {paymentsByDay.map((day, index) => renderDayTimeline(day, index))}
    </ScrollView>
  );
};

export type PaymentsRecordScreenProps = {
  title: string;
};

export const PaymentsRecordScreen = () => {
  const [paymentsByDay, setPaymentsByDay] = React.useState<DayPayments[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPayments();
        response.forEach((day: DayPayments) => {
          day.payments = day.payments.map((payment) => ({
            ...payment,
            icon: <Text>{payment.title.charAt(0)}</Text>,
          }));
        });
        setPaymentsByDay(response);
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
      {renderHeader(paymentsByDay)}
      {renderTimelineSection(paymentsByDay)}
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
