import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { commonStyle } from '../utils/style';

type ChatBubbleProps = {
  message: string;
  right: boolean;
};

export const ChatBubble = ({ message, right }: ChatBubbleProps) => {
  return (
    <View
      style={[
        styles.bubbleUbication,
        right
          ? { justifyContent: 'flex-end' }
          : { justifyContent: 'flex-start' },
      ]}
    >
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: commonStyle.secondaryColor,
    color: 'white',
    maxWidth: '70%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
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
});
