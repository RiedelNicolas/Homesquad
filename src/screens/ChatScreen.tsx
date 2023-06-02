import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ChatBubble } from '../components/ChatBubble';
import { Proposal } from '../components/Proposal';
import { commonStyle } from '../utils/style';

export const ChatScreen = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ChatBubble
          message={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          }
          right={true}
        />
        <ChatBubble message={'Holis'} right={true} />
        <ChatBubble message={'Buenardas'} right={false} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escribe un mensaje"
          value={text}
          onChangeText={(text) => setText(text)}
          multiline
          numberOfLines={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatContainer: {
    flex: 1,
  },
  inputContainer: {},
});
