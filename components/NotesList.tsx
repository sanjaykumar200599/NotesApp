import React from "react";
import { FlatList, Text } from "react-native";

import NoteItem from "./DeleteNote";

type Note = {
  id: string;
  text: string;
};

type NotesListProps = {
  notes: Note[];
  deleteNote: (id: string) => void;
};

export default function NotesList({
  notes,
  deleteNote,
}: NotesListProps) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <Text className="text-center mt-14 text-base text-gray-500 font-medium">
          No notes added yet
        </Text>
      }
      renderItem={({ item }) => (
        <NoteItem
          id={item.id}
          text={item.text}
          deleteNote={deleteNote}
        />
      )}
    />
  );
}