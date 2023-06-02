import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { messages } from '../data/messages';

type MessageType = {
  id: string;
  rol: string;
  message: string;
};

type ChatTextInputPrompts = {
  data: MessageType[];
  setData: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

export const ChatTextInput = ({ data, setData }: ChatTextInputPrompts) => {
  const [text, setText] = React.useState('');

  function sendMessage(text: string) {
    if (text.trim().length > 0) {
      messages.push({
        id: (messages.length + 1).toString(),
        rol: 'sender',
        message: text,
      });
      setText('');
      const newData = [...messages];
      setData(newData);
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
          onPress={() => sendMessage(text)}
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
    backgroundColor: 'red',
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
