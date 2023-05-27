import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WorkersScreen } from './screens/WorkersScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <WorkersScreen />
    </SafeAreaProvider>
  );
}
