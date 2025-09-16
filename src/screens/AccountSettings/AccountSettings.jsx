import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function AccountSettings({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 200 }}
    >
      {/* Header */}
      <View className="bg-[#059669] h-32 w-full justify-end">
        <View className="flex-row items-center pl-4 h-20">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <Image
              source={require("./assets/backArrow.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-white text-xl ml-2 font-PopinsRegular">
            Account Settings
          </Text>
        </View>
      </View>
      <View className=" ">
        <TouchableOpacity className="flex-row  my-3 items-center  ">
          <Image
            style={{ marginRight: 15, marginLeft: 20 }}
            className="mr-8"
            source={require("./assets/key.png")}
          />
          <Text className="font-PopinsRegular   color-[#6B7280] text-xl">
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row  my-3 items-center  ">
          <Image
            style={{ marginRight: 15, marginLeft: 20 }}
            className="mr-8"
            source={require("./assets/delete.png")}
          />
          <Text className="font-PopinsRegular   color-[#6B7280] text-xl">
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
