import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const SideBar = () => {

    const pushScreen = (compId) => {
        Navigation.push('Test', {
            component: {
              name: compId, // Push the screen registered with the 'Settings' key
              options: {
                  topBar: {
                      visible: false
                  }
              }
            }
          });
    }

    return (
        <View style={{flex:1, borderWidth:2, backgroundColor:'white'}}>
            <TouchableOpacity onPress={() => pushScreen('screen1')}>
                <Text>Screen 1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pushScreen('screen2')}>
                <Text>Screen 2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pushScreen('screen3')}>
                <Text>Screen 3</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SideBar;