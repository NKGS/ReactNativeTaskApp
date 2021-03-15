import React, { useState, useEffect } from 'react';
import { Text, Platform, PermissionsAndroid, KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import { stylesList } from '../../utils/commonStyles';
import { StackHeaderProps } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import { connect } from '../../store';
import { useNavigation } from '@react-navigation/native';


//emailId={emailId} password={password} setEmailId={(val) => setEmailId(val) } setPassword={(val) => setPassword(val)} 

const LoginContainers  = (props) => {

    const [isLoginScreen, setIsLogin] = useState(true)  
    const {navigate} = useNavigation();
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
        //props.navigation.navigate('NotesListContainer')
        //navigate('NotesListContainer')
       // console.log('value - ',props)
       props.dispacthLogin("Nikita")
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
                         <Login register={() => setIsLogin(false)} onLoginClick={() => onLoginClick()} /> : 
                         <Register login={() => setIsLogin(true)} onRegisterClick={() => onRegisterClick() } /> 
                        }
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

function mapStateToProps(state) {
    return {
        books: state.Books
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispacthLogin: (payload)=> dispatch({type: 'LOGIN', payload})
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainers)