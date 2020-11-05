import React, { useState } from 'react';
import {  KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import { stylesList } from '../../utils/commonStyles';
import Login from './Login';
import Register from './Register';
import { Actions } from 'react-native-router-flux';

export default function LoginContainer() {

    const [isLoginScreen, setIsLogin] = useState(true)
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');


    onLoginClick = () => {
        Actions.push("NotesListContainer")
    }

    onRegisterClick = () => {
        alert("User addedd successfullly!!")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={stylesList().container}
            enabled
            keyboardVerticalOffset={30}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={stylesList().scrollViewContainerStyle}>
                    <View style={stylesList().mainView}>
                        {
                         isLoginScreen ? 
                         <Login register={() => setIsLogin(false)} onLoginClick={() => this.onLoginClick()} /> : 
                         <Register login={() => setIsLogin(true)} onRegisterClick={() => this.onRegisterClick() } /> 
                        }
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

