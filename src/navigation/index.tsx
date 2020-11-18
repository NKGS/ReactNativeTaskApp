import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
import { AboutStackNavigator } from './StackNavigation';

export interface Props {

}

const Navigation: React.FC<Props> = (props) => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default Navigation;

