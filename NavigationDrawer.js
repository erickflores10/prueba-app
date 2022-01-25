import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BlockerHome from "../screens/BlockerHome";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BlockerHome} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
