import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class CourseDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Course Detail'
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Hello, {params.item.title}!!!</Text>
        <Button
          title="Back screen"
          onPress={() => this.backScreen()}
        />
      </View>
    );
  }

  backScreen() {
    console.log("back screen");
    const backAction = NavigationActions.back({
      key: "Home"
    });
    this.props.navigation.dispatch(backAction);

    const setParamsAction = NavigationActions.setParams({
    params: { title: 'Hello' },
      key: 'Home',
    })
    this.props.navigation.dispatch(setParamsAction)
  }

}
