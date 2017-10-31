import {
  Alert
} from 'react-native';

export default class AlertManager {

  static showWarningAlert(title, message) {
    Alert.alert(title, message, [], {cancelable: true});
  }

}
