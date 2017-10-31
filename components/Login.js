import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Dimensions,
  ActivityIndicatorIOS
} from 'react-native';
import { Buffer } from 'buffer';
import LoginAPI from '../api/LoginAPI';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Github'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showProgress: true
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'icon_github'}}
          style={styles.logo}/>
        <TextInput
          style={styles.textField}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.textField}
          placeholder="Password"
          secureTextEntry='true'
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.login()}}>
          <Text style={styles.titleButton}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  login() {
    const { navigate } = this.props.navigation;
    var email = this.state.email;
    var password = this.state.password;
    // if (LoginAPI.loginWithEmailAndPassword(email, password)) {
    //   console.log('Login successfull');
    //   navigate( 'Home' );
    // } else {
    //   console.log('Email or password is invalid');
    //   Alert.alert(
    //     'Warning',
    //     'Email or password is invalid',
    //     [],
    //     { cancelable: true }
    //   );
    // }
    var b = new Buffer(this.state.email + ':' + this.state.password);
    var encodeAuth = b.toString('base64');
    //
    // fetch('https://api.github.com/user', {
    //   headers: {
    //     'Authorization' : 'Basic' + encodeAuth
    //   }
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((results)=> {
    //   console.log(results);
    // })
    LoginAPI.postData('https://api.github.com/user', email, password);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  textField: {
    backgroundColor: '#ebebe0',
    height: 40,
    width: Dimensions.get('window').width - 40,
    marginTop: 20,
    borderBottomWidth: 1,
    paddingLeft: 5,
    borderBottomColor: 'gray',
    borderRadius: 8
  },
  button: {
    height: 40,
    marginTop: 30,
    width: Dimensions.get('window').width - 40,
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

// <ActivityIndicatorIOS
//   animating={this.state.showProgress}
//   style={{height: 80}}
//   size="large"
// />
