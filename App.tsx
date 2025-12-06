import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "@/routes";
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
