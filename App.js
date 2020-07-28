import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'


const navigator = createStackNavigator(
  {
   home: HomeScreen,
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      header: null,
    
    },
  }
);
export default createAppContainer(navigator);