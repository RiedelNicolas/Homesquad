import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { commonStyle } from '../utils/style';
import { RootStackParamList } from '../utils/navigator';
import { PaymentModal } from '../components/PaymentModal';

type CardType = {
  id: string;
  cardNumber: string;
  cardHolder: string;
};

// Sample data for the used credit cards
const usedCreditCards: CardType[] = [
  { id: '1', cardNumber: '**** **** **** 1234', cardHolder: 'Ana Perez' },
  { id: '2', cardNumber: '**** **** **** 5678', cardHolder: 'Ana Perez' },
];

export type PaymentScreenProps = {
  price: number;
};

export const PaymentScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'PaymentScreen'>) => {
  const { price } = route.params;
  const [selectedCard, setSelectedCard] = useState('');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const renderItem = (item: CardType) => (
    <TouchableOpacity
      onPress={() => {
        showModal();
        setSelectedCard(item.cardNumber);
      }}
    >
      <View style={styles.creditCardContainer}>
        <MaterialCommunityIcons
          name="credit-card"
          size={24}
          color="black"
          style={styles.creditCardIcon}
        />
        <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Pago" />
        <Card.Content>
          <Text style={styles.price}>Precio: ${price}</Text>
          <FlatList
            data={usedCreditCards}
            keyExtractor={(item: CardType) => item.id}
            renderItem={({ item }) => renderItem(item)}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          />
        </Card.Content>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              console.log('Agrego tarjeta');
            }}
            style={styles.addButton}
            textColor="white"
          >
            Agregar Método de Pago
          </Button>
        </View>
      </Card>
      <PaymentModal
        visible={visible}
        hideModal={hideModal}
        cardNumber={selectedCard}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    height: 500,
  },
  price: {
    fontSize: 18,
    marginBottom: 16,
  },
  creditCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  creditCardIcon: {
    marginRight: 8,
  },
  cardNumber: {
    fontSize: 16,
    marginRight: 8,
  },
  cardHolder: {
    fontSize: 16,
  },
  divider: {
    backgroundColor: 'gray',
    marginVertical: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: '90%',
  },
  addButton: {
    width: '100%',
    backgroundColor: commonStyle.secondaryColor,
  },
});
