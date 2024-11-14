import React, { createContext, useContext, useState } from "react";

import { ViewProps } from "react-native";
import { OnboardingContextState } from "./types";

const OnboardingContext = createContext<OnboardingContextState>(
  {} as OnboardingContextState
);

const OnboardingProvider = ({ children, ...rest }: ViewProps) => {
  const [progress, setProgress] = useState(10);

  return (
    <OnboardingContext.Provider value={{ progress, setProgress }} {...rest}>
      {children}
    </OnboardingContext.Provider>
  );
};

const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context)
    throw new Error("useOnboarding must be used within a OnboardingProvider");
  return context;
};

export { OnboardingProvider, useOnboarding };
