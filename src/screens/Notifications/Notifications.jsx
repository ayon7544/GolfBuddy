import { ScrollView, View, Image, TouchableOpacity, Text } from "react-native";

export default function Notifications( {navigation}) {
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
    </ScrollView>
  );
}
