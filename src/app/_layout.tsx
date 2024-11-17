import { HooksProvider } from "@/hooks";
import * as theme from "@/theme";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from "@expo-google-fonts/montserrat";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavigationBarReady, setIsNavigationBarReady] = useState(false);

  const [isFontsLoaded, error] = useFonts({
    Montserrat_900Black,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(theme.colors.primary._200).then(
      () => {
        setIsNavigationBarReady(true);
      }
    );
  }, []);

  useEffect(() => {
    if (isFontsLoaded && isNavigationBarReady) {
      setIsLoaded(true);
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded, isNavigationBarReady]);

  if (!isLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor={theme.colors.primary._200} />
      <HooksProvider>
        <Slot />
      </HooksProvider>
    </ThemeProvider>
  );
}
