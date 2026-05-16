import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

type Props = {
  openCamera: () => void;
  pickImage: () => void;
};

export default function AddImageButtons({
  openCamera,
  pickImage,
}: Props) {
  return (
    <View className="flex-row justify-between mb-5">

      <TouchableOpacity
        className="bg-green-500 flex-1 py-4 rounded-2xl mr-2"
        onPress={openCamera}
      >
        <Text className="text-white text-center font-bold">
          Camera
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-500 flex-1 py-4 rounded-2xl ml-2"
        onPress={pickImage}
      >
        <Text className="text-white text-center font-bold">
          Gallery
        </Text>
      </TouchableOpacity>

    </View>
  );
}