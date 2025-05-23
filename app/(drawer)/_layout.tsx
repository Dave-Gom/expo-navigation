import CustomDrawer from "@/components/shared/CustomDrawer";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.5)",
        drawerActiveTintColor: "indigo",
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Horario",
          drawerLabel: "Horario",
        }}
      />
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
