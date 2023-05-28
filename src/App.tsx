import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CategoriesScreen />
    </SafeAreaProvider>
  );
}
