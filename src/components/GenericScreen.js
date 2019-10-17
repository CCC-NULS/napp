//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, {Component} from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import theme from '../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.palette.primary.light,
    paddingBottom: 30,
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  headerText: {
    ...theme.header,
  },
  content: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  avatar: {
    ...theme.avatar,
  },
})

export default class GenericScreen extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {title, avatar, children} = this.props
    return (
      <ScrollView
        style={styles.root}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.header}>
          {
            <View style={styles.avatar}>
              <Icon name={avatar} type="feather" size={20} color="#99f" />
            </View>
          }
          <Text style={styles.headerText}> {title} </Text>
        </View>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    )
  }
}
