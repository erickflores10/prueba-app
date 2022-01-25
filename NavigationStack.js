import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BlockerHome from "../screens/BlockerHome";
import ProfileScreen from "../screens/ProfileScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home" component={BlockerHome} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
