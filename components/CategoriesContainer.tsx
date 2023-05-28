import * as React from 'react';
import { View } from 'react-native';
import Category from '../components/Category';
import categories from '../jsons/categories';
import { styles } from '../styles/CategociesScreenStyle';

const CategoriesContainer = () => {

    function renderCategories() {
        const categoriesToRender: any = [];
        for (let i = 0; i < categories.length; i++) {
            categoriesToRender.push(
                <Category
                    key={i}
                    name={categories[i].category}
                    icon={categories[i].icon}
                />
            )
        }
        return categoriesToRender;
    }

    return (
        <View
            style={styles.categoriesContainer}
        >
            {renderCategories()}
        </View>
    )
}

export default CategoriesContainer;