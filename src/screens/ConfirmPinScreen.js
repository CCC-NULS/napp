import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import theme from '../theme'
import {Icon} from 'react-native-elements'

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

class ConfirmPinScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      wasSet: false,
    }
  }

  pinInput = React.createRef()

  static propTypes = {
    navigation: PropTypes.any,
  }
  render() {
    if (this.state.wasSet) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Your PIN Code was changed!</Text>
          <Icon size={140} name="check" type="feather" color="#fff" />
        </View>
      )
    } else
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Confirm the 6 digit code.</Text>

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
            onFulfill={pinCode => this._checkCode(pinCode)}
            //onBackspace={this._focusePrevInput}
          />

          {/*<PrimaryButton title="DONE" onPress={() => this.props.navigation.navigate('App')} />*/}

          <TouchableOpacity onPress={() => this._startOver()}>
            <Text style={styles.subtitle}> Start Over </Text>
          </TouchableOpacity>
        </View>
      )
  }

  _checkCode = pinCode => {
    // if(this.props.auth.auth.pin == pinCode){
    this.setState({wasSet: true})

    setTimeout(
      function() {
        //Start the timer
        this.props.navigation.navigate('App')
      }.bind(this),
      3000,
    )
    // } else {
    //   this.pinInput.current.shake()
    //     .then(() => this.setState({ code: '' }));
    // }
  }

  _startOver = () => {
    // this.props.setPin('');
    this.props.navigation.navigate('SetPin')
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

export default ConfirmPinScreen //connect(mapStateToProps, mapDispatchToProps)(ConfirmPinScreen);
