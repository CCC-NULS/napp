//Created by Tudor Barbulescu

import React, {Component} from 'react'

import {StyleSheet, View, Text} from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    //display:'flex',
    //height:'60%',
    width: theme.defaultContainerWidth - 20,
    paddingBottom: 30,
    alignSelf: 'center',
  },
  title: {
    backgroundColor: theme.palette.primary.main,
  },
  titleText: {
    color: 'white',
    margin: 5,
    marginLeft: 10,
    fontSize: 14,
  },
  content: {
    display: 'flex',
    backgroundColor: theme.palette.primary.midDark,
  },
  contentText: {
    ...theme.text,
    //backgroundColor:'pink',
    fontSize: 32,
    margin: 10,
  },
})

class CarouselCard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {title, children} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{children}</Text>
        </View>
      </View>
    )
  }
}
export default CarouselCard
