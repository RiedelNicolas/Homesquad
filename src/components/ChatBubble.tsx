import React, { useLayoutEffect, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { white } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { commonStyle } from '../utils/style';
import { useNavigation } from '../utils/navigator';

export const ChatBubble = () => {
  const message = 'Holis';
  //const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

  return (
    <View style={styles.chatContainer}>
      <Text style={styles.chatText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: '#0f172a',
    color: 'white',
    maxWidth: '40%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  chatText: {
    color: 'white',
    fontSize: 18,
  },
});
