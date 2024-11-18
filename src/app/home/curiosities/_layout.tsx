import { Stack } from "expo-router";

export default function RootCuriositiesLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
