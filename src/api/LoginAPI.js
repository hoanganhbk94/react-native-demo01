import {Buffer} from 'buffer';
import { NativeModules } from 'react-native';

const urlLogin = 'https://api.github.com/user';

export default class LoginAPI {
  getUsers(url) {
    fetch(url, {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((results)=> {
      console.log(results);
    })
  }

  login(creds, cb) {
    // var buffer = new Buffer(creds.email + ':' + creds.password);
    // var encodedAuth = buffer.toString('base64');
    var authStr = creds.email + ':' + creds.password;

    var encoding = NativeModules.Encoding;
    encoding.base64Encode(authStr, (encodedAuth)=>{
      fetch(urlLogin, {
        headers: {
          'Authorization' : 'Basic' + encodedAuth
        }
      })
      .then((response) => {
        var status = response.status
        if(status >= 200 && status < 300) {
          return response;
        }
        throw {
          badCrentials: status == 401,
          unknownError: status != 401
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        return cb({success: true});
      })
      .catch((err) => {
        return cb(err);
      })
    });
  }
}
