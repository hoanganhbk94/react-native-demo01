const passwordLength = 6;

export default class Validation {
  static validateEmail(email) {
    if(!email.includes('@') || email.length < passwordLength) {
      return false;
    }
    return true;
  }

  static validatePasword(password) {
    if(password.length < passwordLength) {
      return false;
    }
    return true;
  }
}
