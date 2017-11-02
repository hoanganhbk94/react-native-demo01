/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import AppContainer from './src/components/AppContainer';
import Home from './src/components/Home';
import Login from './src/components/Login';
import CourseDetail from './src/components/CourseDetail';

const SimpleApp = StackNavigator({
  Login: {screen : Login},
  AppContainer: {screen : AppContainer}
});

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />;
  }
}
