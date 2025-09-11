import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
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
          <Text className="text-white text-xl ml-2">Edit Profile</Text>
        </View>
      </View>

      {/* Profile Image */}
      <View className="bg-[#34D399] h-[13.79%] w-full relative">
        <View className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            source={require("./assets/image.jpg")}
            className="w-24 h-24 rounded-full border-2 border-[#ffffff]"
          />
          <TouchableOpacity className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#949393CF] w-10 h-10 rounded-full flex items-center justify-center">
            <Image
              source={require("./assets/camera.png")}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Fields */}
      <View className="px-4 pt-20">
        {/* User Name */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">User Name</Text>
          <TextInput
            placeholder="Enter your name"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Email */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>
        <View className="w-full mb-5 relative">
          <Text className="font-PopinsRegular mb-2">BIO</Text>

          {/* Lines */}
          <View className="absolute inset-0 justify-between">
            {[...Array(8)].map((_, i) => (
              <View
                key={i}
                style={{ height: "12.5%" }} // Divide the container into equal lines
              />
            ))}
          </View>

          {/* TextInput */}
          <TextInput
            placeholder="Write a short bio"
            multiline
            className="w-full h-32 border border-[#D5D5D5] rounded-lg px-3 py-2 text-base text-black font-PopinsRegular bg-transparent"
            style={{ textAlignVertical: "top" }}
          />
        </View>

        {/* Handicap */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Handicap</Text>
          <TextInput
            placeholder="Enter your handicap"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Playing Style */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Playing Style</Text>
          <TextInput
            placeholder="Enter your playing style"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Home Club */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Home Club</Text>
          <TextInput
            placeholder="Enter your home club"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Club Crest */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Club Crest</Text>
          <TextInput
            placeholder="Enter your club crest"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Preferred Time */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Preferred Time</Text>
          <TextInput
            placeholder="Enter your preferred time"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>
        <View className="flex-row justify-center w-full mb-5 px-4 py-10 ">
          <TouchableOpacity
            className="bg-[#059669] w-[44%] py-3 rounded-lg mr-2"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text className="text-white font-PopinsRegular text-center text-2xl">
              Save
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#960C05] w-[44%] py-3 rounded-lg ml-2"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text className="text-white font-PopinsRegular text-center text-2xl">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
