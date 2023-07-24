import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Portal, Modal, PaperProvider } from 'react-native-paper';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList } from '../utils/navigator';
import { MessageType, useMessages } from '../hooks/useMessages';
import { UserImage } from '../assets';
import { ProfOfferBubble } from '../components/ProfOfferBubble';
import { getSelectedAddress } from '../services/json-server.service';
import { ProposalScreen } from './ProposalScreen';

export type ChatScreenProfesionalProps = {
  name: string;
};

export const ChatScreenProfesional = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'chatScreenProfesional'>) => {
  const { messages, sendMessage, clearAllMessages } =
    useMessages('profesional');

  const [showModal, setShowModal] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState('');

  const { name } = route.params;

  const chatMessagesRef = React.useRef<FlatList<MessageType>>(null);

  React.useEffect(() => {
    if (chatMessagesRef.current && messages.length > 0) {
      chatMessagesRef.current.scrollToEnd({ animated: true });
    }
    const fetchData = async () => {
      try {
        const address = await getSelectedAddress();
        console.log('selectedAddress: ', address);
        setSelectedAddress(address.address);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, [messages]);

  function handleNewMessage(message: string, rol: string, isOffer = false) {
    sendMessage(message, isOffer);
  }

  const handleNewOffer = (price: string, description: string, date: Date) => {
    const message = {
      price: price,
      description: description,
      date: date,
    };
    sendMessage(JSON.stringify(message), true);
    setShowModal(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ChatUserInfo
          name={name}
          image={UserImage}
          address={selectedAddress}
          onOfferPress={() => {
            setShowModal(true);
          }}
        />
        <View style={styles.chatContainer}>
          <FlatList
            ref={chatMessagesRef}
            data={messages}
            renderItem={({ item }) =>
              item.isOffer ? (
                <ProfOfferBubble price={item.message} />
              ) : (
                <ChatBubble
                  message={item.message}
                  right={item.rol === 'profesional'}
                />
              )
            }
            keyExtractor={(item) => item.id}
          />
        </View>
        <ChatTextInput handleNewMessage={handleNewMessage} />
        <OfferModal
          visible={showModal}
          hideModal={() => setShowModal(false)}
          onAccept={handleNewOffer}
          clearAllMessages={clearAllMessages}
        />
      </View>
    </PaperProvider>
  );
};

interface OfferModalProps {
  visible: boolean;
  hideModal: () => void;
  onAccept: (price: string, description: string, date: Date) => void;
  clearAllMessages: () => void;
}

const OfferModal = ({
  visible,
  hideModal,
  onAccept,
  clearAllMessages,
}: OfferModalProps) => {
  const [date, setDate] = React.useState(new Date());
  const [price, setPrice] = React.useState('0');
  const [problemDescription, setProblemDescription] = React.useState('');

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <ProposalScreen
          date={date}
          setDate={setDate}
          price={price}
          setPrice={setPrice}
          problemDescription={problemDescription}
          setProblemDescription={setProblemDescription}
          onAccept={onAccept}
          onClearAll={clearAllMessages}
        />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 20,
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
  modalContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  textInput: {
    backgroundColor: 'white',
  },
});
