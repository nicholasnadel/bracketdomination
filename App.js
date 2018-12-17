import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen.js';
import CategoriesScreen from './Screens/CategoriesScreen.js';
import CategoryScreen from './Screens/CategoryScreen.js';


const NavStack = createStackNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen,
  Category: CategoryScreen,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App = createAppContainer(NavStack);

export default App;
