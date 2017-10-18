import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class CourseDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Course Detail'
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Hello, {params.id}!!!</Text>
      </View>
    );
  }

}

CourseDetail.propType = {
  courseName: PropTypes.string
}
