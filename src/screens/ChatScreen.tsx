import * as React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { messages } from '../data/messages';
import { Proposal } from '../components/Proposal';
import { messageLimit, responseTime } from '../data/chat';
import { ChatUserInfo } from '../components/ChatUserInfo';

export const ChatScreen = () => {
  const [data, setData] = React.useState(messages);
  const [modalVisible, setModalVisible] = React.useState(false);

  // TODO: we should remove the mock when we have a backend
  const [messageCounter, setMessageCounter] = React.useState(0);

  React.useEffect(() => {
    async function showModal() {
      if (messageCounter === messageLimit) {
        await delay(responseTime * 3);
        setModalVisible(true);
      }
    }
    showModal().catch((error) => console.log(error));
  }, [messageCounter]);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <View style={styles.container}>
      <ChatUserInfo />
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
      <Proposal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ChatTextInput
        setData={setData}
        messageCounter={messageCounter} // TODO: remove this mock when we have a backend
        setMessageCounter={setMessageCounter} // TODO: remove this mock when we have a backend
      />
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
  professionalNameContainer: {
    backgroundColor: 'red',
  },
  professionalName: {
    fontSize: 40,
    paddingLeft: 10,
  },
});
