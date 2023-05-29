import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { CategoriesList } from '../components/CategoriesList';
import { commonStyle } from '../utils/style';
import { LogoImage } from '../assets';

export const CategoriesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Image style={styles.imageStyle} source={LogoImage} />
      <CategoriesList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: commonStyle.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: '27%',
    aspectRatio: 1.1,
    marginTop: 50,
    marginBottom: 20,
  },
});
