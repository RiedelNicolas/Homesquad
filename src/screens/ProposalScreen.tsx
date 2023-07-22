import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, TextInput, Text } from 'react-native-paper';
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
      <Text style={styles.firstFieldText}>Descripción</Text>
      <ProblemDescription
        problemDescription={problemDescription}
        setProblemDescription={setProblemDescription}
      />
      <Text style={styles.fieldText}>Fecha</Text>
      <DatePicker date={date} setDate={setDate} />

      <Text style={styles.fieldText}>Monto a Pagar</Text>
      <View style={styles.priceInputContainer}>
        <TextInput
          mode={'outlined'}
          value={price}
          onChangeText={(price) => setPrice(price)}
          style={styles.priceInput}
          textColor={commonStyle.primaryColor}
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
    color: commonStyle.primaryColor,
  },
  textInput: {
    borderRadius: 10,
  },
  outlineStyle: {
    borderRadius: 20,
  },
  firstFieldText: {
    marginHorizontal: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  fieldText: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
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
