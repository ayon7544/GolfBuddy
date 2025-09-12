import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import MyGameScreen from "../screens/MyGame/MyGameScreen";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

// Tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Choose icon per tab
          switch (route.name) {
            case "Home":
              iconSource = require("./assets/house-chimney.png");
              break;
            case "Search":
              iconSource = require("./assets/search.png");
              break;
            case "My Game":
              iconSource = require("./assets/mygame.png");
              break;
            case "Friends":
              iconSource = require("./assets/friends.png");
              break;
            case "Profile":
              iconSource = require("./assets/profile.png");
              break;
            default:
              iconSource = require("./assets/house-chimney.png");
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#059669" : "#565656",
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
          paddingBottom: 4,
          fontWeight: "600",
        },
        tabBarActiveTintColor: "#059669",
        tabBarInactiveTintColor: "#565656",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarLabel: "Search" }}
      />
      <Tab.Screen
        name="My Game"
        component={MyGameScreen}
        options={{ tabBarLabel: "My Game" }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ tabBarLabel: "Friends" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profiles" }}
      />
    </Tab.Navigator>
  );
}
