import { SafeAreaProvider } from 'react-native-safe-area-context';
import Profile from './screens/ProfesionalProfile';

export default function App() {
  return (
    <SafeAreaProvider>
      <Profile />
    </SafeAreaProvider>
  );
}
