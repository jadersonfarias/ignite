
import { useMemo } from 'react'
import { TransactionContext } from '../context/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  //const { transactions } = useContext(TransactionContext)
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])
  
  return summary
}




//sem o useMemo
// const summary = transactions.reduce(
//   (acc, transaction) => {
//     if (transaction.type === 'income') {
//       acc.income += transaction.price
//       acc.total += transaction.price
//     } else {
//       acc.outcome += transaction.price
//       acc.total -= transaction.price
//     }

//     return acc
//   },
//   {
//     income: 0,
//     outcome: 0,
//     total: 0,
//   },
// )

// return summary