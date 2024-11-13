import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function Icon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.primary._100} />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary._500,
          tabBarInactiveTintColor: colors.gray._100,
          tabBarInactiveBackgroundColor: colors.primary._100,
          tabBarActiveBackgroundColor: colors.primary._100,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <Icon name="paw" color={color} />,
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            tabBarIcon: ({ color }) => <Icon name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            tabBarIcon: ({ color }) => <Icon name="podium" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
