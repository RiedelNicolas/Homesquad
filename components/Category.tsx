import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles, backgroundColor } from '../styles/CategociesScreenStyle';
import { Ionicons } from '@expo/vector-icons';

const Category = ({name, icon}) => {
    return (
        <TouchableOpacity
            style={styles.categoryContainer}
        >
            <View
                style={styles.categoryIcon}
            >
                <Ionicons
                    name={icon}
                    size={50}
                    color={backgroundColor}
                />
            </View>
            <Text
                style={styles.categoryText}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default Category;
