import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';
import { Text, Button } from 'react-native-paper';
import { commonStyle } from '../utils/style';
import { LogoImage } from '../assets';
import { RootStackParamList, useNavigation } from '../utils/navigator';

export const Home = () => {
  const navigation = useNavigation<RootStackParamList>();
  const onCustomerPress = () => {
    navigation.navigate('CustomerScreen');
  };
  const onProfessionalPress = () => {
    navigation.navigate('ProfessionalScreen');
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Image style={styles.imageStyle} source={LogoImage} />
        <Text variant="headlineMedium">¡Bienvenido a HomeSquad!</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text variant="headlineSmall">¿Qué tarea deseas realizar?</Text>
        <Button
          mode="contained"
          style={styles.button}
          onPress={onCustomerPress}
        >
          Quiero contratar un profesional
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={onProfessionalPress}
        >
          Quiero conseguir clientes
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: commonStyle.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  imageStyle: {
    width: '27%',
    aspectRatio: 1.1,
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    width: 300,
    backgroundColor: commonStyle.secondaryColor,
  },
});
