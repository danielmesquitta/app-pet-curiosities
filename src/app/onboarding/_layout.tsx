import { useOnboarding } from "@/hooks/onboarding";
import { ProgressBarHeader } from "@/layouts/progress-bar-header";
import { colors } from "@/theme";
import { Stack } from "expo-router";

export default function RootOnboardingLayout() {
  const { progress } = useOnboarding();

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerBackVisible: false,
        headerRight: () => <ProgressBarHeader progress={progress} />,
        headerStyle: {
          backgroundColor: colors.primary._100,
        },
      }}
    >
      <Stack.Screen name="index" initialParams={{ progress: 10 }} />
      <Stack.Screen name="breeds" initialParams={{ progress: 40 }} />
      <Stack.Screen name="goals" initialParams={{ progress: 80 }} />
    </Stack>
  );
}
