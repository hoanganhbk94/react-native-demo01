import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';
import MyListItem from './MyListItem';
import Course from '../model/Course';
import CourseDetail from './CourseDetail';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  });

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtrator = (item, index) => item.id;

  _onPressItem = (id: string) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected};
    });
    const { navigate } = this.props.navigation;
    console.log(`Click me ${id}`);
    navigate('CourseDetail', { id : id} );
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    const { params } = this.props.navigation.state;
    var data = [new Course(1, 'Lap trinh Android'), new Course(2, 'Lap trinh iOS'), new Course(3, 'Lap trinh PHP')];

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
