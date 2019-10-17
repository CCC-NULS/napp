'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    ...theme.lightScreenRoot,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    ...theme.title,
    color: '#383838',
  },
  text: {
    ...theme.subtitle,
    color: '#383838',
  },
})
class PersonalAccountPickerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Choose Account </Text>
      </View>
    )
  }
}

export default PersonalAccountPickerScreen
