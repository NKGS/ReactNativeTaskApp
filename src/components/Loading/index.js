import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist';
import { useSelector, useDispatch } from 'react-redux';
import { startApp } from '../../App';
import { startApp as noAuth } from '../../navigation/noAuthFlow';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/login-actions';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const Profile = () => {

//     // Selectors
//     const login = useSelector(s => s.login);
//     console.log(login);

//     // Actions
//     const dispatch = useDispatch();

//     // ComponentDidMount
//     useEffect(() => {
//         if (!login.user) {
//             noAuth();
//         } else {
//             startApp();
//         }
//     })

//     useNavigationComponentDidAppear((e) => {
//         console.log(e);
//         console.log('ComponentDidAppear');
//     });

//     // LottiFile loading animation
//     return (
//         <SafeAreaView style={styles.container}>
//             <TouchableOpacity onPress={() => console.log('test')}>
//                 <Text style={{ color: '#222', fontWeight: 'bold' }}>
//                     Loading
//                 </Text>
//             </TouchableOpacity>
//             <ActivityIndicator size={30} color="#900" />
//         </SafeAreaView>
//     )
// }

// export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});

export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
        if (!this.props.isLoggedIn) {
            noAuth();
        } else {
            startApp();
        }
    }

    render() {
        console.log('calleeeddd')
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            {/* <SafeAreaView style={styles.container}> */}
                <TouchableOpacity onPress={() => console.log('test')}>
                    <Text style={{ color: '#222', fontWeight: 'bold' }}>
                        Loading {this.props.isLoggedIn ? this.props.user.name : ''}
                </Text>
                </TouchableOpacity>
                <ActivityIndicator size={30} color="#900" />
            {/* </SafeAreaView> */}
            </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}

const mapStateToProps = (state) => {
    const {user, isLoggedIn} = state.login;
    return {user, isLoggedIn}
}

const mapDispatchToProps = dispatch => {
    return {
        loginAction: (data) => loginAction(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)