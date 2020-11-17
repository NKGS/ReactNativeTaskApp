import React, { useState } from 'react';
import {  KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import { stylesList } from '../../utils/commonStyles';
import Login from './Login';
import Register from './Register';

export default function LoginContainer({ navigation }) {

    const [isLoginScreen, setIsLogin] = useState(true)
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
        navigation.navigate('NotesListContainer')
    }

    const onRegisterClick = () => {
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
                         <Login register={() => setIsLogin(false)} onLoginClick={() => onLoginClick()} emailId={emailId} password={password} setEmailId={(val) => setEmailId(val) } setPassword={(val) => setPassword(val)} /> : 
                         <Register login={() => setIsLogin(true)} onRegisterClick={() => onRegisterClick() } /> 
                        }
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

