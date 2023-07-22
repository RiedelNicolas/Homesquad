import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';
import { CategoriesList } from '../components/CategoriesList';
import { commonStyle } from '../utils/style';
import { LogoImage } from '../assets';
import { CategoryType } from '../data/dataTypes';
import { getCategories } from '../services/json-server.service';
import { Spinner } from '../components/Spinner';

export const CategoriesScreen = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  return !categories.length ? (
    <Spinner />
  ) : (
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
    marginTop: 20,
    marginBottom: 20,
  },
});
