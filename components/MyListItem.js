import React, {Component} from 'react';
import {
  Button,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class MyListItem extends Component {
  // _onPress = () => {
  //   this.props.onPressitem(this.props.id);
  // };

  render() {
    return (
      // <Button
      //   title={this.props.id}
      //   onPress={this._onPress}
      // />
      <Text>{this.props.title}</Text>
    );
  }
}

MyListItem.propType = {
  title: PropTypes.string
}
