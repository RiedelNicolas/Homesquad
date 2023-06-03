import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '../utils/navigator';
import { IconLabel } from './IconLabel';

const iconColor = '#6c5ce7';

export type WorkerDetails = {
  name: string;
  location: string;
  deliveryTime: string;
  distance: string;
  image: React.ComponentProps<typeof Image>['source'];
  rating: React.ComponentProps<typeof AirbnbRating>['defaultRating'];
  reviewsAmount: number | string;
};

export type WorkerCardProps = {
  details: WorkerDetails;
};

export const WorkerCard = ({ details }: WorkerCardProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProfileScreen');
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
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.infoStyle}>
            <Text style={styles.titleStyle}>{name}</Text>
            <Text style={styles.categoryStyle}>{location}</Text>

            <View style={styles.iconLabelStyle}>
              <IconLabel
                name="ios-time"
                label={deliveryTime}
                color={iconColor}
              />
              <IconLabel name="ios-pin" label={distance} color={iconColor} />
            </View>
          </View>

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
        </View>
      </TouchableOpacity>
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
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#DDE6ED',
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
  },
  categoryStyle: {
    fontWeight: '200',
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
});
