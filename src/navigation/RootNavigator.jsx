import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./ButtomTabs";
import SingUp from "../screens/Auth/SignUp";
import LoginScreen from "../screens/Auth/LoginScreen";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import HomeScreen from "../screens/Home/HomeScreen";
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    // RootNavigator.js
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Auth"
        component={require("../screens/Auth/LoginScreen").default}
      />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SingUp} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
    </Stack.Navigator>
  );
}
