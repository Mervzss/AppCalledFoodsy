import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation'

// Call InitialStacks
// import InitialStacks from './src/Screens/InitialStacks'
import InitialStacks from './src/Screens/InitialStacks/ForgotPassModal/index'
import MainTabs from './src/Screens/MainAppTabs/index'

export default class App extends Component {
  render() {
    return <SwitchingNav />
  }
}

const SwitchingNav = createSwitchNavigator(
  {
    Initial: InitialStacks,
    Main: MainTabs,
  },
  {
    initialRouteName: 'Initial'
  }
)
