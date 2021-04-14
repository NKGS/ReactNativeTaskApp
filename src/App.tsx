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
import { LoginContainer } from './components/Login/LoginContainer';
import NotesContainer from './components/Notes/NotesContianer';
import About from './components/About/About';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { reduxProvider } from './redux';
import { NotesListContainer } from './components/NotesList/NotesListContainer';

const Screens = new Map();

Screens.set('about', About);
Screens.set('notes', NotesContainer);
Screens.set('notelist', NotesListContainer);
Screens.set('auth', LoginContainer);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key,() => gestureHandlerRootHOC(reduxProvider(C)),() => C);
});

export const startApp = () => {
  
      Navigation.setRoot({
          root: {
              sideMenu: {
                  left: {
                      component: {
                          name: 'notelist'
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
                                  // options: {
                                  //     bottomTab: {
                                  //         text: 'Redux App',
                                  //         icon: reactIcon,
                                  //     },
                                  // },
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
                                  // options: {
                                  //     bottomTab: {
                                  //         text: 'Admob',
                                  //         icon: googleIcon,
                                  //     },
                                  // },
                              },
                          }, {
                              stack: {
                                  children: [{
                                      component: {
                                          name: 'noteslist',
                                          options: {
                                              topBar: {
                                                  visible: true,
                                                  title: {
                                                      text: 'NotesList',
                                                  },
                                              },
                                          },
                                      },
                                  }],
                                  // options: {
                                  //     bottomTab: {
                                  //         text: 'Maps',
                                  //         icon: mapsIcon,
                                  //     },
                                  // },
                              },
                          }],
                      },
                  },
                  options: {
                      bottomTab: {
                          text: 'SideMenu',
                          testID: 'SIDE_MENU_TAB'
                      }
                  }
              }
          }
      });
};
