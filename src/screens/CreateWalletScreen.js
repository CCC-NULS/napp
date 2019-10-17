import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, TouchableOpacity} from 'react-native'
import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'
import LabeledText from '../components/LabeledText'
import theme from '../theme'
import * as NULS from 'nuls-js'
import {Icon} from 'react-native-elements'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { createWallet } from '../actions/Accounts';
import RNPickerSelect from 'react-native-picker-select'

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 20,
    marginRight: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 20,
    marginRight: 20,
  },
})

class CreateWalletScreen extends Component {
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

    const wallet = {
      address: 'NsduyNoZzMEA9X3TtKLkoskBunBqP2Ny',
      privateKey:
        '3a74ac23b5b0d5c34b04dcc1011d1a97c95da6bc34c1481e787ff4ef1e7b77b4',
      publicKey:
        '02c9fb157293fdc67816ba5e38a014c7c641434b65eb2d024e9b5ae57091d73d74',
      password: '',
    }

    //Account.create();

    console.log('WALLET IS')
    console.log(wallet)

    this.state = {
      walletType: 'new-wallet',
      dropdownOpen: false,
      // address:'NsduyNoZzMEA9X3TtKLkoskBunBqP2Ny',
      // privateKey:'3a74ac23b5b0d5c34b04dcc1011d1a97c95da6bc34c1481e787ff4ef1e7b77b4',
      // publicKey:'02c9fb157293fdc67816ba5e38a014c7c641434b65eb2d024e9b5ae57091d73d74',
      password: null,
      importedPrivateKey: '',
      encryptionPhrase: '',
      wallet: wallet,
    }

    this.inputRefs = {
      walletType: null,
    }
  }

  _createWallet = () => {
    const wallet = NULS.Account.create(this.state.password)
    // this.props.createWallet(wallet);
    this.setState({wallet})
    this.props.navigation.navigate('App')
  }

  // _createEncryptedWallet = (password) => {
  // 	this.setState({wallet:NULS.account.create(password)});
  // };

  _renderContent = () => {
    contents = []
    switch (this.state.walletType) {
      case 'new-wallet':
        contents.push(
          <LabeledText key={0} label="Address">
            {this.state.wallet.address}
          </LabeledText>,
        )
        contents.push(
          <LabeledText key={1} label="Private Key">
            {this.state.wallet.privateKey}
          </LabeledText>,
        )
        contents.push(
          <LabeledText key={2} label="Public Key">
            {this.state.wallet.publicKey}
          </LabeledText>,
        )
        contents.push(
          <InputField
            key={3}
            label="Password"
            secureTextEntry
            onChangeText={value => {
              this.setState({password: value})
            }}>
            {this.state.password}
          </InputField>,
        )
        contents.push(
          <PrimaryButton
            key={4}
            title="Create New Wallet"
            onPress={() => this._createWallet()}
          />,
        )
        break
      case 'private-key':
        contents.push(
          <InputField
            key={0}
            label="Private Key"
            onChangeText={value => {
              this.setState({importedPrivateKey: value})
            }}
          />,
        )
        contents.push(
          <PrimaryButton
            key={4}
            title="Create Wallet"
            onPress={() =>
              NULS.Account.import(null, this.state.importedPrivateKey)
            }
          />,
        )
        break
      case 'encrypted-key':
        contents.push(
          <InputField
            key={0}
            label="Private Key"
            onChangeText={value => {
              this.setState({importedPrivateKey: value})
            }}
          />,
        )
        contents.push(
          <InputField
            key={1}
            label="Passphrase"
            onChangeText={value => {
              this.setState({encryptionPhrase: value})
            }}
            carretHidden
          />,
        )
        contents.push(
          <PrimaryButton
            key={4}
            title="Create Wallet"
            onPress={() =>
              NULS.Account.import(
                this.state.encryptionPhrase,
                this.state.importedPrivateKey,
              )
            }
          />,
        )
        break
      default:
        break
    }

    return contents
  }

  render() {
    const placeholder = {
      label: 'Select a Wallet Type...',
      value: null,
      color: '#9EA0A4',
    }

    const walletTypes = [
      {
        label: 'Create New Wallet',
        value: 'new-wallet',
      },
      {
        label: 'Import A Private Key',
        value: 'private-key',
      },
      {
        label: 'Use An Encrypted Key',
        value: 'encrypted-key',
      },
    ]

    return (
      <GenericScreen title="Add New Wallet" avatar="plus">
        <RNPickerSelect
          placeholder={placeholder}
          items={walletTypes}
          onValueChange={value => {
            this.setState({
              walletType: value,
            })
          }}
          style={pickerSelectStyles}
          value={this.state.walletType}
          useNativeAndroidPickerStyle={false}
          ref={el => {
            this.inputRefs.walletType = el
          }}
        />
        {this._renderContent()}
      </GenericScreen>
    )
  }
}

// const mapStateToProps = (state) => {
//   const { accounts } = state.accounts
//   return { accounts }
// };

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     createWallet,
//   }, dispatch)
// );

export default CreateWalletScreen //connect(mapStateToProps, mapDispatchToProps)(CreateWalletScreen);
