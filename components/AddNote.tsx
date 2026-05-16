import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

type AddNoteProps = {
  note: string;
  setNote: (text: string) => void;
  addNote: () => void;
};

export default function AddNote({
  note,
  setNote,
  addNote,
}: AddNoteProps) {
  return (
    <View className="flex-row items-center mb-4">
      <TextInput
        className="flex-1 bg-white px-4 py-3 rounded-2xl border border-gray-300 text-base mr-3"
        placeholder="Enter your note..."
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity
        className="bg-green-500 px-5 py-3 rounded-2xl"
        onPress={addNote}
      >
        <Text className="text-white font-bold">
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}