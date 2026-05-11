import React from "react";
import { FlatList, Text } from "react-native";

import NoteItem from "./DeleteNote";
import { styles } from "../styles/style";

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
        <Text style={styles.emptyText}>
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