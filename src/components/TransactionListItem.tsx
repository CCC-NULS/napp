import React from 'react'
import {Icon} from 'react-native-elements'
import {View, Text, StyleSheet, TextStyle} from 'react-native'

import theme from '../theme'
import {TransactionModel} from '../model/TransactionModel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  txIcon: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  txListContainer: {
    marginTop: 5,
    width: '95%', //theme.defaultContainerWidth,
    minHeight: 500,
    //backgroundColor:'yellow',
  },
  txListItem: {
    flexDirection: 'row',
    height: 50,
  },
  txItemElement: {
    ...theme.text,
    fontWeight: 'normal',
    fontSize: 12,
  } as TextStyle,
})

interface Props {
  item: TransactionModel
  index: number
}

const TransactionListItem: React.FC<Props> = ({item, index}: Props) => {
  const tx = item
  const fr = item.from + ''
  const tt = item.to + ''
  const date = item.date.toString().substring(2, 16)

  return (
    <View
      key={tx.hash}
      style={[
        styles.txListItem,
        index % 2 === 0 ? {backgroundColor: theme.palette.primary.main} : {},
      ]}>
      {tx.type === 'IN' ? (
        <View style={styles.txIcon}>
          <Icon name="download" type="feather" size={16} color="#99f" />
        </View>
      ) : (
        <View style={styles.txIcon}>
          <Icon name="upload" type="feather" size={16} color="#99f" />
        </View>
      )}
      <View style={{flexDirection: 'column'}}>
        <Text
          style={[styles.txItemElement, {fontWeight: 'bold', fontSize: 14}]}>
          {' '}
          {tx.hash.substring(0, 13) + '...'}{' '}
        </Text>
        {tx.type === 'IN' ? (
          <Text style={styles.txItemElement}>
            from: {fr.substring(0, 12) + '...'}
          </Text>
        ) : (
          <Text style={[styles.txItemElement]}>
            to: {tt.substring(0, 14) + '...'}
          </Text>
        )}
      </View>

      {/*<Text style={styles.txItemElement}> {tx.type === "IN"?"    IN":tx.type} </Text>*/}
      <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
        <Text
          style={[
            styles.txItemElement,
            {
              marginLeft: 10,
              fontSize: 15,
              alignSelf: 'flex-end',
              textAlign: 'right',
            },
            tx.value > 0
              ? {color: theme.palette.green.main}
              : {color: theme.palette.red.main},
          ]}>
          {' '}
          {tx.value}{' '}
        </Text>
        <Text style={[styles.txItemElement, {fontSize: 12}]}> {date} </Text>
      </View>
    </View>
  )
}

export default TransactionListItem
