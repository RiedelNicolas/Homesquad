import * as React from 'react';
import { Avatar, Card, Text, IconButton, Button } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { UserImage } from '../assets';
import { Review, WorkerDetails } from '../data/worker-details';
import { commonStyle } from '../utils/style';

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
  reviews: Array<Review>;
};

const Professional = ({
  workerDetails,
  description,
  phone,
  reviews,
}: ProfessionalProps) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <Card>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={150} source={workerDetails.image} />
        <Text variant="titleLarge">{workerDetails.name}</Text>
        {reviews.length > 0 ? (
          <View style={styles.basicInfo}>
            <AirbnbRating
              showRating={false}
              size={30}
              isDisabled
              defaultRating={
                reviews
                  .filter((x) => x.rating)
                  .reduce((acc, x) => acc + x.rating, 0) / reviews.length
              }
            />
            <Text variant="bodyMedium">({reviews.length})</Text>
          </View>
        ) : (
          <Text>Este profesional todavia no tiene reviews</Text>
        )}
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
              },
            })
          }
        >
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

const ReviewCard = (props: ReviewProps) => {
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
  const reviews: Array<Review> = details.reviews ? details.reviews : [];
  return (
    <ScrollView style={styles.container}>
      <Professional
        workerDetails={details}
        phone={professional.phone}
        description={professional.description}
        reviews={reviews}
      />
      {reviews.map((review, idx) => {
        return (
          <ReviewCard
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
