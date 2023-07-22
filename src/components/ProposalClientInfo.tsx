import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { AnaImage } from '../assets';
import { commonStyle } from '../utils/style';

const name = 'Joe Mama';
const direction = '221b Baker Street';

export const ProposalClientInfor = () => {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Avatar.Image size={100} source={AnaImage} />
        </View>
        <Text style={styles.text}>Nueva propuesta para {name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialIcons name={'location-on'} size={30} color={'white'} />
        <Text style={styles.directionText}>{direction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyle.secondaryColor,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlignVertical: 'center',
    flexWrap: 'wrap',
    paddingLeft: 5,
    color: 'white',
  },
  imageContainer: {
    paddingRight: 5,
  },
  directionText: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: 'white',
  },
});
