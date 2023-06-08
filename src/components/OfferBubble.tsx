import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

type OfferBubleProps = {
  price: number;
};

export const OfferBubble = ({ price }: OfferBubleProps) => {
  return (
    <View style={[styles.bubbleUbication, { justifyContent: 'flex-start' }]}>
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>Precio ofrecido: ${price}</Text>
        <Button
          style={styles.acceptButton}
          textColor="white"
          onPress={() => {
            console.log('Aceptado');
          }}
        >
          Aceptar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'green',
    color: 'white',
    maxWidth: '70%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bubbleUbication: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  chatText: {
    color: 'white',
    fontSize: 18,
  },
  acceptButton: {
    backgroundColor: '#305830',
    width: '50%',
    marginVertical: 8,
    alignSelf: 'center',
  },
});
