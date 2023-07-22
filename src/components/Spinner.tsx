import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { commonStyle } from '../utils/style';

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        size={150}
        color={commonStyle.secondaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
