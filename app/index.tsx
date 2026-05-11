import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
} from "react-native";

import AddNote from "../components/AddNote";
import NotesList from "../components/NotesList";
import { styles } from "../styles/style";

type Note = {
  id: string;
  text: string;
};

export default function HomeScreen() {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    if (note.trim() === "") {
      Alert.alert("Empty Note", "Please enter a note");
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      text: note,
    };

    setNotes([...notes, newNote]);
    setNote("");
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(
      (item) => item.id !== id
    );

    setNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>

      <AddNote
        note={note}
        setNote={setNote}
        addNote={addNote}
      />

      <NotesList
        notes={notes}
        deleteNote={deleteNote}
      />
    </View>
  );
}
