import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { commonStyle } from '../utils/style';

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
        outlineStyle={styles.outlineStyle}
        multiline
        numberOfLines={3}
        theme={{
          colors: {
            primary: commonStyle.primaryColor,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceInputContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 10,
  },
  outlineStyle: {
    borderRadius: 20,
  },
  content: {},
});
