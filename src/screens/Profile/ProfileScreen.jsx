import React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1">
      <View className="bg-[#059669] h-[13.17%] w-full" />
      <View className="bg-[#34D399] h-[13.79%] w-full" />
      <View className="flex-1  items-center pt-20 ">
        <Text>Name</Text>
        <Text>About Me</Text>
        <Text>Hnadicap : 10 || Playing Style : Competitive</Text>
        <Text>Home club : Malahide Golf Club</Text>
        <Text>Preferred times : Weekend mornings</Text>
        <Text>Club crest : Malahide Golf Club crest</Text>
      </View>
    </View>
  );
}
