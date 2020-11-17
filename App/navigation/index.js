import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginContainer from '../components/Login/LoginContainer';
import Register from '../components/Login/Register';
import NotesListContainer from '../components/NotesList/NotesListContainer';
import NotesContainer from '../components/Notes/NotesContianer';
import { AboutStackNavigator } from './StackNavigation';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => (
    <NavigationContainer>
{/* 
        <Stack.Navigator headerMode={"none"} initialRouteName="LoginContainer">
            <Stack.Screen
                name="LoginContainer"
                component={LoginContainer}
            />
        </Stack.Navigator> */}
        {/* <AboutStackNavigator /> */}
        <DrawerNavigator />
    </NavigationContainer>
)

export default Navigation;

