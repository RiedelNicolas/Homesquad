import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { commonStyle } from '../utils/style';

export type ChatUserInfoProps = {
  name: string;
  image: React.ComponentProps<typeof Avatar.Image>['source'];
};

export const ChatUserInfo = ({ name, image }: ChatUserInfoProps) => {
  return (
    <View>
      <Card style={styles.professionalCard}>
        <Card.Title
          title={name}
          titleStyle={styles.professionalName}
          left={() => <Avatar.Image size={50} source={image} />}
        />
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
});
