import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator} from 'react-navigation'

// Call InitialStacks
import InitialStacks from './src/Screens/InitialStacks'
export default class App extends Component{
  render() {
    return (
      <SwitchingNav/>
    );
  }
}

const SwitchingNav = createSwitchNavigator(
  {
    Initial: InitialStacks,
  },
  {
    initialRouteName:'Initial'
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
