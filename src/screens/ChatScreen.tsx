import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { delay, responseTime } from '../data/chat';
import { messages as professionalMessages } from '../data/messages';
import { OfferBubble } from '../components/OfferBubble';
import {
  HiredWorkersContext,
  HiredWorkersContextType,
} from '../contexts/hired-workers.context';
import { WorkerDetails } from '../data/worker-details';

type MessageType = {
  id: string;
  rol: string;
  message: string;
  isOffer: boolean;
};

export type ChatScreenProps = {
  workerDetails: WorkerDetails;
};

export const ChatScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ChatScreen'>) => {
  const { workerDetails } = route.params;

  const chatMessagesRef = React.useRef<FlatList<MessageType>>(null);

  const navigation = useNavigation<RootStackParamList>();
  const [messages, setMessages] = React.useState([] as MessageType[]);
  const [, setHiredWorkers] =
    React.useContext<HiredWorkersContextType>(HiredWorkersContext);

  // TODO: we should remove the mock when we have a backend
  const [messageCounter, setMessageCounter] = React.useState(0);

  React.useEffect(() => {
    if (chatMessagesRef.current && messages.length > 0) {
      chatMessagesRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

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

  function handleWorkerHire() {
    setHiredWorkers((hiredWorkers) => [...hiredWorkers, workerDetails]);
    navigation.navigate('PaymentScreen');
  }

  return (
    <View style={styles.container}>
      <ChatUserInfo name={workerDetails.name} image={workerDetails.image} />
      <View style={styles.chatContainer}>
        <FlatList
          ref={chatMessagesRef}
          data={messages}
          renderItem={({ item }) =>
            item.isOffer ? (
              <OfferBubble
                price={item.message}
                handleWorkerHire={handleWorkerHire}
              />
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
