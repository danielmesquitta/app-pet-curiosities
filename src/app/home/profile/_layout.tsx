import { colors } from "@/src/theme";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.primary._100} />

      <Slot />
    </>
  );
}
