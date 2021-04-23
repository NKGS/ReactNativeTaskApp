import { Navigation } from "react-native-navigation";

class NavigationActionsClass {
  push = (params) => {
    Navigation.push('Test', {
      component: {
        name: params.screen, // Push the screen registered with the 'Settings' key
        options: {
          topBar: {
            visible: false
          }
        }
      },
    });
  }
}

export let NavigationActions = new NavigationActionsClass();