import React, { useState } from 'react';
import {  View, Text } from 'react-native';
import commonStyles, { stylesList } from '../../utils/commonStyles';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default function NotesListContainer() {

    const [notesList, setNotesList] = useState([{task:"Read type Guidelines", status:"done"},{task:"Complete Responsive Design", status:"done"}, {task:"Bring Grocereis", status:"notdone"}]);

    return (
        <View style={commonStyles.flex1}>
            <View style={commonStyles.flexPont85}>
                <View style={stylesList().notesListHeaderView}>
                    <Text style={stylesList().notesListHeaderText}>Today's </Text>
                    <Text style={stylesList().notesListHeaderText}>list - </Text>
                </View>
                <FlatList
                    data={notesList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={stylesList().notesListViewStyle}>
                            <Icon name={item.status == "done" ? "ios-checkbox": "ios-checkbox-outline"} style={stylesList().notesListIconStyle} />
                            <Text>{item.task}</Text>
                        </View>
                    } />

            </View>

            <View style={stylesList().notesListFooterView}>
                <Icon name="md-add-circle" onPress={() => Actions.push("NotesContainer")} style={stylesList().iconFontStyle} />
            </View>

        </View>
    );
}

