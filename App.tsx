import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WorkersScreen } from './screens/WorkersScreen';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <CategoriesScreen />
    </SafeAreaProvider>
  );
};

