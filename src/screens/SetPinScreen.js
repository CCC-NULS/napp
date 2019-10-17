import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import theme from '../theme'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setPin } from '../actions/Auth';
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
class SetPinScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter a new 6 digit code.</Text>

        <Text style={styles.subtitle}>
          This code will be used to sign important actions
        </Text>

        <SmoothPinCodeInput
          value={this.state.code}
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: '#ccc',
          }}
          cellStyleFocused={{
            borderColor: '#fff',
          }}
          mask={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: 'white',
              }}></View>
          }
          maskDelay={100}
          codeLength={6}
          onTextChange={code => this.setState({code})}
          onFulfill={pinCode => this._setCode(pinCode)}
        />

        {/*<PrimaryButton title="NEXT" onPress={() => this.props.navigation.navigate('ConfirmPin')} />*/}
      </View>
    )
  }

  _setCode = pinCode => {
    //this.props.setPin(pinCode);
    this.props.navigation.navigate('ConfirmPin')
  }
}

// const mapStateToProps = (state) => {
//   const { auth } = state.auth
//   return { auth }
// };

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     setPin,
//   }, dispatch)
// );

export default SetPinScreen //connect(mapStateToProps, mapDispatchToProps)(SetPinScreen);
