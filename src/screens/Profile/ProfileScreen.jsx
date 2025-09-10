import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

const ProfileScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#10B981" />

      <View className="flex-1">
        {/* Header Section */}
        <View className="bg-emerald-500 px-4 pt-12 pb-6">
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-4">
              <Text className="text-white text-xl">←</Text>
            </TouchableOpacity>
            <Text className="text-white text-lg font-medium">Profile</Text>
          </View>
        </View>

        {/* Gradient Background Section */}
        <View className="bg-gradient-to-b from-emerald-400 via-emerald-300 to-white h-40 relative">
          {/* Profile Image Container - Positioned absolutely */}
          <View className="absolute left-1/2 transform -translate-x-1/2 top-8">
            <View className="w-28 h-28 rounded-full bg-white p-1 shadow-lg">
              <View className="w-full h-full rounded-full overflow-hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                  }}
                  className="w-full h-full"
                  style={{ resizeMode: "cover" }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View className="flex-1 bg-gray-50 px-6 -mt-6">
          {/* Name - positioned to account for profile image */}
          <View className="pt-16 pb-4">
            <Text className="text-2xl font-bold text-center text-gray-900 mb-4">
              Jim Stewart
            </Text>

            {/* Bio */}
            <Text className="text-gray-600 text-center text-sm leading-5 px-2">
              A dad with young kids and an avid golfer who only started playing
              a few years ago. Loves early tee times and steadily working his
              way down the handicap
            </Text>
          </View>

          {/* Stats Row */}
          <View className="flex-row items-center justify-center py-4 mb-6">
            <Text className="text-gray-700 font-medium">Handicap: 10</Text>
            <View className="w-px h-4 bg-gray-400 mx-4"></View>
            <Text className="text-gray-700 font-medium">
              Playing Style: Competitive
            </Text>
          </View>

          {/* Profile Information */}
          <View className="space-y-3">
            {/* Home Club */}
            <View>
              <Text className="text-gray-500 text-sm mb-1">
                Home club:
                <Text className="text-gray-900 font-medium">
                  {" "}
                  Malahide Golf Club
                </Text>
              </Text>
            </View>

            {/* Preferred Times */}
            <View>
              <Text className="text-gray-500 text-sm mb-1">
                Preferred times:
                <Text className="text-gray-900 font-medium">
                  {" "}
                  Weekend mornings
                </Text>
              </Text>
            </View>

            {/* Club Crest */}
            <View>
              <Text className="text-gray-500 text-sm mb-1">
                Club crest:
                <Text className="text-gray-900 font-medium">
                  {" "}
                  Malahide Golf Club crest
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
