import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function AccountSettings({ navigation }) {
    const insets = useSafeAreaInsets();
  return (
    <ScrollView className="flex-1">
      <View
        className="bg-[#059669] h-[13.17%] w-full justify-end"
        style={{ paddingTop: insets.top, height: 60 + insets.top }}
      >
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
    </ScrollView>
  );
}
