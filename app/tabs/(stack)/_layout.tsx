import { Stack } from "expo-router";
import React from "react";

const StackLauout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home/index"
        options={{
          title: "inicio",
        }}
      />
    </Stack>
  );
};

export default StackLauout;
