import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./ButtomTabs";
import SingUp from "../screens/Auth/SignUp";
import LoginScreen from "../screens/Auth/LoginScreen";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTabs" // <-- this decides the first screen
      options={{ animation: "none" }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SingUp}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ animation: "none" }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ animation: "none" }}
      />
    </Stack.Navigator>
  );
}
