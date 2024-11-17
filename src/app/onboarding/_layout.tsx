import { useOnboarding } from "@/hooks/onboarding";
import { ProgressBarHeader } from "@/layouts/progress-bar-header";
import { colors } from "@/theme";
import { Stack } from "expo-router";

export default function RootOnboardingLayout() {
  const { progress, setProgress } = useOnboarding();

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerBackVisible: false,
        headerRight: () => <ProgressBarHeader progress={progress} />,
        headerStyle: {
          backgroundColor: colors.primary._200,
        },
      }}
    >
      <Stack.Screen name="index" initialParams={{ progress: 10 }} />
      <Stack.Screen name="breeds" initialParams={{ progress: 40 }} />
      <Stack.Screen name="interests" initialParams={{ progress: 65 }} />
      <Stack.Screen name="goals" initialParams={{ progress: 90 }} />
      <Stack.Screen name="paywall" options={{ headerShown: false }} />
    </Stack>
  );
}
