import { View, Text, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-5">
      <Image
        source={require("../assets/images/profile.jpg")}
        className="w-32 h-32 rounded-full mb-5"
        style={{ width: 128, height: 128, borderRadius: 64, marginBottom: 20 }}
      />

      <Text className="text-3xl font-extrabold">
        Sanjay Kumar
      </Text>

      <Text className="text-gray-500 mt-2">
        React Native Developer
      </Text>

      <Text className="text-gray-400 mt-6">
        SnapNote v1.0.0
      </Text>
    </View>
  );
}
