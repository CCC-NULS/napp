'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
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
class ActionConfirmedScreen extends Component {
  static propTypes = {
    text: PropTypes.string,
    navigation: PropTypes.navigation,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SetPin')}>
          <Text style={styles.subtitle}> Start Over </Text>
        </TouchableOpacity>

        <Icon name="checkmark" type="feather" size={250} color="#99f" />
        <PrimaryButton
          style={{justifyContent: 'flex-end'}}
          title="Back To Wallet"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default ActionConfirmedScreen
