import React, { useState } from 'react';
import { TouchableOpacity, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, TextInput, Button, Keyboard, ScrollView, Switch } from 'react-native';
import commonStyles, { stylesList } from '../../utils/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NotesContainer() {

    const [notesList, setNotesList] = useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={stylesList().container}
            enabled
            keyboardVerticalOffset={90}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={stylesList().scrollViewContainerStyle}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.15 }}>
                            <TextInput
                                placeholder="Write Here..."
                                numberOfLines={1}
                                scrollEnabled={true}
                                style={stylesList().notesTextInputStyle} />
                        </View>
                        <View style={{ flex: 0.7, padding: 10 }}>
                            
                            <Text style={commonStyles.mediumText}>Complete By</Text>
                            <TextInput style={commonStyles.textInputStyle} />
                            
                            <Text style={commonStyles.mediumText}>Priority</Text>
                            <TextInput style={commonStyles.textInputStyle} />

                            <Text style={[commonStyles.mediumText, commonStyles.marginVertical20]}>More Options</Text>

                            <View style={stylesList().subView}>
                                <Text>Save as alarm</Text>
                                <Switch 
                                thumbColor="#fff"
                                trackColor={commonStyles.trackColor} 
                                value={true}  />
                            </View>

                            <View style={stylesList().moreOptionsView}>
                                <Text>Show as notification</Text>
                                <Switch    
                                    thumbColor="#fff"
                                    trackColor={commonStyles.trackColor} 
                                    value={false}  
                                    />
                            </View>
                        </View>
                        
                        <View style={stylesList().notesListFooterView}>
                             <Icon name="md-checkmark-circle" style={stylesList().iconFontStyle} />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
}

