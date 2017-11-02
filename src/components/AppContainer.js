import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Setting from './Setting';
import CourseDetail from './CourseDetail';

const HomeNavigator = StackNavigator({
  Home: {screen : Home},
  CourseDetail: {screen : CourseDetail}
});

const SettingNavigator = StackNavigator({
  Setting: {screen : Setting}
});

export default class AppContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Container', header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Home"
          icon={{uri: 'ic_home_white', scale: 2}}
          selected={this.state.selectedTab == 'home'}
          onPress={() => this.setState({selectedTab: 'home'})} >
          <HomeNavigator/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Setting"
          icon={{uri: 'ic_settings_white', scale: 2}}
          selected={this.state.selectedTab == 'setting'}
          onPress={() => this.setState({selectedTab: 'setting'})} >
          <SettingNavigator/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  }
});
