import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { commonStyle } from '../utils/style';
import { RootStackParamList, useNavigation } from '../utils/navigator';
import { WorkersData } from '../data/workers';

export type CategoryProps = {
  name: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export const Category = ({ name, icon }: CategoryProps) => {
  const navigation = useNavigation<RootStackParamList>();
  const onPress = () => {
    navigation.navigate('WorkersScreen', WorkersData[name]);
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
    backgroundColor: commonStyle.secondaryColor,
    width: 80,
    height: categorySize,
    borderRadius: categorySize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categoryText: {
    color: commonStyle.textColor,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
