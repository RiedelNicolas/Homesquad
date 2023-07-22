import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { CategoryType } from '../data/dataTypes';
import { Category } from './Category';

export type CategoriesListProps = {
  categories: CategoryType[];
};

export const CategoriesList = ({ categories }: CategoriesListProps) => {
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
    marginBottom: 20,
  },
});
