import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './style'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

CheckBox.displayName = 'Checkbox'
