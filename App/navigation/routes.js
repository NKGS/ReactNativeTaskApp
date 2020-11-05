import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import LoginContainer from '../components/Login/LoginContainer';
import NotesListContainer from '../components/NotesList/NotesListContainer';
import NotesContainer from '../components/Notes/NotesContianer';

const styles = StyleSheet.create({
    navigationBarTitleStyle: {
        fontSize:20, textTransform:'uppercase',flex:1, textAlign:'center'
    }
});

const getSceneStyle = () => ({
    backgroundColor: '#white'
});

const Routes = () => (
    <Router getSceneStyle={getSceneStyle}>

        <Scene key="root">  
            <Scene
                key="LoginContainer"
                component={LoginContainer}
                hideNavBar={true}
                gesturesEnabled={false}
            />
            <Scene
                key="NotesContainer"
                component={NotesContainer}
                hideNavBar={false}
                title="NEW TASK"
                titleStyle={styles.navigationBarTitleStyle}
                gesturesEnabled={false}
                back={false}
                renderBackButton={()=>(null)}
                renderLeftButton={()=>(null)} 
                navigationBarStyle={{ backgroundColor: '#F8CA31'}} 
            />
            <Scene
                key="NotesListContainer"
                renderBackButton={()=>(null)}
                renderLeftButton={()=>(null)} 
                component={NotesListContainer}
                hideNavBar={false}
                title="NOTES"
                titleStyle={styles.navigationBarTitleStyle}
                gesturesEnabled={false}
                back={false}
                navigationBarStyle={{ backgroundColor: '#F8CA31'}} 
            />
          
            {/* <Scene
                key="Home"
                component={Home}
                hideNavBar={true}
                gesturesEnabled={false}
            /> */}
        </Scene>

    </Router>
);

export default Routes;