import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-native-paper';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, RootStackParamList } from '../utils/navigator';

export type PaymentModalProps = {
  visible: boolean;
  hideModal: () => void;
};

type CompletedModalProps = {
  confirmed: boolean;
};

type ConfirmationModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal = ({ onConfirm, onCancel }: ConfirmationModalProps) => {
  return (
    <View style={styles.modalContent}>
      <Text style={styles.title}>Confirmar Pago</Text>
      <Text style={styles.message}>
        ¿Estás seguro que deseas confirmar el pago?
      </Text>
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={onCancel} style={styles.button}>
          Cancelar
        </Button>
        <Button mode="contained" onPress={onConfirm} style={styles.button}>
          Pagar
        </Button>
      </View>
    </View>
  );
};

const CompletedModal = ({ confirmed }: CompletedModalProps) => {
  const [animation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const resetAnimation = () => {
    animation.setValue(0);
  };

  useEffect(() => {
    if (confirmed) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [confirmed]);

  const scaleInterpolation = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  const opacityInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const navigation = useNavigation<RootStackParamList>();

  return (
    <View style={styles.modalContent}>
      <Animated.View
        style={[
          styles.checkmarkContainer,
          { transform: [{ scale: scaleInterpolation }] },
        ]}
      >
        <Animated.View
          style={[styles.checkmark, { opacity: opacityInterpolation }]}
        >
          <AntDesign name="check" size={50} color="white" />
        </Animated.View>
      </Animated.View>
      <Text style={styles.title}>¡Pago Realizado con Éxito!</Text>
      <Button onPress={() => navigation.navigate('HomeScreen')}>
        Volver a Home
      </Button>
    </View>
  );
};

export const PaymentModal = ({ visible, hideModal }: PaymentModalProps) => {
  const [confirmed, setConfirmed] = useState(false);
  const onConfirm = () => setConfirmed(true);
  const onCancel = () => setConfirmed(false);
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {confirmed ? (
        <CompletedModal confirmed={confirmed} />
      ) : (
        <ConfirmationModal onCancel={onCancel} onConfirm={onConfirm} />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 4,
    minWidth: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  checkmarkContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 8,
  },
});
