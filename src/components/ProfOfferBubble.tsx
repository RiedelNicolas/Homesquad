import { View, StyleSheet } from 'react-native';

import { Text } from 'react-native-paper';
import { commonStyle } from '../utils/style';

interface profOfferBubbleProps {
  price: string;
}

export interface offertMessage {
  price: string;
  description: string;
  date: string;
}

export const ProfOfferBubble = ({ price }: profOfferBubbleProps) => {
  const message: offertMessage = JSON.parse(price) as offertMessage;
  const date = new Date(message.date);

  return (
    <View style={[styles.bubbleUbication, { justifyContent: 'flex-end' }]}>
      <View style={styles.chatContainer}>
        <Text style={styles.chatOfferTitle}>Oferta</Text>
        <Text style={styles.chatText}>Descripción: {message.description}</Text>
        <Text style={styles.chatText}>Fecha: {date.toLocaleDateString()}</Text>
        <Text style={styles.chatText}>
          Hora: {date.getHours().toString().padStart(2, '0')}:
          {date.getMinutes().toString().padStart(2, '0')}
        </Text>
        <Text style={styles.chatText}>Precio: ${message.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: commonStyle.complementaryColor,
    color: 'white',
    maxWidth: '70%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
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
  chatOfferTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
});
