import {
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import { Note } from "../types/note";

type Props = {
  note: Note;
  onDelete: (id: string) => void;
};

export default function NoteCard({
  note,
  onDelete,
}: Props) {
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-3xl mb-4 border border-gray-200"
      onPress={() =>
        router.push({
          pathname: "/note-details",
          params: {
            title: note.title,
            content: note.content,
            image: note.image,
            createdAt: note.createdAt,
          },
        })
      }
    >

      {note.image && (
        <Image
          source={{ uri: note.image }}
          className="w-full h-48 rounded-2xl mb-4"
        />
      )}

      <Text className="text-xl font-bold text-gray-900">
        {note.title}
      </Text>

      <Text
        numberOfLines={2}
        className="text-gray-500 mt-2 leading-6"
      >
        {note.content}
      </Text>

      <Text className="text-gray-400 text-xs mt-3">
        {note.createdAt}
      </Text>

      <TouchableOpacity
        className="bg-red-100 mt-4 py-3 rounded-2xl"
        onPress={() => onDelete(note.id)}
      >
        <Text className="text-center text-red-700 font-bold">
          Delete
        </Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}
