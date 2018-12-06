import React from 'react';
import { createStackNavigator } from 'react-navigation';
import BackTestScreen from '../screens/BackTestScreen';

import MainTabNavigator from './MainTabNavigator';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  BackTest: BackTestScreen
});