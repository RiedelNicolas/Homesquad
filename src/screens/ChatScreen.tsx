import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ChatBubble } from '../components/ChatBubble';
import { Proposal } from '../components/Proposal';
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
