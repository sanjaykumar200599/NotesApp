import AsyncStorage from "@react-native-async-storage/async-storage";
import { Note } from "../types/note";

const NOTES_KEY = "snap_notes";

export const saveNotes = async (notes: Note[]) => {
  try {
    await AsyncStorage.setItem(
      NOTES_KEY,
      JSON.stringify(notes)
    );
  } catch (error) {
    console.log(error);
  }
};

export const getNotes = async (): Promise<Note[]> => {
  try {
    const notes = await AsyncStorage.getItem(NOTES_KEY);

    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};