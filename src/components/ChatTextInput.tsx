import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// TODO: remove this mock when we have a backend
import { messages } from '../data/messages';
import {
  delay,
  newMessage1,
  newMessage2,
  responseTime,
  messageLimit,
} from '../data/chat';
import { commonStyle } from '../utils/style';

type MessageType = {
  id: string;
  rol: string;
  message: string;
};

// TODO: remove this messageCounter and setMessageCounter when we have a backend
type ChatTextInputPrompts = {
  setData: React.Dispatch<React.SetStateAction<MessageType[]>>;
  messageCounter: number;
  setMessageCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const ChatTextInput = ({
  setData,
  messageCounter,
  setMessageCounter,
}: ChatTextInputPrompts) => {
  const [text, setText] = React.useState('');

  // TODO: we should remove the mock when we have a backend
  //const [messageCounter, setMessageCounter] = React.useState(0);

  React.useEffect(() => {
    async function recibeMockedMessage() {
      if (messageCounter === messageLimit) {
        await delay(responseTime);
        sendMessage(newMessage1, 'receiver');
        await delay(responseTime);
        sendMessage(newMessage2, 'receiver');
      }
    }
    recibeMockedMessage().catch((error) => console.log(error));
  }, [messageCounter]);

  // TODO: here ends the mock

  function sendMessage(text: string, rol: string) {
    if (text.trim().length > 0) {
      messages.push({
        id: (messages.length + 1).toString(),
        rol: rol,
        message: text,
      });
      setText('');
      const newData = [...messages];
      setData(newData);
      setMessageCounter(messageCounter + 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe un mensaje"
          value={text}
          onChangeText={(text) => setText(text)}
          multiline
          mode="outlined"
          theme={{
            colors: {
              primary: 'green',
              disabled: 'green',
            },
          }}
        />
      </View>
      <View style={styles.sendButtonContainer}>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => sendMessage(text, 'sender')}
        >
          <MaterialCommunityIcons name={'send'} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: commonStyle.backgroundColor,
    maxHeight: 70,
  },
  textInput: {
    backgroundColor: 'white',
  },
  sendButton_: {},
  textInputContainer: {
    flex: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  sendButtonContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
