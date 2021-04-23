import React, { useState, useEffect } from 'react';
import { Text, Platform, PermissionsAndroid, KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import { stylesList } from '../../utils/commonStyles';
import Login from './Login';
import Register from './Register';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/login-actions';
import { startApp } from '../../App';
// import { useNavigation } from '@react-navigation/native';
//emailId={emailId} password={password} setEmailId={(val) => setEmailId(val) } setPassword={(val) => setPassword(val)} 

const LoginContainer  = (props) => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.login.user);

    const [isLoginScreen, setIsLogin] = useState(true)  
    //const {navigate} = useNavigation();
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
      dispatch(loginAction('mk'))
      console.log('asas')
    }

    const onRegisterClick = () => {
        alert("User addedd successfullly!!")
    }
    
    useEffect(() => {
        if (user && user.name) {
            startApp();
        }
    })

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
                         <Login user={user} register={() => setIsLogin(false)} onLoginClick={() => onLoginClick()} /> : 
                         <Register login={() => setIsLogin(true)} onRegisterClick={() => onRegisterClick() } /> 
                        }
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

// function mapStateToProps(state) {
//     return {
//         books: state.Books
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         dispacthLogin: (payload)=> dispatch({type: 'LOGIN', payload})
//     }
// }

// export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainers)
export default LoginContainer;