import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import theme from '../theme'

const styles = StyleSheet.create({
  root: {
    ...theme.lightScreenRoot,
  },
  title: {
    ...theme.title,
    color: '#191919',
    margin: 20,
  },
  disclaimerText: {
    ...theme.subtitle,
    color: '#383838',
  },
})

class DisclaimerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}> Disclaimer </Text>
        <Text style={styles.disclaimerText}>
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <PrimaryButton
          title="Continue Setup"
          onPress={() => this.props.navigation.navigate('SetPin')}
        />
      </View>
    )
  }
}

export default DisclaimerScreen
