import React, { useState } from 'react';
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import { stylesList } from '../../utils/commonStyles';

import { StackHeaderProps } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
//emailId={emailId} password={password} setEmailId={(val) => setEmailId(val) } setPassword={(val) => setPassword(val)} 
export  const LoginContainer  = ({
    scene,
    previous,
    navigation,
  }: StackHeaderProps) => {

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
                        {/* {
                         isLoginScreen ? 
                         <Login register={() => setIsLogin(false)} onLoginClick={() => onLoginClick()} /> : 
                         <Register login={() => setIsLogin(true)} onRegisterClick={() => onRegisterClick() } /> 
                        } */}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

