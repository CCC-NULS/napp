'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Image, View, Text} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    ...theme.darkScreenRoot,
  },
  title: {
    ...theme.title,
    padding: 50,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  footer: {
    ...theme.subtitle,
    paddingTop: 50,
    justifyContent: 'flex-end',
    color: 'white',
  },
  logo: {
    ...theme.headerImage,
    backgroundColor: 'transparent',
    borderRadius: 100,
    height: 300,
  },
})

class SplashScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  componentDidMount() {
    setTimeout(
      function() {
        //Start the timer
        this.props.navigation.navigate('AuthNavigator')
      }.bind(this),
      3000,
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../assets/images/Nuls.jpg')}
            style={{resizeMode: 'center'}}
          />
        </View>
        <Text style={styles.title}> reNuls </Text>
        <Text style={styles.footer}> Built by Tudor Barbulescu & Angel </Text>
      </View>
    )
  }
}

export default SplashScreen
