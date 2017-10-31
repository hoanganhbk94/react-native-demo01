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
  ActivityIndicator
} from 'react-native';
import {Buffer} from 'buffer';
import LoginAPI from '../api/LoginAPI';
import AlertManager from '../common/AlertManager';
import Validation from '../common/Validation';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showProgress: false
    };
  }

  static navigationOptions = {
    title: 'Github'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'icon_github'}}
          style={styles.logo}
        />
        <TextInput
          style={styles.textField}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.textField}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.login()}}>
          <Text style={styles.titleButton}>LOG IN</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={this.state.showProgress}
          size='large'
        />
      </View>
    );
  }

  login() {
    this.setState({showProgress: true});

    const { navigate } = this.props.navigation;
    var email = this.state.email;
    var password = this.state.password;

    if(!Validation.validateEmail(email) || !Validation.validatePasword(password)) {
      AlertManager.showWarningAlert("Warning", "Email or password is invalid");
      this.setState({showProgress: false});
    } else {
      var loginAPI = new LoginAPI();
      loginAPI.login({
        email: this.state.email,
        password: this.state.password
      }, (results) => {
        this.setState(Object.assign({showProgress: false}, results));
        if(this.state.badCrentials || this.state.unknownError) {
          //AlertManager.showWarningAlert("Warning", "Email or password is incorrect");
          navigate('AppContainer');
        } else {
          navigate('AppContainer');
        }
      });
    }
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
