import { colors } from "@/theme";
import { Stack } from "expo-router";

export default function RootOnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerBackButtonMenuEnabled: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.primary._100,
        },
      }}
    />
  );
}
