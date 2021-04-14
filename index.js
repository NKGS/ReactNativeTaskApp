import { Navigation } from 'react-native-navigation';

import { startApp } from './src/navigation/authFlow';

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});