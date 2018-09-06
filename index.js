/** @format */

import {AppRegistry} from 'react-native';
import AppContainer from './src/containers/AppContainer';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => AppContainer);
