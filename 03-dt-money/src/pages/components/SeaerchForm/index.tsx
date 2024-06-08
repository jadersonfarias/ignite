import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../context/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  //const { fetchTransactions } = useContext(TransactionContext)
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInput) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por Transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitted}>
        {' '}
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

// Exemplo só com o fetch

// fetch("http://localhost:3000/transactions")
// .then(response => response.json())
// .then(data => {
//   console.log(data)
// })
