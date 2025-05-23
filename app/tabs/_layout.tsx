import { Tabs } from "expo-router";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-card" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
