import * as React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { messages as messagesList } from '../data/messages';
import { Proposal } from '../components/Proposal';
import { messageLimit, responseTime } from '../data/chat';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList } from '../utils/navigator';

export type ChatScreenProps = {
  name: string;
  image: React.ComponentProps<typeof Image>['source'];
};

export const ChatScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ChatScreen'>) => {
  const { name, image } = route.params;

  const [messages, setMessages] = React.useState(messagesList);
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
      <ChatUserInfo name={name} image={image} />
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
      <Proposal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ChatTextInput
        setData={setMessages}
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
    backgroundColor: commonStyle.backgroundColor,
  },
  professionalName: {
    fontSize: 40,
    paddingLeft: 10,
  },
});
