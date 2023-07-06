import * as React from 'react';
import { Avatar, Card, Text, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { WorkerDetails } from '../data/worker-details';
import { commonStyle } from '../utils/style';

export type AddressScreenProps = {
  details: WorkerDetails;
};

const initialAddresses = ['Matienzo', 'Paseo Colon', 'Julian Alvarez'];

export const AddressScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'AddressScreen'>) => {
  const details = route.params.details;
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const [addresses, setAddresses] = React.useState(initialAddresses);
  const [newAddress, setNewAddress] = React.useState('');
  const onNewAddressPress = () => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
    }
  };

  const navigation = useNavigation<RootStackParamList>();
  const onCancelPress = () => {
    navigation.navigate('ProfileScreen', { details, editable: false });
  };
  const onContinuePress = () => {
    navigation.navigate('ChatScreen', {
      workerDetails: {
        name: details.name,
        distance: '',
        image: details.image,
        deliveryTime: '',
        location: selectedAddress, //esta el la direccion seleccionada con el picker
        rating: details.rating,
        reviewsAmount: details.reviewsAmount,
        description: details.description,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={100} source={details.image} />
        <Text style={styles.nameStyle}>{details.name}</Text>
      </Card.Content>
      <Text style={styles.chooseAddressStyle}>
        Elija la direccion donde se realizara el servicio
      </Text>

      <View
        style={{
          flex: 0,
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Picker
          selectedValue={selectedAddress}
          onValueChange={(itemValue) => setSelectedAddress(itemValue)}
          mode="dropdown"
          style={{ borderColor: 'black' }}
        >
          {addresses.map((address, index) => (
            <Picker.Item
              key={index}
              label={address}
              value={address}
              style={styles.pickerItemStyle}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nueva Direccion"
          value={newAddress}
          onChangeText={(text) => setNewAddress(text)}
          multiline
          mode="outlined"
          theme={{
            colors: { primary: 'black' },
          }}
        />
        {/* TODO: Arreglar como se ve este boton */}
        <Button style={styles.newAddressButton} onPress={onNewAddressPress}>
          <MaterialCommunityIcons name="plus" size={20} color={'black'} />
        </Button>
      </View>
      {/* TODO: Dejar mas lindos estos botones */}
      <View style={styles.endButtons}>
        <Button onPress={onCancelPress}>Cancelar</Button>
        <Button onPress={onContinuePress}>Continuar</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyle.backgroundColor,
  },
  endButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 325,
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
    fontSize: 18,
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
  newAddressButton: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.secondaryColor,
    width: '10%',
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: commonStyle.textColor,
  },
  chooseAddressStyle: {
    padding: 25,
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '800',
    color: commonStyle.textColor,
  },
  pickerItemStyle: {
    fontSize: 15,
  },
  addressInput: {
    fontSize: 25,
  },
  textInput: {
    width: '90%',
  },
  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    paddingBottom: 15,
    paddingLeft: 0,
    borderColor: 'red',
  },
});
