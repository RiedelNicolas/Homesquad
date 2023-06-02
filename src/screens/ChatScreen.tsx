import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { ChatBubble } from '../components/ChatBubble';
import { commonStyle } from '../utils/style';
import { LogoImage } from '../assets';

export const ChatScreen = () => {
  return (
    <View>
      <ChatBubble />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: commonStyle.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
});
