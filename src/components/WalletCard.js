/* eslint-disable react/prop-types */
//Created by Tudor Barbulescu
import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import theme from '../theme'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deleteWallet } from '../actions/Accounts';

const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    height: 180,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.midDark,
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconButton: {
    //...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    // top: 20,
    // right: 5,
    //position: 'absolute', // add if dont work with above
  },
  titleText: {
    color: 'white',
    margin: 5,
    marginLeft: 10,
    fontSize: 14,
  },
  bottomContent: {
    flexDirection: 'row',
    display: 'flex',
  },
  topContent: {
    flexDirection: 'row',
    display: 'flex',
  },
  bottomTab: {
    flexDirection: 'column',
    flex: 1,
  },
  xlargeText: {
    ...theme.text,
    textAlign: 'left',
    //backgroundColor:'pink',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 4,
  },
  largeText: {
    ...theme.text,
    textAlign: 'left',
    //backgroundColor:'pink',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 1,
  },
  smallText: {
    ...theme.text,
    textAlign: 'left',
    //backgroundColor:'pink',
    fontSize: 11,
    //margin:1,
  },
  midText: {
    ...theme.text,
    textAlign: 'left',
    //backgroundColor:'pink',
    fontSize: 14,
    margin: 1,
  },
  line: {
    height: 0,
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
})

class WalletCard extends Component {
  render() {
    console.log('Wallet is ')
    console.log(this.props.wallet)

    return (
      <View style={styles.content}>
        {/*<View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>*/}

        <View style={styles.topContent}>
          <Text style={styles.xlargeText}> Wallet Name </Text>
          <Icon
            style={styles.iconButton}
            name="more-vertical"
            type="feather"
            color="#fff"
            onPress={() => {
              console.log('Lalalalala')
              //this.props.deleteWallet(this.props.wallet.address);
            }}
          />
        </View>
        <Text style={styles.smallText}> {this.props.wallet.address} </Text>
        <Text style={styles.largeText}> $ 98,892 </Text>
        <View style={styles.line} />
        <View style={styles.bottomContent}>
          <View style={styles.bottomTab}>
            <Text style={styles.smallText}> Total </Text>
            <Text style={styles.midText}> 108,374.75 </Text>
          </View>
          <View style={styles.bottomTab}>
            <Text style={styles.smallText}> N Available </Text>
            <Text style={styles.midText}> 100,000 </Text>
          </View>
          <View style={styles.bottomTab}>
            <Text style={styles.smallText}> Locked </Text>
            <Text style={styles.midText}> 8,374.75 </Text>
          </View>
        </View>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   const { accounts } = state.accounts
//   return { accounts }
// };

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     deleteWallet,
//   }, dispatch)
// );

export default WalletCard //connect(mapStateToProps, mapDispatchToProps)(WalletCard);
