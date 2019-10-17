//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import {TransferTransaction, nulsToNa, Utxo} from 'nuls-js'
import {Icon} from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select'
import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'
import theme from '../theme'

const styles = StyleSheet.create({
  pickerRoot: {
    alignSelf: 'center',
    width: theme.defaultContainerWidth,
  },
  label: {
    ...theme.inputFieldLabel,
    marginBottom: 5,
    marginTop: 10,
  },
  button: {
    ...theme.primaryButton,
  },
  buttonText: {
    ...theme.buttonText,
  },
})
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignSelf: 'center',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.palette.primary.dark,
    borderRadius: 2,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 20,
    marginRight: 20,
    width: theme.defaultContainerWidth,
  },
  inputAndroid: {
    alignSelf: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white', //theme.palette.primary.dark,
    borderRadius: 3,
    color: theme.palette.primary.light,
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 20,
    marginRight: 20,
    width: theme.defaultContainerWidth,
  },
})

class SendScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            type="feather"
            color="#FFF"
            containerStyle={{marginRight: 14, marginLeft: 14}}
            size={24}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Share')}>
          <Icon
            name="share-2"
            type="feather"
            color="#FFF"
            containerStyle={{marginRight: 14, marginLeft: 14}}
            size={24}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: theme.palette.primary.light,
        paddingTop: 0,
        marginTop: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }
  }

  constructor(props) {
    super(props)
    const wallet = props.navigation.getParam('fromAddress', {
      address: 'default',
    })

    this.state = {
      address: '',
      amount: '',
      note: '',
      selectedWallet: {label: wallet.address, value: wallet.address},
    }

    this.inputRefs = {
      selectedWallet: {label: wallet.address, value: wallet.address},
    }
  }

  async sendNuls() {
    console.log('Sending some NULS ... ')

    const fromAddress = 'TTatokAfGRC6ACmqaoXqWniAEwqSvzrc'
    const privateKey =
      '040b12fa6405badc1328904f05ef45e89e0606cfe4f03cd5f97bf20a04611c74'
    const toAddress = 'TTaisi5BDnwooxFZg5D8vLktSuSrHtpS'
    const anotherAddress = 'TTattJmAz28RNH95VsRqnGNRhvKAV5Fj'

    const transactionConfig = {
      api: {
        host: 'http://apitn1.nulscan.io/',
      },
    }

    const utxos = await Utxo.getUtxos(fromAddress, transactionConfig.api)

    console.log('Got utxos: ')
    console.log(utxos)

    const tx = TransferTransaction.fromUtxos(utxos)
      .config(transactionConfig)
      .change(fromAddress)
      .to(toAddress, nulsToNa(1.7))
      .to(anotherAddress, nulsToNa(7))
      .remark('test transfer :)')
      .sign(privateKey)

    console.log(tx.getType())
    // 2

    const txReceipt = await tx.send()

    console.log('Got receipt: ')
    console.log(txReceipt)
  }

  render() {
    const placeholder = {
      label: 'Select A Wallet',
      value: null,
      color: '#9EA0A4',
    }

    const walletItems = []
    const traditionalWallet = [
      {address: 'Wallet Address 1'},
      {address: 'Wallet Address 2'},
    ]

    traditionalWallet.forEach(item => {
      walletItems.push({label: item.address, value: item.address})
    })
    return (
      <GenericScreen title="Send Funds" avatar="upload">
        <View style={styles.pickerRoot}>
          <Text style={styles.label}> From </Text>
        </View>

        <RNPickerSelect
          placeholder={placeholder}
          items={walletItems}
          onValueChange={value => {
            this.setState({
              selectedWallet: value,
            })
          }}
          style={pickerSelectStyles}
          value={this.state.selectedWallet}
          useNativeAndroidPickerStyle={false}
          ref={el => {
            this.inputRefs.selectedWallet = el
          }}
        />
        <InputField
          label="Send To"
          onChangeText={address => this.setState({address})}
          value={this.state.address}
        />
        <InputField
          label="Amount"
          onChangeText={amount => this.setState({amount})}
          value={this.state.amount}
        />
        <InputField
          label="Note (optional)"
          multiline
          placeholder="Enter Here"
          placeholderTextColor="rgba(255,255,255,0.3)"
          numberOfLines={4}
          onChangeText={note => this.setState({note})}
          value={this.state.note}
        />

        <PrimaryButton title="Send" onPress={() => this.sendNuls()} />
      </GenericScreen>
    )
  }
}

export default SendScreen
