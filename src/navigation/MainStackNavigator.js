import React from 'react'
import {Platform, Dimensions} from 'react-native'
import {createStackNavigator, createDrawerNavigator} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'

import ReceiveScreen from '../screens/ReceiveScreen'
import CreateWalletScreen from '../screens/CreateWalletScreen'
import SendScreen from '../screens/SendScreen'

import SideMenu from '../components/SideMenu'

const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Send: SendScreen,
  Receive: ReceiveScreen,
  CreateWallet: CreateWalletScreen,
})

MainStackNavigator.navigationOptions = {
  header: null,
}

const DrawerNav = createDrawerNavigator(
  {
    Item1: {
      screen: MainStackNavigator,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  },
)

export default DrawerNav
