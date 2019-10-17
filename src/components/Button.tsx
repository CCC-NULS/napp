import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme.variants('mode', 'variant', {
  default: {light: 'gray', dark: 'darkgray'},
  primary: {light: 'blue', dark: 'darkblue'},
  success: {light: 'green', dark: 'darkgreen'},
  warning: {light: 'orange', dark: 'darkorange'},
})

const Btn = styled.button`
  background-color: ${backgroundColor};
`
interface Props {
  disabled: boolean
  title: string
  onPress: any
  variant: string
}

const Button: React.FC<Props> = some => {
  return (
    <Btn
      title={some.title}
      onClick={() => some.onPress()}
      disabled={some.disabled}>
      {some.title}
    </Btn>
  )
}

export default Button
