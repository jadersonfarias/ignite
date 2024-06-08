import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' // usado para tipos o typescript e pode ser usado em qualquer lugar da aplicação

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariant = {
  // aki atribui cor para as variaveis
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'blue',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => {
    return css`
      background-color: ${ButtonVariant[props.variant]};
    `
  }} */
`
