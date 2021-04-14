import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import LoginContainers from './../components/Login/LoginContainer';
import { reduxProvider } from '../redux';

const Screens = new Map()

Screens.set('auth', LoginContainers);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key,() => gestureHandlerRootHOC(reduxProvider(C)),() => C);
});

export const startApp = () => {
    Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'auth',
                  options: {
                    topBar: {
                      visible: false
                    }
                  }
                },
              }
            ]
          }
        }
    });
};
