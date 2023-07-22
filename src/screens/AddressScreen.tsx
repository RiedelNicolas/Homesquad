import * as React from 'react';
import { Text, Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { WorkerDetails } from '../data/worker-details';
import { commonStyle } from '../utils/style';
import { ChatUserInfo } from '../components/ChatUserInfo';
import { AddressType } from '../data/dataTypes';
import { getAddresses, addAddress } from '../services/json-server.service';

export type AddressScreenProps = {
  details: WorkerDetails;
};

export const AddressScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'AddressScreen'>) => {
  const details = route.params.details;
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const [addresses, setAddresses] = React.useState<AddressType[]>([]);
  const [newAddress, setNewAddress] = React.useState('');
  const onNewAddressPress = () => {
    if (newAddress) {
      setAddresses([
        ...addresses,
        { id: addresses.length + 1, address: newAddress },
      ]);
      setSelectedAddress(newAddress);
      setNewAddress('');
      addAddress({
        id: addresses.length + 1,
        address: newAddress,
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const addresses = await getAddresses();
        setAddresses(addresses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

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
        <ChatUserInfo name={details.name} image={details.image} address={''} />
        <Text style={styles.chooseAddressStyle}>
          Elija la direccion donde se realizara el servicio
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedAddress}
            onValueChange={(itemValue: string) => setSelectedAddress(itemValue)}
            mode="dropdown"
            style={{ borderColor: 'black' }}
          >
            {addresses.map((address, index) => (
              <Picker.Item
                key={index}
                label={address.address}
                value={address.address}
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
            outlineColor="black"
            outlineStyle={styles.textInputOutline}
            activeOutlineColor="black"
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
          <Text style={styles.endButtonsText}> Cancelar </Text>
        </Button>
        <Button
          style={{ backgroundColor: commonStyle.secondaryColor }}
          onPress={onContinuePress}
        >
          <Text style={styles.endButtonsText}> Continuar </Text>
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
  pickerContainer: {
    flex: 0,
    borderWidth: 1,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
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
  endButtonsText: {
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
    width: '75%',
    marginRight: 5,
  },
  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textInputOutline: {
    borderRadius: 10,
  },
});
