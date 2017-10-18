import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';
import MyListItem from './MyListItem';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  });

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtrator = (item, index) => item.id;

  _onPressItem = (id: String) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      //onPressItem={this._onPressItem}
      //selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    const { params } = this.props.navigation.state;
    var data = [{id: '1', title: 'Lap trinh Android'}, {id: '2', title: 'Lap trinh iOS'}, {id: '1', title: 'Lap trinh PHP'}];

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          //extraData={this.state}
          //keyExtrator={this._keyExtrator}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
