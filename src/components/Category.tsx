import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { commonStyle } from '../utils/style';

export type CategoryProps = {
  name: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export const Category = ({ name, icon }: CategoryProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('WorkersScreen');
  };

  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.categoryIcon}>
          <MaterialCommunityIcons
            name={icon}
            size={50}
            color={commonStyle.backgroundColor}
          />
        </View>
        <Text style={styles.categoryText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const categorySize = 80;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 125,
    width: Dimensions.get('window').width * 0.3,
    marginTop: 10,
  },
  categoryIcon: {
    backgroundColor: '#0f172a',
    width: 80,
    height: categorySize,
    borderRadius: categorySize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categoryText: {
    color: '#0f172a',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
