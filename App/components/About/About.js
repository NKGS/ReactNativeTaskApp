import React from 'react';
import { View, Text } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={{flex:1, alignItems:'center'}}>
            <Text>This is the about screen</Text>
        </View>
    );
}