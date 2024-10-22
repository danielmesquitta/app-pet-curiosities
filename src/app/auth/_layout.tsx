import { Stack } from "expo-router";

export function RootAuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}
