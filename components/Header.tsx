import { View, Text, Image } from "react-native";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <View className="flex-row items-center mb-6">

      <Image
        source={require("../assets/images/icon.png")}
        className="w-14 h-14 rounded-2xl mr-3"
      />

      <View>
        <Text className="text-3xl font-extrabold text-gray-900">
          {title}
        </Text>

        {subtitle && (
          <Text className="text-gray-500 text-sm mt-1">
            {subtitle}
          </Text>
        )}
      </View>

    </View>
  );
}
