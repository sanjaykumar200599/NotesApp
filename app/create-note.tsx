import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { router, useFocusEffect } from "expo-router";

import { Note } from "../types/note";
import { getNotes, saveNotes } from "../storage/noteStorage";
import AddImageButtons from "../components/AddImageButtons";

export default function CreateNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImage("");
  };

  useFocusEffect(
    React.useCallback(() => {
      resetForm();
    }, [])
  );

  const pickImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Camera Permission Needed",
        "Please allow camera access to take a photo."
      );
      return;
    }

    const result =
      await ImagePicker.launchCameraAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage("");
  };

  const saveNote = async () => {
    if (!title || !content) {
      Alert.alert("Please fill all fields");
      return;
    }

    const existingNotes = await getNotes();

    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      image,
      createdAt: new Date().toLocaleString(),
    };

    const updatedNotes = [
      newNote,
      ...existingNotes,
    ];

    await saveNotes(updatedNotes);

    resetForm();
    router.replace("/");
  };

  return (
    <View className="flex-1 bg-gray-100 pt-16 px-5">

      <Text className="text-3xl font-extrabold mb-5">
        Create Note
      </Text>

      <TextInput
        placeholder="Title"
        placeholderTextColor="#6b7280"
        value={title}
        onChangeText={setTitle}
        className="bg-white p-4 rounded-2xl mb-4"
      />

      <TextInput
        placeholder="Content"
        placeholderTextColor="#6b7280"
        value={content}
        onChangeText={setContent}
        multiline
        className="bg-white p-4 rounded-2xl h-36 mb-4"
      />

      <AddImageButtons
        openCamera={openCamera}
        pickImage={pickImage}
      />

      {image && (
        <View className="mb-5">
          <Image
            source={{ uri: image }}
            className="w-full h-52 rounded-2xl mb-3"
          />

          <TouchableOpacity
            className="bg-red-100 py-3 rounded-2xl border border-red-200"
            onPress={removeImage}
          >
            <Text className="text-center text-red-700 font-bold">
              Remove Image
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        className="bg-[#105fb3] p-4 rounded-2xl"
        onPress={saveNote}
      >
        <Text className="text-white text-center font-bold">
          Save Note
        </Text>
      </TouchableOpacity>
    </View>
  );
}
