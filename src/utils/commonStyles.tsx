import { StyleSheet } from 'react-native';
export default {
    headerTextStyle: { 
        fontSize: 20, color: '#3B3B3B'
    },
    mediumText: { 
        fontSize: 12, color: '#3B3B3B' 
    },
    textInputStyle: { 
        borderWidth: 1, borderRadius: 8, marginVertical: 8, borderColor: '#F8CA31' 
    },
    loginBtnView: { 
        flex:1, alignItems: 'center', justifyContent:'center',
        height: 58, maxHeight: 50, marginVertical: 18, borderRadius:8, backgroundColor: '#F8CA31', borderWidth:2
    },
    btnTextStyle: { 
        fontSize: 20, color: 'white'
    },
    userRegisterTextStyle:{ 
        fontSize: 13, color: '#3B3B3B',  borderBottomWidth: 1 
    },
    navigationBarTitleStyle: {
        // centering for Android
       flex: 1,
       textAlign: 'center'
   },
   flexPont85: { flex: 0.85 },
   flex1: { flex: 1 },
   marginVertical20: { marginVertical: 20 },
   trackColor: {true: '#F8CA31', false: '#efefef'},
   alignCenterAll: {flex:1, justifyContent:'center', alignItems:'center'}
}   

export const stylesList = () => StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column',justifyContent: 'center'
    },
    scrollViewContainerStyle: { 
        flexGrow: 1, justifyContent: 'center' 
    },
    mainView: { 
        alignItems: 'center', flex: 1 
    },
    subView: { 
        justifyContent: "center", flex: 1, width: '80%' 
    },
    loginTextView: { 
        flex: 0.2, justifyContent: 'flex-end', marginBottom: 30, alignItems: 'center' 
    },
    loginFormView: { 
        flex: 0.8
    },
    newUserView: {  
        alignItems: 'center', marginTop:10 
    },
    notesListIconStyle: {fontSize:25, marginHorizontal:10, color:'#F8CA31'},
    notesListViewStyle: {flexDirection:'row', alignItems:'center', padding:10},
    notesListFooterView: {
        flex: 0.15, alignItems: 'center'
    },
    notesListHeaderText: {fontSize:28, fontWeight:'bold'},
    iconFontStyle: {color:'#F8CA31', fontSize:60 },
    notesListHeaderView: {flex:0.3, backgroundColor:'#F8CA31', padding:20, marginBottom:10 },
    notesTextInputStyle: { backgroundColor: '#F8CA31', flex: 1, fontSize: 20 },
    moreOptionsView: { flexDirection: 'row', marginVertical: 10, justifyContent:'space-between' }
});


