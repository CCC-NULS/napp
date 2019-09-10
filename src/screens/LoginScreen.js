'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    ...theme.darkScreenRoot,
  },
  title: {
    ...theme.title,
    color: 'white',
  },
  subtitle: {
    ...theme.subtitle,
    color: '#ddd',
  },
})

class LoginScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Choose Account </Text>

        <PrimaryButton
          title="Login"
          onPress={() =>
            this.props.navigation.navigate('Pin', {
              nextPage: 'App',
            })
          }
        />
      </View>
    )
  }
}

export default LoginScreen
