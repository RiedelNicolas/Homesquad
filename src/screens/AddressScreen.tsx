import * as React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../utils/navigator';
import { WorkerDetails } from '../data/worker-details';
import { commonStyle } from '../utils/style';

export type AddressScreenProps = {
  details: WorkerDetails;
};

export const AddressScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'AddressScreen'>) => {
  const details = route.params.details;
  const [selectedAddress, setSelectedAddress] = React.useState('');
  return (
    <View style={styles.container}>
      <Card.Content style={styles.professionalCard}>
        <Avatar.Image size={100} source={details.image} />
        <Text style={styles.nameStyle}>{details.name}</Text>
      </Card.Content>
      <Text style={styles.chooseAddressStyle}>
        {/* TODO: Centrar este texto */}
        Elija la direccion donde se realizara el servicio
      </Text>
      <Picker
        selectedValue={selectedAddress}
        onValueChange={(itemValue) => setSelectedAddress(itemValue)}
        mode="dropdown"
      >
        <Picker.Item
          label="Home"
          value="Home Address"
          style={styles.pickerItemStyle}
        />
        <Picker.Item
          label="Work"
          value="Work Address"
          style={styles.pickerItemStyle}
        />
        <Picker.Item
          label="Parents"
          value="Parents Adress"
          style={styles.pickerItemStyle}
        />
      </Picker>

      <Text variant="bodyLarge">{selectedAddress}+hola</Text>
    </View>
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
  contactButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: commonStyle.secondaryColor,
  },
  contactText: {
    fontSize: 20,
    fontWeight: '300',
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
});
