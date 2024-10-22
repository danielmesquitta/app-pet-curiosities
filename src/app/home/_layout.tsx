import { colors } from "@/src/theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome6>["name"];
  color: string;
}) {
  return <FontAwesome6 size={28} style={{ marginBottom: -3 }} {...props} />;
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
            tabBarIcon: ({ color }) => <TabBarIcon name="paw" color={color} />,
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="book-open" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="ranking-star" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
