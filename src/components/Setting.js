import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Setting'
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello setting!!!</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  }
});
