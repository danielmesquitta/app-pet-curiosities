import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

function Icon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.primary._200} />

      <Tabs
        initialRouteName="curiosities"
        screenOptions={{
          animation: "fade",
          headerShown: false,
          tabBarActiveTintColor: colors.primary._600,
          tabBarInactiveTintColor: colors.gray._100,
          tabBarShowLabel: false,
          tabBarButton: ({ children, ...rest }) => (
            <TouchableOpacity {...(rest as any)} activeOpacity={0.7}>
              {children}
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            marginTop: 12,
            justifyContent: "center",
          },
          tabBarStyle: {
            height: 64,
            backgroundColor: colors.primary._200,
          },
        }}
      >
        <Tabs.Screen
          name="curiosities"
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
