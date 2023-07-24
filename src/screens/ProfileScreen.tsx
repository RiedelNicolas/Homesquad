import * as React from 'react';
import { Avatar, Card, Text, Button } from 'react-native-paper';
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

interface ProfessionalProps {
  workerDetails: WorkerDetails;
  editable: boolean;
}

const renderEmploymentsButton = () => {
  const navigation = useNavigation<RootStackParamList>();

  const onPressEmploymentsButton = () => {
    navigation.navigate('EmploymentsScreen', { title: 'Mis prestaciones' });
  };

  return (
    <Button style={styles.contactButton} onPress={onPressEmploymentsButton}>
      <MaterialCommunityIcons
        name="clipboard-text-clock"
        size={20}
        color={commonStyle.backgroundColor}
      />
      <Text style={styles.contactText}> Mis prestaciones</Text>
    </Button>
  );
};

const renderEditButton = () => {
  return (
    <Button style={styles.contactButton}>
      <MaterialCommunityIcons
        name="pencil"
        size={20}
        color={commonStyle.backgroundColor}
      />
      <Text style={styles.contactText}> Editar perfil</Text>
    </Button>
  );
};

const renderOwnerButtons = () => {
  return (
    <View style={styles.ownerButtons}>
      {renderEditButton()}
      {renderEmploymentsButton()}
    </View>
  );
};

const renderStars = (workerDetails: WorkerDetails) => {
  return (
    <View style={styles.basicInfo}>
      <AirbnbRating
        showRating={false}
        size={30}
        isDisabled
        defaultRating={workerDetails.rating}
      />
      <Text variant="bodyMedium">({workerDetails.reviewsAmount})</Text>
    </View>
  );
};

const renderProfessionalDescription = (workerDetails: WorkerDetails) => {
  return (
    <View style={styles.professionalDescription}>
      <Text variant="bodyMedium">{workerDetails.description}</Text>
    </View>
  );
};

const Professional = ({ workerDetails, editable }: ProfessionalProps) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <Card>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={150} source={workerDetails.image} />
        <Text style={styles.titleStyle}>{workerDetails.name}</Text>

        {renderStars(workerDetails)}

        {editable && renderOwnerButtons()}

        {renderProfessionalDescription(workerDetails)}

        {editable ? null : (
          <Button
            style={styles.contactButton}
            onPress={() =>
              navigation.navigate('AddressScreen', {
                details: workerDetails,
              })
            }
          >
            <MaterialCommunityIcons
              name="chat"
              size={20}
              color={commonStyle.backgroundColor}
            />
            <Text style={styles.contactText}> Contactar al profesional</Text>
          </Button>
        )}
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
  editable: boolean;
};

export const ProfileScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>) => {
  const details = route.params.details;
  const editable = route.params.editable;
  return (
    <ScrollView style={styles.container}>
      <Professional workerDetails={details} editable={editable} />
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
  titleStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: commonStyle.textColor,
  },
  professionalDescription: {
    backgroundColor: commonStyle.shadeColor,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginTop: 20,
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
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.secondaryColor,
  },
  contactText: {
    fontSize: 16,
    fontWeight: '300',
    color: commonStyle.backgroundColor,
  },
  basicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageButton: {
    backgroundColor: commonStyle.cardColor,
    borderRadius: 50,
  },

  ownerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
