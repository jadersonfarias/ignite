import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        id="task"
        list="task-suggestions"
        type="task"
        disabled={!!activeCycle} // caso tenha um valor coverte para true se não false
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
        <option value="projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}
