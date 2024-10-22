import { HooksProvider } from "@/src/hooks";
import * as theme from "@/src/theme";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded, error] = useFonts({
    Montserrat_900Black,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor={theme.colors.primary._100} />
      <HooksProvider>
        <Slot />
      </HooksProvider>
    </ThemeProvider>
  );
}
