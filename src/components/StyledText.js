import React from 'react'
import {Text} from 'react-native'

export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        // eslint-disable-next-line react/prop-types
        style={[this.props.style, {fontFamily: 'space-mono'}]}
      />
    )
  }
}
