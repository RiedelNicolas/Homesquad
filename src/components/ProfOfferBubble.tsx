import { View, StyleSheet } from 'react-native';

import { Text } from 'react-native-paper';

interface profOfferBubbleProps {
  price: string;
}

export const ProfOfferBubble = ({ price }: profOfferBubbleProps) => {
  return (
    <View style={[styles.bubbleUbication, { justifyContent: 'flex-end' }]}>
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>Hiciste una oferta de: ${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'blue',
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
  acceptButton: {
    backgroundColor: '#305830',
    width: '50%',
    marginVertical: 8,
    alignSelf: 'center',
  },
});
