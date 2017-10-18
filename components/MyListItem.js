import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class MyListItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text>{this.props.id}. {this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  }
});

MyListItem.propType = {
  title: PropTypes.string
}
