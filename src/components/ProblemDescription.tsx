import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export type ProblemDescriptionProps = {
  problemDescription: string;
  setProblemDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const ProblemDescription = ({
  problemDescription,
  setProblemDescription,
}: ProblemDescriptionProps) => {
  return (
    <View style={styles.priceInputContainer}>
      <TextInput
        mode={'outlined'}
        value={problemDescription}
        onChangeText={(problemDescription) =>
          setProblemDescription(problemDescription)
        }
        textColor="#674fa3"
        outlineStyle={styles.outlineStyle}
        multiline
        numberOfLines={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceInputContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 200,
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
  content: {},
});
