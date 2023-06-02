import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { messages } from '../data/messages';

export const ChatScreen = () => {
  const [data, setData] = React.useState(messages);

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ChatBubble
              message={item.message}
              right={item.rol === 'sender' ? true : false}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ChatTextInput data={data} setData={setData} />
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
