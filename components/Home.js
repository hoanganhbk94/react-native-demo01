import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text>
          Hello world!!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
