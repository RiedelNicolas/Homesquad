import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { commonStyle } from '../utils/style';
import { WorkerDetails } from '../data/worker-details';
import { IconLabel } from './IconLabel';

export type WorkerCardProps = {
  details: WorkerDetails;
  isHired: boolean;
};

export const WorkerCard = ({ details, isHired }: WorkerCardProps) => {
  const navigation = useNavigation<RootStackParamList>();
  const onPress = () => {
    navigation.navigate('ProfileScreen', { details });
  };

  const {
    name,
    location,
    deliveryTime,
    distance,
    image,
    rating,
    reviewsAmount,
  } = details;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.infoStyle}>
            <Text style={styles.titleStyle}>{name}</Text>
            {!isHired ? (
              <>
                <Text style={styles.locationStyle}>{location}</Text>
                <View style={styles.iconLabelStyle}>
                  <IconLabel
                    name="ios-time"
                    label={deliveryTime}
                    color={'black'}
                  />
                  <IconLabel name="ios-pin" label={distance} color={'black'} />
                </View>
              </>
            ) : (
              <View style={styles.contactInfo}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconButton
                    icon={({ size, color }) => (
                      <MaterialCommunityIcons
                        name="phone"
                        size={size}
                        color={color}
                      />
                    )}
                  />
                  <Text style={{ marginRight: 10 }}>{'(11) 2344-5566'}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconButton
                    icon={({ size, color }) => (
                      <MaterialCommunityIcons
                        name="email"
                        size={size}
                        color={color}
                      />
                    )}
                  />

                  <Text>
                    {details.name.replace(' ', '.').toLowerCase() +
                      '@gmail.com'}
                  </Text>
                </View>
              </View>
            )}
          </View>

          {!isHired && (
            <View style={styles.stars}>
              <AirbnbRating
                showRating={false}
                size={25}
                isDisabled
                defaultRating={rating}
              />
              <View>
                <Text
                  style={{ fontSize: 15, marginLeft: '10%' }}
                >{`(${reviewsAmount})`}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: commonStyle.secondaryColor,
    height: 250,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: commonStyle.textColor,
  },
  locationStyle: {
    fontWeight: '500',
    color: commonStyle.textColor,
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stars: {
    flexDirection: 'row',
    marginLeft: '2%',
    height: 200,
    flex: 1,
    alignItems: 'center',
  },
  contactInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
