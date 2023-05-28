import * as React from 'react';
import { View } from 'react-native';
import Category from './Category';
import categories from '../data/categories';
import { StyleSheet } from 'react-native';

const CategoriesList = () => {

    function renderCategories() {
        const categoriesToRender: any = [];
        for (let i = 0; i < categories.length; i++) {
            categoriesToRender.push(
                <Category
                    key={categories[i].key}
                    name={categories[i].category}
                    icon={categories[i].icon}
                />
            )
        }
        return categoriesToRender;
    }

    return (
        <View
            style={styles.categoriesListContainer}
        >
            {renderCategories()}
        </View>
    )
}

export default CategoriesList;

export const styles = StyleSheet.create({
    categoriesListContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
