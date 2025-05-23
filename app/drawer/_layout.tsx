import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          title: "User",
          drawerLabel: "User",
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          title: "Horario",
          drawerLabel: "Horario",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
