import React from 'react'
import {Platform} from 'react-native'
import {createSwitchNavigator, createStackNavigator} from 'react-navigation'

import PinScreen from '../screens/PinScreen'
import SetPinScreen from '../screens/SetPinScreen'
import ConfirmPinScreen from '../screens/ConfirmPinScreen'
import DisclaimerScreen from '../screens/DisclaimerScreen'
import SetupAccessScreen from '../screens/SetupAccessScreen'

import LoginScreen from '../screens/LoginScreen'
import SelectUserFlowScreen from '../screens/SelectUserFlowScreen'

const FirstTimeAuthNavigator = createStackNavigator({
  SetupAccess: SetupAccessScreen,
  Disclaimer: DisclaimerScreen,
  SetPin: SetPinScreen,
  ConfirmPin: ConfirmPinScreen,
})

FirstTimeAuthNavigator.navigationOptions = {
  header: null,
}

const NormalAuthNavigator = createStackNavigator({
  Login: LoginScreen,
  Pin: PinScreen,
})

NormalAuthNavigator.navigationOptions = {
  header: null,
}

const AuthNavigator = createSwitchNavigator({
  SelectUserFlow: SelectUserFlowScreen,
  FirstTimeAuth: FirstTimeAuthNavigator,
  NormalAuth: NormalAuthNavigator,
})

AuthNavigator.navigationOptions = {
  header: null,
}

export default AuthNavigator
