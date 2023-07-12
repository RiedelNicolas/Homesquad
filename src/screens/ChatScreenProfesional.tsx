import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Portal,
  Modal,
  Text,
  PaperProvider,
  Button,
  TextInput,
} from 'react-native-paper';
import { ChatBubble } from '../components/ChatBubble';
import { ChatTextInput } from '../components/ChatTextInput';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { commonStyle } from '../utils/style';
import { RootStackParamList } from '../utils/navigator';
import { MessageType, useMessages } from '../hooks/useMessages';
import { UserImage } from '../assets';
import { ProfOfferBubble } from '../components/ProfOfferBubble';

export type ChatScreenProfesionalProps = {
  name: string;
};

export const ChatScreenProfesional = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'chatScreenProfesional'>) => {
  const { messages, sendMessage, clearAllMessages } =
    useMessages('profesional');

  const [showModal, setShowModal] = React.useState(false);

  const { name } = route.params;

  const chatMessagesRef = React.useRef<FlatList<MessageType>>(null);

  React.useEffect(() => {
    if (chatMessagesRef.current && messages.length > 0) {
      chatMessagesRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  function handleNewMessage(message: string, rol: string, isOffer = false) {
    sendMessage(message, isOffer);
  }

  const handleNewOffer = (price: string) => {
    sendMessage(price, true);
    setShowModal(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ChatUserInfo
          name={name}
          image={UserImage}
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
  onAccept: (price: string) => void;
  clearAllMessages?: () => void;
}

const OfferModal = ({
  visible,
  hideModal,
  onAccept,
  clearAllMessages,
}: OfferModalProps) => {
  const [price, setPrice] = React.useState<string>('');

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.modalText}>Escriba su oferta</Text>
        <TextInput
          label="Precio"
          value={price}
          onChangeText={setPrice}
          mode="outlined"
          style={styles.textInput}
        />
        <Button
          onPress={() => {
            onAccept(price);
          }}
          onLongPress={clearAllMessages}
        >
          Ofertar
        </Button>
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
    padding: 20,
    height: 300,
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'white',
  },
});
