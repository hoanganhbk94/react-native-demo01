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

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  });

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtrator = (item, index) => item.id;

  _onPressItem = (course: Course) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(course.id, !selected.get(course.id));
      return {selected};
    });
    const { navigate } = this.props.navigation;
    console.log(`Click me ${course.id}`);
    navigate('CourseDetail', { item : course} );
  };

  _renderItem = ({item}) => (
    <MyListItem
      item={item}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
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
