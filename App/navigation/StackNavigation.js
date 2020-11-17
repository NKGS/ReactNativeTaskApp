import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesListContainer from '../components/NotesList/NotesListContainer';
import NotesContainer from '../components/Notes/NotesContianer';
import About from "../components/About/About";
import FilteredNotesList from "../components/NotesList/FilteredNotesList";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="NotesListContainer" >
      <Stack.Screen name="NotesListContainer" component={NotesListContainer} />
      <Stack.Screen name="NotesContainer" component={NotesContainer} />
    </Stack.Navigator>
  );
}

const FilteredStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FilteredNotesList" component={FilteredNotesList} />
        </Stack.Navigator>
    )
}

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, AboutStackNavigator , FilteredStackNavigator};