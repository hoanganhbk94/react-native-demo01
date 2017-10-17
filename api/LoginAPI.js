export default class LoginAPI {
  static loginWithEmailAndPassword(email, password) {
    if (email.toLowerCase() == 'admin' && password.toLowerCase() == 'admin') {
      return true;
    }
    return false;
  }
}
