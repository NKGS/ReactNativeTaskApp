import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
import { AboutStackNavigator, LoginNavigator } from './StackNavigation';

export interface Props {
    isLoggedIn: boolean
}

const Navigation: React.FC<Props> = (props) => {
    console.log('props - ',props)
    return (
        <NavigationContainer>
            {
                props.isLoggedIn ? 
                <DrawerNavigator /> :
                <LoginNavigator />
            }
        </NavigationContainer>
    )
}

export default Navigation;

