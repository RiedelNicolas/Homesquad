import React, { useLayoutEffect, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { white } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { commonStyle } from '../utils/style';
import { useNavigation } from '../utils/navigator';

type ChatBubblePrompts = {
  message: string;
  right: boolean;
};

export const ChatBubble = ({ message, right }: ChatBubblePrompts) => {
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
    backgroundColor: '#0f172a',
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
