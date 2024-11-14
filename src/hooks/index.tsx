import React from "react";

import { ViewProps } from "react-native";
import { KeyboardProvider, useKeyboard } from "./keyboard";
import { OnboardingProvider } from "./onboarding";

const HooksProvider = ({ children }: ViewProps) => (
  <OnboardingProvider>
    <KeyboardProvider>{children}</KeyboardProvider>
  </OnboardingProvider>
);

export { HooksProvider, useKeyboard };
