/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import MainStackNavigator from './MainStackNavigator'
import AuthNavigator from './AuthNavigator'

import SplashScreen from '../screens/SplashScreen'

import TransactionConfirmedScreen from '../screens/TransactionConfirmedScreen'
import {TransactionModel} from '../model/TransactionModel'

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Splash: SplashScreen,
  AuthNavigator: AuthNavigator,
  App: MainStackNavigator,
})

AppNavigator.navigationOptions = {
  header: null,
}
const AppContainer = createAppContainer(AppNavigator)

// Now AppContainer is the main component for React to render

export default AppContainer
