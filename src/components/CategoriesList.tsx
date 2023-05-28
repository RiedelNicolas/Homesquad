import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Category } from './Category';
import { categories } from '../data/categories';

export const CategoriesList = () => {
  const getCategories = () => {
    const sortedCategories = categories.sort((a, b) =>
      a.category >= b.category ? 1 : -1
    );
    const othersIndex = sortedCategories.findIndex(
      (category) => category.category === 'Otros'
    );
    sortedCategories.push(...sortedCategories.splice(othersIndex, 1));
    return sortedCategories;
  };

  return (
    <View style={styles.categoriesListContainer}>
      <FlatList
        data={getCategories()}
        renderItem={({ item }) => (
          <Category name={item.category} icon={item.icon} />
        )}
        keyExtractor={(item) => item.key}
        numColumns={3}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  categoriesListContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
