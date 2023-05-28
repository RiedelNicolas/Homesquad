import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { registerRootComponent } from "expo";

function App() {
  return (
    <SafeAreaProvider>
      <CategoriesScreen />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
