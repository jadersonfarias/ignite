import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCoutdownButton,
  StopCoutdownButton,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
// import { useState, createContext } from 'react'

import { NewCycleForm } from './Components/NewCycleForm'
import { Countdown } from './Components/Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CycleContext'

// controller / uncontrolled     controller: mantem o conteudo atualizado  por qualquer mudança
// uncotrolled: não monitora o valor apenas quando o usuario pede
// register: pega o name e retorna = onchange () => void, onBlur () => void, onFocus () => void etc...
// watch: atualiza o valor em tempo real

const newCycleFormValidationShema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationShema>

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    // posso usar formaState para pegar o valor do pelo zod
    resolver: zodResolver(newCycleFormValidationShema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm // funcionalidade do useForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCoutdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interouper
          </StopCoutdownButton>
        ) : (
          <StartCoutdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCoutdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
