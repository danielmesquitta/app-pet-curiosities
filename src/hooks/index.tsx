import React from "react";

import { ViewProps } from "react-native";
import { KeyboardProvider, useKeyboard } from "./keyboard";

const HooksProvider = ({ children }: ViewProps) => (
  <KeyboardProvider>{children}</KeyboardProvider>
);

export { HooksProvider, useKeyboard };
