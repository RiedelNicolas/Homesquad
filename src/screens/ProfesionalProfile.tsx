import * as React from 'react';
import { Avatar, Appbar, Card, Text, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

const Professional = () => {
  return (
    <Card>
      <Card.Content style={styles.card}>
        <Avatar.Image size={150} source={require('../assets/gasista.jpeg')} />
        <Text variant="titleLarge">Juan Gasista</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            )}
            onPress={() => console.log('Phone button pressed')}
          />
          <Text style={{ marginRight: 10 }}>(11) 2344-5566</Text>

          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
            onPress={() => console.log('Email button pressed')}
          />
          <Text>juan.servicios@gmail.com</Text>
        </View>
        <Text variant="bodyMedium">
          ¡Hola! Soy Juan, un gasista matriculado con más de 10 años de
          experiencia. Estoy aquí para ofrecerte servicios de instalación,
          mantenimiento y reparación de gas. Mi objetivo es brindarte soluciones
          seguras y eficientes. Confía en mí para mantener tu hogar o negocio en
          perfectas condiciones.
        </Text>
      </Card.Content>
    </Card>
  );
};

export const Profile = () => (
  <View>
    <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="Profesional" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
    <Professional />
    <Card style={styles.rating}>
      <Card.Title
        title="Ana Perez"
        subtitle="Gran gasista"
        left={(props) => (
          <Avatar.Image size={50} source={require('../assets/ana.jpeg')} />
        )}
        right={(props) => <Rating imageSize={30} readonly startingValue={5} />}
      />
      <Card.Content>
        <Text variant="bodyMedium">
          Juan es un gasista excepcional. Tenía un problema con una fuga de gas
          en mi hogar, pero Juan lo resolvió rápidamente y de manera segura. Su
          profesionalismo y habilidad son impresionantes. Recomendado al 100%.
        </Text>
      </Card.Content>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  rating: {
    backgroundColor: '#fff',
  },
});
