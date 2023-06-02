import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { messages } from '../data/messages';

function sendMessage(text: string) {
  messages.push({
    id: messages.length.toString(),
    rol: 'sender',
    message: text,
  });
}

export const ChatScreen = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <ChatBubble
              message={item.message}
              right={item.rol === 'sender' ? true : false}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ChatTextInput />
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
  inputContainer: {
    flexDirection: 'row',
  },
});
