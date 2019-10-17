'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
})

class TestInput extends Component {
  render() {
    return (
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="User Nickname"
          onChangeText={searchString => {
            this.setState({searchString})
          }}
          underlineColorAndroid="transparent"
        />
        <Icon
          style={styles.searchIcon}
          name="search"
          type="feather"
          size={20}
          color="#000"
        />
      </View>
    )
  }
}

export default TestInput
