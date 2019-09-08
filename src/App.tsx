/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, ReactElement} from 'react'
import {SafeAreaView, ScrollView, Text, StatusBar, Button} from 'react-native'

import {ENV} from 'react-native-dotenv'
import Container from './components/Container'
import Header from './components/Header'

import configureStore from './store'
import {Provider} from 'react-redux'
import AuthTest from './containers/AuthTest'
import AuthMessage from './containers/AuthMessage'
import ErrorMessage from './containers/ErrorMessage'
import AccountList from './containers/AccountList'

const store = configureStore()

const App = (): ReactElement => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null

  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Header title="Nuls App" />
            <Container>
              {!usingHermes ? null : <Text>Engine: Hermes</Text>}
              <Text>Using Config | ENV = {ENV}</Text>
              <AccountList />
              <AuthTest />
            </Container>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
      <AuthMessage />
      <ErrorMessage />
    </Provider>
  )
}

export default App
