import * as React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import { price } from '../data/chat';

type ProposalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Proposal = ({ modalVisible, setModalVisible }: ProposalProps) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade" // or "fade" or "none"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={styles.modal}>
          <View style={styles.proposalContainer}>
            <Text style={styles.proposalText}>Proposal</Text>
            <Text style={styles.priceText}>{`Pago total: $${price}`}</Text>
            <View style={styles.buttonContainer}>
              <Button>Aceptar</Button>
              <Button onPress={() => setModalVisible(false)}>Renegociar</Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  proposalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  proposalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
