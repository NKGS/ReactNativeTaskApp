import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
import { AboutStackNavigator, LoginNavigator } from './StackNavigation';

export interface Props {

}

const Navigation: React.FC<Props> = (props) => {
    return (
        <NavigationContainer>
            <LoginNavigator />
        </NavigationContainer>
    )
}

export default Navigation;

