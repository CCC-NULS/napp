import React from 'react'
import styled from 'styled-components/native'
import PrimaryButton from '../components/PrimaryButton'
import {TransactionModel} from '../model/TransactionModel'

const HeaderText = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: white;
`
const ConfirmationText = styled.Text`
  font-size: 20px;
  color: white;
`
const WalletPropTitle = styled.Text`
  font-size: 16px;
  color: white;
`
const WalletPropContent = styled.Text`
  font-size: 18px;
  color: white;
`
const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: grey;
`
const SummaryOuter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const SummaryInner = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BottomButton = styled.Button`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
interface Props {
  transaction: TransactionModel
  navigation: any
}

const TransactionConfirmedScreen: React.FC<Props> = properties => {
  const transaction = new TransactionModel()
  return (
    <Container>
      <HeaderText> Succesfully sent to the network </HeaderText>
      {transaction.confirmed ? (
        <ConfirmationText> Confirmed </ConfirmationText>
      ) : (
        <ConfirmationText> Waiting for confirmation... </ConfirmationText>
      )}
      <HeaderText> Summary </HeaderText>
      <SummaryOuter>
        <SummaryInner>
          <WalletPropTitle> From </WalletPropTitle>
          <WalletPropContent> {transaction.from} </WalletPropContent>
          <WalletPropTitle> To </WalletPropTitle>
          <WalletPropContent> {transaction.to} </WalletPropContent>
          <WalletPropTitle> Note </WalletPropTitle>
          <WalletPropContent> {transaction.note} </WalletPropContent>
        </SummaryInner>
        <SummaryInner>
          <WalletPropTitle> Amount </WalletPropTitle>
          <WalletPropContent> {transaction.amount} Nuls </WalletPropContent>
          <WalletPropTitle> tx cost </WalletPropTitle>
          <WalletPropContent> tx {transaction.tx}</WalletPropContent>
          <WalletPropContent> utxx {transaction.utxo} </WalletPropContent>
        </SummaryInner>
      </SummaryOuter>

      <HeaderText> Transaction </HeaderText>
      <WalletPropContent> {transaction.hash} </WalletPropContent>

      <PrimaryButton
        style={{alignSelf: 'flex-end'}}
        title="Back To Wallet"
        onPress={() => properties.navigation.goBack()}
      />
    </Container>
  )
}

export default TransactionConfirmedScreen
