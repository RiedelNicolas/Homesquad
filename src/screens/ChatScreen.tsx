import * as React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList } from '../utils/navigator';
import { delay, responseTime } from '../data/chat';
import { messages as professionalMessages } from '../data/messages';
import { OfferBubble } from '../components/OfferBubble';

type MessageType = {
  id: string;
  rol: string;
  message: string;
  isOffer: boolean;
};

export type ChatScreenProps = {
  name: string;
  image: React.ComponentProps<typeof Image>['source'];
};

export const ChatScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ChatScreen'>) => {
  const { name, image } = route.params;

  const [messages, setMessages] = React.useState([] as MessageType[]);

  // TODO: we should remove the mock when we have a backend
  const [messageCounter, setMessageCounter] = React.useState(0);

  function handleNewMessage(message: string, rol: string, isOffer = false) {
    setMessages((messages) => [
      ...messages,
      { id: (messages.length + 1).toString(), rol, message, isOffer },
    ]);
    if (rol === 'sender') {
      delay(responseTime)
        .then(() => {
          handleNewMessage(
            professionalMessages[messageCounter].message,
            'receiver',
            professionalMessages[messageCounter].isOffer
          );
          setMessageCounter(messageCounter + 1);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <View style={styles.container}>
      <ChatUserInfo name={name} image={image} />
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) =>
            item.isOffer ? (
              <OfferBubble price={200} />
            ) : (
              <ChatBubble
                message={item.message}
                right={item.rol === 'sender'}
              />
            )
          }
          keyExtractor={(item) => item.id}
        />
      </View>
      <ChatTextInput handleNewMessage={handleNewMessage} />
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
