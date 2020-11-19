import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NotesListContainer } from '../components/NotesList/NotesListContainer';
import NotesContainer from '../components/Notes/NotesContianer';

import {FilteredNotesList} from "../components/NotesList/FilteredNotesList";
import About from "../components/About/About";
import { LoginContainer } from "../components/Login/LoginContainer";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="NotesListContainer" >
      <Stack.Screen name="NotesListContainer" component={NotesListContainer} />
      <Stack.Screen name="NotesContainer" component={NotesContainer} />
    </Stack.Navigator>
  );
}

const LoginNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="LoginContainer"  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginContainer" component={LoginContainer} />
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

export { MainStackNavigator, AboutStackNavigator, FilteredStackNavigator, LoginNavigator };