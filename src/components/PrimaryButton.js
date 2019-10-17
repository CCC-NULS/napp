//author: Tudor Barbulescu
import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    ...theme.primaryButton,
    marginTop: 20,
  },
  disabledButton: {
    ...theme.disabledPrimaryButton,
    marginTop: 20,
  },
  buttonText: {
    ...theme.buttonText,
  },
  disabledButtonText: {
    ...theme.disabledButtonText,
  },
})

export default class PrimaryButton extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {disabled, title, onPress} = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={disabled ? styles.disabledButton : styles.button}
        onPress={() => onPress()}>
        <Text style={disabled ? styles.disabledButtonText : styles.buttonText}>
          {' '}
          {title}{' '}
        </Text>
      </TouchableOpacity>
    )
  }
}
