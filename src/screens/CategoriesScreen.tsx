import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';
import axios from 'axios';
import { CategoriesList } from '../components/CategoriesList';
import { commonStyle } from '../utils/style';
import { LogoImage } from '../assets';
import { CategoryType } from '../data/dataTypes';

export const CategoriesScreen = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Holaaa');
        // Esto no funciona xq no puedo acceder a localhost desde la app
        const response = await axios.get<CategoryType[]>(
          'http://localhost:3001/categories'
        );
        const data: CategoryType[] = response.data;
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.imageStyle} source={LogoImage} />
      <CategoriesList categories={categories} />
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
