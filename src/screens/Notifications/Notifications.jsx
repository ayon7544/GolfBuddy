import { ScrollView, View, Image, TouchableOpacity, Text } from "react-native";

export default function Notifications({ navigation }) {
  // Example notifications array
  const notifications = [
    {
      id: 1,
      title: "A New Product is Added",
      description:
        "Product name, Brand name, Price $1070,000 is added in our collection!",
    },
    {
      id: 2,
      title: "Discount Alert",
      description: "New discount on shoes from Brand X up to 50%!",
    },
    {
      id: 3,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped successfully.",
    },
    {
      id: 4,
      title: "A New Product is Added",
      description:
        "Product name, Brand name, Price $1070,000 is added in our collection!",
    },
    {
      id: 5,
      title: "Discount Alert",
      description: "New discount on shoes from Brand X up to 50%!",
    },
    {
      id: 6,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped successfully.",
    },
    {
      id: 7,
      title: "A New Product is Added",
      description:
        "Product name, Brand name, Price $1070,000 is added in our collection!",
    },
    {
      id: 8,
      title: "Discount Alert",
      description: "New discount on shoes from Brand X up to 50%!",
    },
    {
      id: 9,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped successfully.",
    },
    {
      id: 10,
      title: "A New Product is Added",
      description:
        "Product name, Brand name, Price $1070,000 is added in our collection!",
    },
    {
      id: 11,
      title: "Discount Alert",
      description: "New discount on shoes from Brand X up to 50%!",
    },
    {
      id: 12,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped successfully.",
    },
    // Add more notifications here
  ];

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
          <Text className="text-white text-xl ml-2">Notifications</Text>
        </View>
      </View>

      {/* Notifications List */}
      {notifications.map((item) => (
        <TouchableOpacity key={item.id} className="mx-4 my-3">
          <View className="border-b border-[#D5D5D5] pb-3">
            <Text className="text-[#6B7280] font-PopinsBold mb-1">
              {item.title}
            </Text>
            <Text className="text-[#6B7280] font-PopinsRegular">
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
