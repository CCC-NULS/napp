export default jest.fn()
export const createStackNavigator = jest.fn(() => {
  return {navigationOptions: () => 'whatever'}
})
export const createSwitchNavigator = jest.fn(() => {
  return {navigationOptions: () => 'whatever'}
})
export const createAppContainer = jest.fn(() => {
  return {navigationOptions: () => 'whatever'}
})
export const createDrawerNavigator = jest.fn(() => {
  return {navigationOptions: () => 'whatever'}
})
