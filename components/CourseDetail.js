import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class CourseDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Course Detail'
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Hello, {params.item.title}!!!</Text>
      </View>
    );
  }

}
