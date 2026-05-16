import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

type NoteItemProps = {
  id: string;
  text: string;
  deleteNote: (id: string) => void;
};

export default function NoteItem({
  id,
  text,
  deleteNote,
}: NoteItemProps) {
  return (
    <View className="bg-white p-4 rounded-2xl mb-3 flex-row items-start justify-between border border-gray-200">
      
      <Text className="flex-1 text-base text-gray-800 mr-3 leading-6">
        {text}
      </Text>

      <TouchableOpacity
        className="bg-red-100 px-3 py-2 rounded-xl border border-red-200"
        onPress={() => deleteNote(id)}
      >
        <Text className="text-red-700 font-bold">
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}