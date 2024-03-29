import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyle } from '../utils/style';

export type DatePickerProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const DatePicker = ({ date, setDate }: DatePickerProps) => {
  const [mode, setMode] = React.useState<'date' | 'time'>('date');
  const [show, setShow] = React.useState(false);

  const onChange = (selectedDate: Date) => {
    setShow(false);
    setDate(selectedDate);
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showTimepicker}>
          <Text style={styles.dateText}>
            {date.getHours().toString().padStart(2, '0')}:
            {date.getMinutes().toString().padStart(2, '0')}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={(_, selectedDate) => selectedDate && onChange(selectedDate)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 30,
    color: commonStyle.primaryColor,
    textAlign: 'center',
    shadowColor: 'red',
    paddingHorizontal: 20,
  },
});
