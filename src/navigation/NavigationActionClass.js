// import {Actions} from "react-native-router-flux";
// import * as types from '../actions/actionTypes';
import { Navigation } from "react-native-navigation";

class NavigationActionsClass {

    // setNavigator(navigator) {
    //   this.navigator = navigator
    // }

    push = (params) =>{
        Navigation.push('Test', {
            component: {
              name: params.screen // Push the screen registered with the 'Settings' key
            }
          });
    }

    // pushWithProps = (params, props) =>{
    //   //types.mountedComponents.push(params.screen);
    //   Actions.push(params.screen, props);
    // }

    // jumpWithProps = (params, props) =>{
    //   //types.mountedComponents.push(params.screen);
    //   Actions.jump(params.screen, props);
    // }

    // pop = () =>{
    //   Actions.pop();
    // }

    // popToScreen = (params) => {
    //   let routeStack = Actions.state.routes
    //   let routeNameToPopTo = routeStack.find(({routeName})=>routeName=== params.screen)
    //   if(routeNameToPopTo)
    //     Actions.popTo(params.screen)
    //   else
    //     Actions.push(params.screen)
    // }

    // resetTo = (params) =>{
    //   Actions.popTo(params.screen);
    // }

    // resetToScreen = (screenName) => {
    //   Actions.reset(screenName)
    // }

    // toggleDrawer = (params) => this.navigator && this.navigator.toggleDrawer(params)

    // closeDrawer = () => {
    //   //alert('called')
    //   Actions.drawerClose()
    // }
}

export let NavigationActions = new NavigationActionsClass();