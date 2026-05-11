import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { styles } from "../styles/style";

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
    <View style={styles.noteCard}>
      <Text style={styles.noteText}>{text}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteNote(id)}
      >
        <Text style={styles.deleteButtonText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}