import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import theme from '../theme'
import {Icon} from 'react-native-elements'

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    width: theme.defaultContainerWidth,
  },
  label: {
    ...theme.inputFieldLabel,
    marginBottom: 5,
    marginTop: 10,
  },
  inputField: {
    flex: 1,
    ...theme.inputField,
  },
  inputSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002E78',
  },
  icon: {
    paddingRight: 10,
  },
})

export default class InputField extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {label, icon} = this.props
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputSection}>
          <TextInput style={styles.inputField} {...this.props} />
          {icon !== undefined ? (
            <View style={styles.icon}>
              <Icon name={icon} type="feather" size={20} color="white" />
            </View>
          ) : (
            []
          )}
        </View>
      </View>
    )
  }
}
