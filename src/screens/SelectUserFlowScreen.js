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
class SelectUserFlowScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {' '}
          Select Flow User Flow You Want To Take{' '}
        </Text>
        <Text style={styles.subtitle}>
          {' '}
          This page is for testing purposes and will not be part of the finished
          app.{' '}
        </Text>

        <PrimaryButton
          title="First Time Login"
          onPress={() => this.props.navigation.navigate('FirstTimeAuth')}
        />

        <PrimaryButton
          title="Normal Login"
          onPress={() => this.props.navigation.navigate('NormalAuth')}
        />
      </View>
    )
  }
}

export default SelectUserFlowScreen
