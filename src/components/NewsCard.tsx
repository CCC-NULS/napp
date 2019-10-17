//Created by Tudor Barbulescu
import React, {Component, ReactNode} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import {Icon, Image} from 'react-native-elements'
import theme from '../theme'

const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    height: Dimensions.get('screen').height * 0.5,
    width: Dimensions.get('screen').width * 0.9,
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light,
  },
  imageStyle: {
    marginTop: 14,
    height: Dimensions.get('screen').height * 0.24,
    width: Dimensions.get('screen').width * 0.8,
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
  bottomContent: {
    flexDirection: 'column',
    display: 'flex',
  },
  topContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  largeText: {
    ...theme.text,
    textAlign: 'left',
    //backgroundColor:'pink',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
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
    margin: 4,
  },
  line: {
    height: 0,
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
})

interface Props {
  title: ReactNode
  content: ReactNode
  imageLink: string
}

const NewsCard: React.FC<Props> = ({title, content, imageLink}: Props) => {
  return (
    <View style={styles.content}>
      <View style={styles.topContent}>
        <Image style={styles.imageStyle} source={{uri: imageLink}}></Image>
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.largeText}> {title} </Text>
        <Text style={styles.midText}> {content} </Text>
      </View>
    </View>
  )
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

export default NewsCard //connect(mapStateToProps, mapDispatchToProps)(NewsCard);
