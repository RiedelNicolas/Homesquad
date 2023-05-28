import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from 'react-native';
import { commonStyle } from '../utils/style';

const Category = ({name, icon}) => {
    return (
        <View
            style={styles.categoryContainer}
        >
            <TouchableOpacity>
                <View
                    style={styles.categoryIcon}
                >
                    <Ionicons
                        name={icon}
                        size={50}
                        color={commonStyle.backgroundColor}
                    />
                </View>
                <Text
                    style={styles.categoryText}
                >
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category;

const categorySize = 80;

const styles = StyleSheet.create({
    categoryContainer: {
        height: 125,
        width: Dimensions.get('window').width * 0.3,
        marginTop: 10,
    },
    categoryIcon: {
        backgroundColor: '#0f172a',
        width: 80,
        height: categorySize,
        borderRadius: categorySize / 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    categoryText: {
        color: '#0f172a',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

