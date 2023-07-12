import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';
import { ProposalClientInfor } from '../components/ProposalClientInfo';
import { DatePicker } from '../components/DatePicker';
import { ProblemDescription } from '../components/ProblemDescription';
import { commonStyle } from '../utils/style';

export type ProposalScreenProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  problemDescription: string;
  setProblemDescription: React.Dispatch<React.SetStateAction<string>>;
  onAccept: (price: string, description: string, date: Date) => void;
  onClearAll: () => void;
};

export const ProposalScreen = ({
  date,
  setDate,
  price,
  setPrice,
  problemDescription,
  setProblemDescription,
  onAccept,
  onClearAll,
}: ProposalScreenProps) => {
  return (
    <View>
      {/* <ProposalClientInfor /> */}
      <Text style={styles.fieldText}>Describa el problema</Text>
      <ProblemDescription
        problemDescription={problemDescription}
        setProblemDescription={setProblemDescription}
      />
      <Text style={styles.fieldText}>
        Seleccione la fecha a la que va a realizar el servicio
      </Text>
      <DatePicker date={date} setDate={setDate} />

      <Text style={styles.fieldText}>Seleccione el monto a pagar</Text>
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

      <View style={styles.finishView}>
        <Button
          mode="contained"
          style={styles.buttonStyle}
          buttonColor={commonStyle.cardColor}
          onPress={() => onAccept(price, problemDescription, date)}
          onLongPress={() => onClearAll()}
        >
          Listo
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceInputContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
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
  fieldText: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: commonStyle.cardColor,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 5,
  },
  buttonStyle: {
    width: 100,
  },
  finishView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
});
