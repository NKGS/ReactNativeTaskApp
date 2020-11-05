import React from 'react';
import { TouchableOpacity, View, Text, TextInput, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import commonStyles, { stylesList } from '../../utils/commonStyles';

const Login = (({ register, onLoginClick }) => {
    return (
        <View style={stylesList().subView}>
            <View style={stylesList().loginTextView}>
                <Text style={commonStyles.headerTextStyle}>LOGIN</Text>
            </View>
            <View style={stylesList().loginFormView}>
                <Text style={commonStyles.mediumText}>Email</Text>
                <TextInput style={commonStyles.textInputStyle} />

                <View>
                    <Text style={commonStyles.mediumText}>Password</Text>
                </View>
                <TextInput style={commonStyles.textInputStyle} />

                <TouchableOpacity onPress={() => onLoginClick()} style={commonStyles.loginBtnView}>
                    <Text style={commonStyles.btnTextStyle}>Login</Text>
                </TouchableOpacity>
                <View style={stylesList().newUserView}>
                        <Text  onPress={() => register()} style={commonStyles.userRegisterTextStyle}>New User? Register Here</Text>
                </View>
            </View>
        </View>
    );
})


export default Login;
