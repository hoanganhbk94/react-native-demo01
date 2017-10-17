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

const SimpleApp = StackNavigator({
  Login: { screen : Login },
  Home: { screen: Home }
});

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />;
  }
}
