'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import NewsCard from '../components/NewsCard'
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
        <NewsCard
          title="News Article Title"
          content="Content Text. This is the content of a News Story. 
          News, news and more news. Who is there to say, how many more
          news there will come. There will come one day, when there will
          be more news then himans, then what!? What are we going to do 
          then? Oh well, oh well. Or, in rather fact, in rather much 
          restorpect I'd rather not be dead. I'd rather live forever... !?"
          imageLink="https://wallpapersite.com/images/pages/pic_h/11026.jpg"
        />
        {/* <Text style={styles.title}> Choose Account </Text> */}
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
