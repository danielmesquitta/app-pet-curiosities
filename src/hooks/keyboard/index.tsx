import React, { createContext, useContext, useEffect, useState } from "react";
import { Keyboard, ViewProps } from "react-native";

import { KeyboardContextState } from "./types";

const KeyboardContext = createContext<KeyboardContextState>(
  {} as KeyboardContextState
);

const KeyboardProvider = ({ children, ...rest }: ViewProps) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });
    Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  return (
    <KeyboardContext.Provider value={{ isKeyboardOpen }} {...rest}>
      {children}
    </KeyboardContext.Provider>
  );
};

const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context)
    throw new Error("useKeyboard must be used within a KeyboardProvider");
  return context;
};

export { KeyboardProvider, useKeyboard };
