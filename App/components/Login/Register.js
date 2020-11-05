import React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import commonStyles, { stylesList } from '../../utils/commonStyles';

const Register = (({ login, onRegisterClick }) => {

    return (
        <View style={stylesList().subView}>
            <View style={stylesList().loginTextView}>
                <Text style={commonStyles.headerTextStyle}>REGISTER</Text>
            </View>
            <View style={stylesList().loginFormView}>
                <Text style={commonStyles.mediumText}>Email</Text>
                <TextInput style={commonStyles.textInputStyle} />

                <View>
                    <Text style={commonStyles.mediumText}>Password</Text>
                </View>
                <TextInput style={commonStyles.textInputStyle} />

                <View>
                    <Text style={commonStyles.mediumText}>Confirm Password</Text>
                </View>
                <TextInput style={commonStyles.textInputStyle} />

                <TouchableOpacity onPress={() => onRegisterClick()} style={commonStyles.loginBtnView}>
                    <Text style={commonStyles.btnTextStyle}>Register</Text>
                </TouchableOpacity>

                <View style={stylesList().newUserView}>
                    <Text style={commonStyles.mediumText}>By registering, you automatically</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={commonStyles.mediumText}>accept the</Text>
                        <Text style={commonStyles.userRegisterTextStyle}>Terms & Policies</Text>
                        <Text style={commonStyles.mediumText}>of</Text>
                    </View>
                    <Text style={commonStyles.mediumText}>candy app.</Text>
                </View>
                <View style={[stylesList().newUserView, { flex: 1, justifyContent: 'flex-end', marginVertical: 30 }]}>
                    <Text style={commonStyles.userRegisterTextStyle}  onPress={() => login()}>Have account? Log In</Text>
                </View>
            </View>
        </View>
    );
})

export default Register;

