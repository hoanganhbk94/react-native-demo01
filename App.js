/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login';
import CourseDetail from './components/CourseDetail';

const SimpleApp = StackNavigator({
  Login: { screen : Login },
  Home: { screen: Home },
  CourseDetail: { screen : CourseDetail }
});

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />;
  }
}
