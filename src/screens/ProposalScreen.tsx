import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { ProposalClientInfor } from '../components/ProposalClientInfo';
import { DatePicker } from '../components/DatePicker';

export const ProposalScreen = () => {
  const [date, setDate] = React.useState(new Date());
  const [price, setPrice] = React.useState('0');

  return (
    <View>
      <ProposalClientInfor />
      <DatePicker date={date} setDate={setDate} />
      <View style={styles.priceInputContainer}>
        <TextInput
          mode={'outlined'}
          value={price}
          onChangeText={(price) => setPrice(price)}
          style={styles.priceInput}
          textColor="#674fa3"
          outlineStyle={styles.outlineStyle}
          keyboardType="numeric"
          placeholder="0"
          left={
            <TextInput.Icon
              icon={() => (
                <MaterialIcons name="attach-money" style={styles.priceInput} />
              )}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceInputContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 20,
  },
  priceInput: {
    fontSize: 30,
    color: '#674fa3',
  },
  textInput: {
    borderRadius: 10,
  },
  outlineStyle: {
    borderRadius: 20,
    backgroundColor: '#e8e1ed',
  },
});
