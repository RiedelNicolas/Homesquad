import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';
import { commonStyle } from '../utils/style';
import { RootStackParamList, useNavigation } from '../utils/navigator';

interface chat {
  name: string;
  lastMessage: string;
  date: string;
  mocked: boolean;
}

const chats = [
  {
    name: 'Pedro Sanchez',
    lastMessage: 'Nuevos mensaje de Pedro',
    date: '27/07/2023',
    mocked: false,
  },
  {
    name: 'Juan Perez',
    lastMessage: 'Hola, como estas?',
    date: '21/07/2023',
    mocked: true,
  },
  {
    name: 'Maria Juarez',
    lastMessage: 'Ningun problema, nos vemos',
    date: '22/07/2023',
    mocked: true,
  },
] as chat[];

export const ProfessionalChats = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        {chats.map((chat) => {
          return (
            <ChatInfo
              name={chat.name}
              lastMessage={chat.lastMessage}
              date={chat.date}
              mocked={chat.mocked}
              key={chat.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const ChatInfo = ({ name, lastMessage, mocked, date }: chat) => {
  const navigation = useNavigation<RootStackParamList>();

  const handleClick = () => {
    if (mocked) return;
    navigation.navigate('chatScreenProfesional', { name: 'Pedro Sanchez' });
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Card style={mocked ? styles.mockedRevieCard : styles.reviewCard}>
          <Card.Title title={name} />
          <Card.Content>
            <Text variant="titleLarge">{lastMessage}</Text>
            <Text variant="bodyMedium">{date}</Text>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.backgroundColor,
  },
  professionalCard: {
    alignItems: 'center',
    backgroundColor: commonStyle.backgroundColor,
    paddingTop: 20,
  },
  professionalDescription: {
    backgroundColor: commonStyle.shadeColor,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginTop: 20,
  },
  reviewCard: {
    margin: 10,
    backgroundColor: commonStyle.secondaryColor,
  },
  mockedRevieCard: {
    margin: 10,
    backgroundColor: commonStyle.shadeColor,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.secondaryColor,
  },
  contactText: {
    fontSize: 16,
    fontWeight: '300',
  },
  basicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  messageButton: {
    backgroundColor: commonStyle.cardColor,
    borderRadius: 50,
  },

  ownerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
