import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import CategoriesList from '../components/CategoriesList';
import { Image } from 'react-native-elements';
import { commonStyle } from '../utils/style';

const CategoriesScreen = () => {
    return (
        <View
            style={styles.screen}
        >
            <Image style={styles.imageStyle} source={require('../assets/logo.png')}/>
            <CategoriesList />
        </View>
    )
}

export default CategoriesScreen;


const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: commonStyle.backgroundColor,
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        width: '27%',
        aspectRatio: 1.1,
        marginVertical: 20,
    },
});
