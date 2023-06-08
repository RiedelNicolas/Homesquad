import * as React from 'react';
import { Avatar, Card, Text, IconButton, Button } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { UserImage } from '../assets';
import { WorkerDetails } from '../data/worker-details';
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
  workerDetails: WorkerDetails;
  description: string;
  phone: string;
};

const Professional = ({
  workerDetails,
  description,
  phone,
}: ProfessionalProps) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <Card>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={150} source={workerDetails.image} />
        <Text variant="titleLarge">{workerDetails.name}</Text>

        <View style={styles.basicInfo}>
          <AirbnbRating
            showRating={false}
            size={30}
            isDisabled
            defaultRating={workerDetails.rating}
          />
          <Text variant="bodyMedium">({workerDetails.reviewsAmount})</Text>
        </View>
        <Text style={styles.professionalDescription} variant="bodyMedium">
          {description}
        </Text>

        <View style={styles.contactInfo}>
          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            )}
          />
          <Text style={{ marginRight: 10 }}>{phone}</Text>

          <IconButton
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
          />

          <Text>
            {workerDetails.name.replace(' ', '.').toLowerCase() + '@gmail.com'}
          </Text>
        </View>

        <Button
          style={styles.contactButton}
          onPress={() =>
            navigation.navigate('ChatScreen', {
              workerDetails: {
                name: workerDetails.name,
                distance: '',
                image: workerDetails.image,
                deliveryTime: '',
                location: '',
                rating: workerDetails.rating,
                reviewsAmount: workerDetails.reviewsAmount,
              },
            })
          }
        >
          <MaterialCommunityIcons
            name="message-text-outline"
            size={20}
            color={commonStyle.textColor}
          />
          <Text>Contacta al profesional</Text>
        </Button>
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
  const details = route.params.details;

  return (
    <ScrollView style={styles.container}>
      <Professional
        workerDetails={details}
        phone={professional.phone}
        description={professional.description}
      />
      {reviews
        .sort(() => Math.random() - 0.5)
        .slice(0, details.reviewsAmount)
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
  professionalDescription: {
    backgroundColor: commonStyle.shadeColor,
    borderRadius: 10,
    padding: 10,
  },
  reviewCard: {
    margin: 10,
    backgroundColor: commonStyle.secondaryColor,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    backgroundColor: commonStyle.primaryColor,
  },
  basicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  messageButton: {
    backgroundColor: commonStyle.cardColor,
    borderRadius: 50,
  },
});
