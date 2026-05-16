import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { router, useFocusEffect } from "expo-router";

import { Note } from "../types/note";
import {
  getNotes,
  saveNotes,
} from "../storage/noteStorage";

import NoteCard from "../components/NoteCard";
import Header from "../components/Header";

export default function HomeScreen() {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    const storedNotes = await getNotes();
    setNotes(storedNotes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadNotes();
    }, [])
  );

  const deleteNote = async (id: string) => {
    const filteredNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(filteredNotes);
    await saveNotes(filteredNotes);
  };

  return (
    <View className="flex-1 bg-[#f5f7fb] pt-16 px-5">
      <View className="mb-6">
        <Header
          title="SnapNote"
          subtitle="Capture Thoughts Instantly"
        />
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onDelete={deleteNote}
          />
        )}
        ListEmptyComponent={
          <Text className="text-center mt-24 text-gray-500 text-base">
            No notes added yet
          </Text>
        }
      />

      <TouchableOpacity
        className="absolute bottom-8 right-6 w-14 h-14 rounded-full bg-[#10abb3] items-center justify-center"
        onPress={() => router.push("/create-note")}
      >
        <Text className="text-white text-3xl leading-8 font-bold">
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
