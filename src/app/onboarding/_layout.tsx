import { ProgressBarHeader } from "@/layouts/progress-bar-header";
import { colors } from "@/theme";
import { Stack } from "expo-router";

export default function RootOnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: "",
        headerRight: () => <ProgressBarHeader progress={50} />,
        headerStyle: {
          backgroundColor: colors.primary._100,
        },
      }}
    />
  );
}
