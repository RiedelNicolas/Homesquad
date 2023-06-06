import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { UserImage } from '../assets';
import { commonStyle } from '../utils/style';

export const ChatUserInfo = () => {
  return (
    <View>
      <Card style={styles.professionalCard}>
        <Card.Title
          title={'wuw'}
          titleStyle={styles.professionalName}
          left={() => <Avatar.Image size={50} source={UserImage} />}
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
    fontSize: 30,
    textAlignVertical: 'center',
  },
  professionalCard: {
    backgroundColor: commonStyle.backgroundColor,
    borderRadius: 0,
  },
});
