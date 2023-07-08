import * as React from 'react';
import { Text, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { WorkerDetails } from '../data/worker-details';
import { commonStyle } from '../utils/style';
import { ChatUserInfo } from '../components/ChatUserInfo';

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
      setSelectedAddress(newAddress);
      setNewAddress('');
    }
  };

  const navigation = useNavigation<RootStackParamList>();
  const onCancelPress = () => {
    navigation.navigate('ProfileScreen', { details, editable: false });
  };
  const onContinuePress = () => {
    // TODO: Mandar direccion seleccionada a json server para que el profesional lo pueda leer desde su lado
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
      <View style={styles.content}>
        <ChatUserInfo name={details.name} image={details.image} />
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
          <Button style={styles.newAddressButton} onPress={onNewAddressPress}>
            <MaterialCommunityIcons name="plus" size={20} color={'black'} />
          </Button>
        </View>
      </View>
      <View style={styles.endButtons}>
        <Button
          style={{ backgroundColor: commonStyle.secondaryColor }}
          onPress={onCancelPress}
        >
          <Text style={styles.contactText}> Cancelar </Text>
        </Button>
        <Button
          style={{ backgroundColor: commonStyle.secondaryColor }}
          onPress={onContinuePress}
        >
          <Text style={styles.contactText}> Continuar </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.backgroundColor,
  },
  content: {
    flex: 1,
  },
  endButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 20,
    fontWeight: '300',
  },
  newAddressButton: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.secondaryColor,
    borderRadius: 50,
    width: '10%',
    justifyContent: 'center',
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
  textInput: {
    width: '80%',
    marginRight: 5,
  },
  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    paddingBottom: 15,
    paddingLeft: 0,
    borderColor: 'red',
  },
});
