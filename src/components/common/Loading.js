import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { startApp } from '../../App';
import { startApp as noAuth } from '../../navigation/noAuthFlow';

const Profile = () => {

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    const disptach = useDispatch();

    useEffect(() => {
        if(!isLoggedIn) {
            noAuth()
        } else {
            startApp()
        }
    })

    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text>
                    Loading
                </Text>
            </TouchableOpacity>
            <ActivityIndicator size={30} color='#900' />
        </SafeAreaView>
    )
}

export default Profile;