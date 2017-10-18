import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';

export default class MyListItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text>{this.props.item.id}. {this.props.item.title}</Text>
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
