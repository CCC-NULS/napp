'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native'
// import { connect } from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
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
  textButton: {
    ...theme.subtitle,
    marginTop: 20,
    color: '#ddd',
  },
})
class PinScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      showForgotButton: false,
      nextPage: this.props.navigation.getParam('nextPage', 'App'),
    }
  }

  pinInput = React.createRef()

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>First, Enter Your Pin Code.</Text>
        <Text style={styles.subtitle}>
          We will ask this code to approve important actions.
        </Text>

        <SmoothPinCodeInput
          ref={this.pinInput}
          value={this.state.code}
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: '#ccc',
          }}
          cellStyleFocused={{
            borderColor: '#fff',
          }}
          codeLength={6}
          onTextChange={code => this.setState({code})}
          onFulfill={pinCode => this._checkCode(pinCode)}
          //onBackspace={this._focusePrevInput}
        />

        {/*<PrimaryButton title="DONE" onPress={() => this.props.navigation.navigate('App')} />*/}
        {this.state.showForgotButton ? (
          <TouchableOpacity
            onClick={() =>
              console.log("U'RE RECKD... Unless you have the seed phrase. ")
            }>
            <Text style={styles.textButton}>Forgot Your PIN ?</Text>
          </TouchableOpacity>
        ) : (
          undefined
        )}
      </View>
    )
  }

  _checkCode = pinCode => {
    // if(this.props.auth.auth.pin == pinCode){
    this.props.navigation.navigate(this.state.nextPage)
    // } else {
    //   this.pinInput.current.shake()
    //     .then(() => {
    //       this.setState({ code: '', showForgotButton:true })
    //     });
    // }
  }
}

// const mapStateToProps = (state) => {
//   const { auth } = state.auth
//   return { auth }
// };

export default PinScreen //connect(mapStateToProps)(PinScreen);
