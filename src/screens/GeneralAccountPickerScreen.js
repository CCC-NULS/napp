'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, InputField} from 'react-native'

const styles = StyleSheet.create({
  container: {
    ...theme.darkScreenRoot,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: '#383838',
  },
  text: {
    fontSize: 25,
    color: '#383838',
  },
})

class GeneralAccountPickerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Enter A New Account </Text>
        <InputField />

        <Text style={styles.title}> Choose Account </Text>
      </View>
    )
  }
}

export default GeneralAccountPickerScreen
