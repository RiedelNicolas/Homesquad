import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const Proposal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.proposalText}>Proposal</Text>
      <Text style={styles.priceText}>Pago total: $100</Text>
      <View>
        <Button>Aceptar</Button>
        <Button>Renegociar</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    borderColor: '#0f172a',
    borderWidth: 3,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  proposalText: {},
  priceText: {},
});
