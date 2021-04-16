/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useReducer, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import LoginContainer from './components/Login/LoginContainer';
import NotesContainer from './components/Notes/NotesContianer';
import About from './components/About/About';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { reduxProvider } from './redux/index';
import NotesListContainer from './components/NotesList/NotesListContainer';
import SideBar from './components/Sidebar';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

const Screens = new Map();

Screens.set('screen1', Screen1);
Screens.set('screen2', Screen2);
Screens.set('screen3', Screen3);
Screens.set('about', About);
Screens.set('notes', NotesContainer);
Screens.set('notelist', NotesListContainer);
Screens.set('auth', LoginContainer);
Screens.set('sidebar', SideBar)

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => gestureHandlerRootHOC(reduxProvider(C)), () => C);
});

export const startApp = () => {

    Navigation.setRoot({
        root: {
            sideMenu: {
                id: 'CenterStack',
                left: {
                    component: {
                        id: 'sideBar',
                        name: 'sidebar'
                    }
                },
                center: {
                    bottomTabs: {
                        options: {
                            bottomTabs: {
                                titleDisplayMode: 'alwaysShow',
                            },
                        },
                        children: [{
                            stack: {
                                id:'Test',
                                children: [{
                                    component: {
                                        name: 'notes',
                                        options: {
                                            topBar: {
                                                visible: true,
                                                title: {
                                                    text: 'Notes',
                                                },
                                            },
                                        },
                                    },
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'Notes',
                                        //icon: reactIcon,
                                    },
                                },
                            },
                        }, {
                            stack: {
                                children: [{
                                    component: {
                                        name: 'about',
                                        options: {
                                            topBar: {
                                                visible: true,
                                                title: {
                                                    text: 'About',
                                                },
                                            },
                                        },
                                    },
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'About',
                                        //icon: googleIcon,
                                    },
                                },
                            },
                        }],
                    },
                },
            }
        }
    });
};
