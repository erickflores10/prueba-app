import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlockerHome from "../screens/BlockerHome";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BlockerHome} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
