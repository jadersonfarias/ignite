import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from '../components/SeaerchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionContext } from '../../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
 // const { transactions } = useContext(TransactionContext)
 const transactions = useContextSelector(TransactionContext, (context) => {
  return context.transactions
})


  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((Transaction) => {
              return (
                <tr key={Transaction.id}>
                  <td width="50%">{Transaction.description}</td>
                  <td>
                    <PriceHighlight variant={Transaction.type}>
                      {Transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(Transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{Transaction.type}</td>
                  <td>
                    {dateFormatter.format(new Date(Transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
