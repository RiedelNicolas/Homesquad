import { SafeAreaProvider } from 'react-native-safe-area-context';
import Profile from './screens/ProfesionalProfile';
import React from 'react'

export default function App() {
  return (
    <SafeAreaProvider>
      <Profile />
    </SafeAreaProvider>
  );
}
