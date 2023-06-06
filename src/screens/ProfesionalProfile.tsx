import * as React from 'react';
import { Avatar, Card, Text, IconButton } from 'react-native-paper';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { UserImage } from '../assets';
import { WorkerDetails } from '../components/WorkerCard';
import { commonStyle } from '../utils/style';

const reviews = [
  {
    user: 'Laura',
    title: 'Gran experiencia',
    rating: 4,
    body: 'Entendió perfectamente mis necesidades y realizó un trabajo excepcional. Lo recomendaría sin dudarlo.',
  },
  {
    user: 'Carlos',
    title: 'No cumplió con las expectativas',
    rating: 2,
    body: 'El resultado no fue el esperado y hubo demoras en la entrega. No estoy satisfecho con el desempeño.',
  },
  {
    user: 'María',
    title: 'Altamente recomendado',
    rating: 5,
    body: 'Brindó un servicio de calidad y se mostró muy profesional en todo momento. Lo volvería a contratar.',
  },
  {
    user: 'Pedro',
    title: 'Decepcionante',
    rating: 1,
    body: 'El trabajo realizado no cumplió con mis expectativas y tuve que buscar otra opción para solucionar el problema.',
  },
  {
    user: 'Ana',
    title: 'Excelente asesoramiento',
    rating: 4,
    body: 'Me proporcionó una guía clara y precisa en mi situación. Su conocimiento y experiencia fueron notables.',
  },
  {
    user: 'Juan',
    title: 'Insatisfactorio',
    rating: 2,
    body: 'No logró resolver el problema y su actitud no fue profesional. No quedé satisfecho con el servicio brindado.',
  },
  {
    user: 'Sofía',
    title: 'Buena calidad, pero costoso',
    rating: 3,
    body: 'El servicio prestado fue de calidad aceptable, pero el precio fue más alto de lo esperado. Experiencia regular en general.',
  },
  {
    user: 'Miguel',
    title: 'Profesional y rápido',
    rating: 5,
    body: 'Fue puntual, eficiente y brindó una solución efectiva al problema. Quedé muy satisfecho con su trabajo.',
  },
  {
    user: 'Carolina',
    title: 'Promedio',
    rating: 3,
    body: 'Realizó un trabajo decente, aunque hubo algunos detalles que podrían haberse mejorado. Experiencia regular en general.',
  },
  {
    user: 'Luis',
    title: 'Desorganizado',
    rating: 2,
    body: 'No coordinó bien los aspectos necesarios y hubo retrasos y problemas durante el proceso. No cumplió con mis expectativas.',
  },
  {
    user: 'Elena',
    title: 'Servicio rápido y eficiente',
    rating: 4,
    body: 'Solucionó el problema en poco tiempo y el resultado fue excelente. Recomendaría sus servicios sin dudarlo.',
  },
  {
    user: 'Martín',
    title: 'Amplio conocimiento',
    rating: 4,
    body: 'Demostró un amplio conocimiento en el área y supo resolver todas mis dudas. Fue una gran ayuda.',
  },
];

const professional = {
  name: 'Juan Gasista',
  phone: '(11) 2344-5566',
  email: 'juan.servicios@gmail.com',
  description:
    '¡Hola! Soy Juan, un gasista matriculado con más de 10 años de experiencia. Estoy aquí para ofrecerte servicios de instalación, mantenimiento y reparación de gas. Mi objetivo es brindarte soluciones seguras y eficientes. Confía en mí para mantener tu hogar o negocio en perfectas condiciones.',
};

type ProfessionalProps = {
  name: string;
  phone: string;
  email: string;
  description: string;
  image: React.ComponentProps<typeof Image>['source'];
  rating: number;
  reviewsAmount: number;
};

const Professional = (props: ProfessionalProps) => {
  const navigation = useNavigation();
  return (
    <Card>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={150} source={props.image} />
        <Text variant="titleLarge">{props.name}</Text>
        <View style={styles.contactInfo}>
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            )}
          />
          <Text style={{ marginRight: 10 }}>{props.phone}</Text>

          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
          />

          <Text>{props.email}</Text>
        </View>

        <View style={styles.contactInfo}>
          <TouchableOpacity style={styles.messageButton}>
            <IconButton
              icon={({ size, color }) => (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => navigation.navigate('ChatScreen')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contactInfo}>
          <AirbnbRating
            showRating={false}
            size={30}
            isDisabled
            defaultRating={props.rating}
          />
          <Text variant="bodyMedium">({props.reviewsAmount})</Text>
        </View>
        <Text variant="bodyMedium">{props.description}</Text>
      </Card.Content>
    </Card>
  );
};

type ReviewProps = {
  user: string;
  title: string;
  rating: number;
  body: string;
};

const Review = (props: ReviewProps) => {
  return (
    <View style={styles.container}>
      <Card style={styles.reviewCard}>
        <Card.Title
          title={props.user}
          left={() => <Avatar.Image size={50} source={UserImage} />}
          right={() => (
            <AirbnbRating
              showRating={false}
              size={30}
              isDisabled
              defaultRating={props.rating}
            />
          )}
        />
        <Card.Content>
          <Text variant="titleLarge">{props.title}</Text>
          <Text variant="bodyMedium">{props.body}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export type ProfileScreenProps = {
  details: WorkerDetails;
};

export const ProfileScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>) => {
  const { name, image, reviewsAmount, rating } = route.params.details;

  return (
    <ScrollView style={styles.container}>
      <Professional
        name={name}
        phone={professional.phone}
        email={name.replace(' ', '.').toLowerCase() + '@gmail.com'}
        description={professional.description}
        image={image}
        rating={rating}
        reviewsAmount={reviewsAmount}
      />
      {reviews
        .sort(() => Math.random() - 0.5)
        .slice(0, reviewsAmount)
        .map((review, idx) => {
          return (
            <Review
              key={idx}
              user={review.user}
              title={review.title}
              rating={review.rating}
              body={review.body}
            />
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.backgroundColor,
  },
  professionalCard: {
    alignItems: 'center',
    backgroundColor: commonStyle.backgroundColor,
    paddingTop: 20,
  },
  reviewCard: {
    margin: 10,
    backgroundColor: commonStyle.cardColor,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageButton: {
    backgroundColor: commonStyle.cardColor,
    borderRadius: 50,
  },
});
