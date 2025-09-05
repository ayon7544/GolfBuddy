import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash/SplashScreen";
import BottomTabs from "./ButtomTabs";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
// RootNavigator.js
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Splash" component={SplashScreen} />
  <Stack.Screen name="MainTabs" component={BottomTabs} />  
</Stack.Navigator>

  );
}
