import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Badge } from 'react-native-paper';
import Category from '../components/Category';
import CategoriesContainer from '../components/CategoriesContainer';
import { styles } from '../styles/CategociesScreenStyle';

const CategoriesScreen = () => {
    return (
        <View
            style={styles.screen}
        >
            <CategoriesContainer />
        </View>
    )
}

export default CategoriesScreen;