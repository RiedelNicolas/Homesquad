import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { CategoriesScreen } from './screens/CategoriesScreen';

function App() {
  return (
    <SafeAreaProvider>
      <CategoriesScreen />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
