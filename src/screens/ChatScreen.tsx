import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { OfferBubble } from '../components/OfferBubble';
import {
  HiredWorkersContext,
  HiredWorkersContextType,
} from '../contexts/hired-workers.context';
import { WorkerDetails } from '../data/worker-details';
import { MessageType, useMessages } from '../hooks/useMessages';

export type ChatScreenProps = {
  workerDetails: WorkerDetails;
};

export const ChatScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ChatScreen'>) => {
  const { messages, sendMessage } = useMessages('client');
  const { workerDetails } = route.params;

  const chatMessagesRef = React.useRef<FlatList<MessageType>>(null);

  const navigation = useNavigation<RootStackParamList>();
  const [, setHiredWorkers] =
    React.useContext<HiredWorkersContextType>(HiredWorkersContext);

  React.useEffect(() => {
    if (chatMessagesRef.current && messages.length > 0) {
      chatMessagesRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  function handleNewMessage(message: string, rol: string, isOffer = false) {
    sendMessage(message, isOffer);
  }

  function handleWorkerHire(price: number) {
    setHiredWorkers((hiredWorkers) => [...hiredWorkers, workerDetails]);
    navigation.navigate('PaymentScreen', { price: price });
  }

  return (
    <View style={styles.container}>
      <ChatUserInfo
        name={workerDetails.name}
        image={workerDetails.image}
        address={workerDetails.location}
      />
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
                right={item.rol === 'client'}
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
