import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Image, Text} from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  mainLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 40,
    marginTop: 100,
    margin: 20,
  },
  mainLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titleText: {
    ...theme.text,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    margin: 20,
    textAlign: 'left',
  },
  infoText: {
    ...theme.text,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'left',
  },
  footerText: {
    ...theme.text,
    fontSize: 12,
  },
  footer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 2,
  },
})
class WelcomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.mainLogoContainer}>
          <Image
            source={require('../../assets/images/Nuls.png')}
            style={styles.mainLogo}
          />
        </View>

        <Text style={styles.titleText}>Welcome To NULS</Text>

        {
          // <View style={{width:30, borderBottomColor: 'white', borderBottomWidth: 1}}/>
          // <Text style={styles.infoText}>
          //  <Text>
          //  	Mobile walled for the NULS blockchain. We're not holding your keys.
          //  	This is serious business. Don't worry. Be happy.
          // 	</Text>
          // 	<Text> Created by Tudor Barbulescu. CCC.</Text>
          // </Text>
        }

        <PrimaryButton
          title="Enter Wallet"
          onPress={() => this.props.navigation.navigate('App')}
        />
        {
          <PrimaryButton
            title="Create New Wallet"
            disabled
            onPress={() => {
              console.log('A')
            }}
          />
        }

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {' '}
            Created by Tudor Barbulescu CCC
          </Text>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen
