import { Redirect } from "expo-router";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?",
]);

export default function Index() {
  return <Redirect href="/auth" />;
}
