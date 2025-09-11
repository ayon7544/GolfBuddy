import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1">
      <View className="bg-[#059669] h-[13.17%] w-full justify-end">
        <View className="flex-row items-center justify-start pl-4 h-20 bg-[#059669]">
          <TouchableOpacity className="p-2">
            <Image
              source={require("./assets/backArrow.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-white text-xl  ml-2">Profile</Text>
        </View>
      </View>
      <View className="bg-[#34D399] h-[13.79%] w-full relative">
        <View className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            source={require("./assets/image.jpg")}
            className="w-24 h-24 rounded-full border-2 border-[#ffffff]"
          />
          <TouchableOpacity className="absolute bottom-0 right-0 bg-[#949393CF] w-10 h-10 rounded-full flex items-center justify-center">
            <Image source={require("./assets/edit.png")} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>

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
