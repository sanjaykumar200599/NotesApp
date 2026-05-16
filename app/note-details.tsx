import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function NoteDetailsScreen() {
  const { title, content, image, createdAt } =
    useLocalSearchParams();

  return (
    <View className="flex-1 bg-gray-100 pt-16 px-5">

      {image && (
        <Image
          source={{ uri: image as string }}
          className="w-full h-60 rounded-2xl mb-5"
        />
      )}

      <Text className="text-3xl font-extrabold text-gray-900">
        {title}
      </Text>

      <Text className="text-gray-500 mt-2 mb-5">
        {createdAt}
      </Text>

      <Text className="text-lg text-gray-700 leading-7">
        {content}
      </Text>
    </View>
  );
}