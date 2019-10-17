export class TransactionModel {
  hash = ''
  block = 0
  date: Date = new Date()

  from = ''
  to = ''
  type = ''
  note = ''

  amount = 0

  tx = 0
  utxo = 0

  confirmed = false
}
