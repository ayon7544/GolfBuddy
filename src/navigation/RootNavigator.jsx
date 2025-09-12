import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator"; // <-- Drawer wraps your BottomTabs
import SignUp from "../screens/Auth/SignUp";
import LoginScreen from "../screens/Auth/LoginScreen";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen"

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login" // show login first
    >
      {/* Drawer + Tabs */}
      <Stack.Screen name="Drawer" component={DrawerNavigator} />

      {/* Auth Screens */}
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />

      {/* Other Screens */}
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
