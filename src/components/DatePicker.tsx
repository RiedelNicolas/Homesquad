import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export type DatePickerProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const DatePicker = ({ date, setDate }: DatePickerProps) => {
  const [mode, setMode] = React.useState<'date' | 'time'>('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {date.toLocaleDateString()}{' '}
        {date.getHours().toString().padStart(2, '0')}:
        {date.getMinutes().toString().padStart(2, '0')}
      </Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={showDatepicker}>
          Elegir fecha
        </Button>
        <Button mode="contained" style={styles.button} onPress={showTimepicker}>
          Elegir hora
        </Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  button: {
    width: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  dateText: {
    fontSize: 30,
    color: '#674fa3',
    textAlign: 'center',
  },
});
