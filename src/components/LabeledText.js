import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    width: theme.defaultContainerWidth,
  },
  label: {
    ...theme.inputFieldLabel,
    marginBottom: 2,
    marginTop: 5,
  },
  text: {
    ...theme.text,
    marginLeft: -10,
    marginRight: -10,
    marginTop: 0,
    textAlign: 'left',
  },
})
export default class LabeledText extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {label, children} = this.props
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.text}> {children} </Text>
      </View>
    )
  }
}
