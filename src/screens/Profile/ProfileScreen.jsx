import React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1">
      <View className="bg-[#059669] h-[13.17%] w-full" />
      <View className="bg-[#34D399] h-[13.79%] w-full" />
      <View className="flex-1  items-center pt-20 ">
        <Text className="font-PopinsBold text-2xl pb-4">Jim Stewart</Text>
        <Text className="text-center color-[#6B7280] pb-4 px-4">
          A dad with young kids and an avid golfer who only started playing a
          few years ago. Loves early tee times and steadily working his way down
          the handicap
        </Text>
        <Text className="color-[#6B7280]  py-1 font-PopinsBold">
          Hnadicap : 10 || Playing Style : Competitive
        </Text>
        <Text className="color-[#6B7280] py-1 font-PopinsBold">
          Home club : Malahide Golf Club
        </Text>
        <Text className="color-[#6B7280] py-1 font-PopinsBold">
          Preferred times : Weekend mornings
        </Text>
        <Text className="color-[#6B7280]  py-1 font-PopinsBold">
          Club crest : Malahide Golf Club crest
        </Text>
      </View>
    </View>
  );
}
