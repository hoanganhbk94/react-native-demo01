import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import LoginAPI from '../api/LoginAPI';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.textField}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.clickMe()}}>
          <Text style={styles.titleButton}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  clickMe() {
    const { navigate } = this.props.navigation;
    var email = this.state.email;
    var password = this.state.password;
    if (LoginAPI.loginWithEmailAndPassword(email, password)) {
      console.log('Login successfull');
      navigate( 'Home' );
    } else {
      console.log('Email or password is invalid');
      Alert.alert(
        'Warning',
        'Email or password is invalid',
        [],
        { cancelable: true }
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textField: {
    height: 40,
    backgroundColor: '#ebebe0',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    paddingLeft: 5,
    borderBottomColor: 'gray',
    borderRadius: 8
  },
  button: {
    height: 40,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099cc',
    borderRadius: 10
  },
  titleButton: {
    color: 'white',
    fontSize: 20
  }
});
