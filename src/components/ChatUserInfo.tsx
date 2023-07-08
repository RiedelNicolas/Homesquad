import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { commonStyle } from '../utils/style';

export type ChatUserInfoProps = {
  name: string;
  image: React.ComponentProps<typeof Avatar.Image>['source'];
  address: string;
};

export const ChatUserInfo = ({ name, image, address }: ChatUserInfoProps) => {
  return (
    <View>
      <Card style={styles.professionalCard}>
        <Card.Title
          title={name}
          titleStyle={styles.professionalName}
          left={() => <Avatar.Image size={50} source={image} />}
        />
        {address ? (
          <View style={styles.address}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text> {address} </Text>
          </View>
        ) : (
          <></>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  professionalNameContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignContent: 'center',
  },
  professionalName: {
    paddingTop: 10,
    fontSize: 25,
    textAlignVertical: 'center',
  },
  professionalCard: {
    backgroundColor: commonStyle.backgroundColor,
    borderRadius: 0,
  },
  address: {
    flexDirection: 'row',
    marginLeft: 15,
  },
});
