import * as React from 'react';
import { Avatar, Appbar, Card, Text, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { ScrollView } from 'react-native';

const reviews = [
  {
    "user": "Laura",
    "title": "Excelente servicio",
    "rating": 5,
    "body": "Arregló una fuga en la tubería de gas de manera rápida y eficiente. ¡Altamente recomendado!"
  },
  {
    "user": "Carlos",
    "title": "Regular",
    "rating": 3,
    "body": "Solucionó el problema, pero tardó más de lo esperado y el precio fue elevado."
  },
  {
    "user": "María",
    "title": "Muy amable",
    "rating": 4,
    "body": "El gasista fue educado y resolvió el inconveniente sin contratiempos. Buena experiencia en general."
  },
  {
    "user": "Pedro",
    "title": "No satisfecho",
    "rating": 2,
    "body": "El trabajo no quedó bien hecho y tuve que llamar a otro profesional para arreglar lo que dejó mal."
  },
  {
    "user": "Ana",
    "title": "Profesional y confiable",
    "rating": 4,
    "body": "El gasista realizó una instalación de gas segura y eficiente. Cumplió con los plazos acordados y brindó buen asesoramiento."
  },
  {
    "user": "Juan",
    "title": "Decepcionante",
    "rating": 1,
    "body": "El gasista no solucionó el problema y su actitud fue poco profesional. Quedé insatisfecho con el servicio."
  },
  {
    "user": "Sofía",
    "title": "Buen trabajo, pero caro",
    "rating": 3,
    "body": "El gasista resolvió el inconveniente, pero el costo del servicio fue más alto de lo esperado. Calidad aceptable en general."
  },
  {
    "user": "Miguel",
    "title": "Confiable y rápido",
    "rating": 5,
    "body": "El gasista fue puntual, eficiente y brindó una solución efectiva al problema. Muy satisfecho con su trabajo."
  },
  {
    "user": "Carolina",
    "title": "Promedio",
    "rating": 3,
    "body": "El gasista hizo un trabajo decente, aunque hubo algunos detalles que podrían haberse mejorado. Experiencia regular en general."
  }
]

const professional = {
  name: "Juan Gasista",
  phone: "(11) 2344-5566",
  email: "juan.servicios@gmail.com",
  description: "¡Hola! Soy Juan, un gasista matriculado con más de 10 años de experiencia. Estoy aquí para ofrecerte servicios de instalación, mantenimiento y reparación de gas. Mi objetivo es brindarte soluciones seguras y eficientes. Confía en mí para mantener tu hogar o negocio en perfectas condiciones."
}

type ProfessionalProps = {
  name: string;
  phone: string;
  email: string;
  description: string;
}

const Professional = (props: ProfessionalProps) => {
  const avgRating = reviews.filter(x => x.rating).reduce((acc,x) => acc + x.rating, 0) / reviews.length;
  return (
    <Card>
      <Card.Content style={styles.card}>
        <Avatar.Image size={150} source={require('../assets/gasista.jpeg')} />
        <Text variant="titleLarge">{props.name}</Text>
        <View style={styles.contactInfo}>
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            )}
            onPress={() => console.log('Phone button pressed')}
          />
          <Text style={{ marginRight: 10 }}>{props.phone}</Text>
          
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
            onPress={() => console.log('Email button pressed')}
          />
          <Text>{props.email}</Text>
        </View>
        <View style={styles.contactInfo}>
          <AirbnbRating showRating={false} size={30} isDisabled defaultRating={avgRating} />
          <Text variant="bodyMedium">
            ({reviews.length})
          </Text>
        </View>
        <Text variant="bodyMedium">
          {props.description}
        </Text>
      </Card.Content>
    </Card>
  );
}

type ReviewProps = {
  user: string;
  title: string;
  rating: number;
  body: string;
}

const Review = (props: ReviewProps) => {
  return (
    <View style={styles.container}>
      <Card style={styles.rating}>
        <Card.Title
          title={props.user}
          left={() => <Avatar.Image size={50} source={require('../assets/user.webp')} />}
          right={() => <AirbnbRating showRating={false} size={30} isDisabled defaultRating={props.rating} />}
        />
        <Card.Content>
          <Text variant="titleLarge">{props.title}</Text>
          <Text variant="bodyMedium">
            {props.body}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const Profile = () => (
  <ScrollView>
    <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="Profesional" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
    <Professional
      name={professional.name}
      phone={professional.phone}
      email={professional.email}
      description={professional.description}
    />
    {reviews.map((review) => {
      return (
        <Review
          user={review.user}
          title={review.title}
          rating={review.rating}
          body={review.body}
        />
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  card: {
    alignItems: "center"
  },
  rating: {
    backgroundColor: '#fff'
  },
  container: {
    padding: 5
  },
  contactInfo: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
});

export default Profile

