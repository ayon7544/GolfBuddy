import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View className="flex-1">
      <View className="bg-[#059669] h-[13.17%] w-full justify-end">
        <View className="flex-row items-center justify-start pl-4 h-20 bg-[#059669]">
          <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
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
    </View>
  );
}
