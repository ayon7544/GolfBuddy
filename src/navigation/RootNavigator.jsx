import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
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
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SingUp} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
