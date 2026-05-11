import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import { styles } from "../styles/style";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your note..."
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={addNote}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}