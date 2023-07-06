import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CardType = {
  id: string;
  cardNumber: string;
  cardHolder: string;
};

// Sample data for the used credit cards
const usedCreditCards: CardType[] = [
  { id: '1', cardNumber: '**** **** **** 1234', cardHolder: 'John Doe' },
  { id: '2', cardNumber: '**** **** **** 5678', cardHolder: 'Jane Smith' },
];

export const PaymentScreen = () => {
  // Render item for each used credit card
  const renderItem = (item: CardType) => (
    <View style={styles.creditCardContainer}>
      <MaterialCommunityIcons
        name="credit-card"
        size={24}
        color="black"
        style={styles.creditCardIcon}
      />
      <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      <Text style={styles.cardHolder}>{item.cardHolder}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Payment" />
        <Card.Content>
          <Text style={styles.price}>Price: $XX.XX</Text>
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
          >
            Add New Payment Method
          </Button>
        </View>
      </Card>
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
  },
});
