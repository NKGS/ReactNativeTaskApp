import React from 'react';
import { TouchableOpacity, View, Text, TextInput, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import commonStyles, { stylesList } from '../../utils/commonStyles';
import { RegularText } from '../Basic/Basic';

export interface Props {
    register: any,
    onLoginClick: any,
    user: any
}

const Login: React.FC<Props> = ({ user, register, onLoginClick }) => {
    return (
        <View style={stylesList().subView}>
            <View style={stylesList().loginTextView}>
                <Text style={commonStyles.headerTextStyle}>LOGIN {user ? user.name : ''}</Text>
            </View>
            <View style={stylesList().loginFormView}>
                <Text style={commonStyles.mediumText}>Email</Text>
                <TextInput style={commonStyles.textInputStyle} />

                <View>
                    <Text style={commonStyles.mediumText}>Password</Text>
                </View>
                <TextInput style={commonStyles.textInputStyle} />

                <TouchableOpacity style={stylesList().loginBtnView} testID="login-btn" onPress={() => onLoginClick()} >
                    {/* <Text style={commonStyles.btnTextStyle}>Login</Text> */}
                    <RegularText>Login</RegularText>
                </TouchableOpacity>

                <View style={stylesList().newUserView}>
                    {/* <Text onPress={() => register()} style={commonStyles.userRegisterTextStyle}>New User? Register Here</Text> */}
                    <RegularText onPress={()=> register() }>New User? Register Here</RegularText>
                </View>
            </View>
        </View>
    )
}



export default Login;
