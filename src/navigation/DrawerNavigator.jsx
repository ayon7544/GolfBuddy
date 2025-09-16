import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs";
import AccountSettings from "../screens/AccountSettings/AccountSettings";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import MyMatch from "../screens/MyMatch/MyMatch";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "../utils/responsive";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUp from "../screens/Auth/SignUp";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import CreateMatch from "../screens/Search/CreateMatch";
import Notifications from "../screens/Notifications/Notifications";
const Drawer = createDrawerNavigator();

// Custom drawer content with full background and "Menu" header
function CustomDrawerContent(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.drawerContainer]}>
      {/* Drawer Header */}
      <View
        style={[
          styles.drawerHeader,
          { paddingTop: insets.top, height: 60 + insets.top },
        ]}
      >
        <Text style={styles.headerText}>Menu</Text>
      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0, flex: 1 }}
      >
        <DrawerItem
          label="Privacy Policy"
          labelStyle={styles.itemLabel}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        />
        <DrawerItem
          label="My Match"
          labelStyle={styles.itemLabel}
          onPress={() => props.navigation.navigate("MyMatch")}
        />
        <DrawerItem
          label="Account Settings"
          labelStyle={styles.itemLabel}
          onPress={() => props.navigation.navigate("AccountSettings")}
        />
      </DrawerContentScrollView>
    </View>
  );
}

// Drawer Navigator
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "70%", // full drawer background color
        },
      }}
    >
      {/* Hidden Bottom Tabs */}
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{ drawerItemStyle: { height: 0 } }}
      />
      <Drawer.Screen name="AccountSettings" component={AccountSettings} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="MyMatch" component={MyMatch} />
      {/* Auth Screens */}
      <Drawer.Screen name="SignIn" component={LoginScreen} />
      <Drawer.Screen name="SignUp" component={SignUp} />

      {/* Other Screens */}
      <Drawer.Screen name="Friends" component={FriendsScreen} />
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Drawer.Screen name="CreateMatch" component={CreateMatch} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    // full drawer background
  },
  drawerHeader: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "",
    backgroundColor: "#059669",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F3F4F6",
  },
  itemLabel: {
    color: "#6B7280",
  },
});
