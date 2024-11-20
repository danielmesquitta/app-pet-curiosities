import { Icon } from "@/components/icon";
import { colors } from "@/theme";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

const iconProps = {
  size: 28,
  style: { marginBottom: -3 },
};

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
            tabBarIcon: ({ color }) => (
              <Icon name="paw" color={color} {...iconProps} />
            ),
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="book" color={color} {...iconProps} />
            ),
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="ranking-star" color={color} {...iconProps} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user-large" color={color} {...iconProps} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cart-shopping" color={color} {...iconProps} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
