import * as Tooltip from '@radix-ui/react-tooltip'
import {  styled } from '../../styles'




export const TooltipContainer = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
    all: 'unset',
  })

  export const TooltipPortal = styled(Tooltip.Portal, {})

  export const TooltipContent = styled(Tooltip.Content, {
    borderRadius: '$xs',
    padding: '$3 $4',
    fontSize: '$sm',
    fontFamily: '$default',
    lineHeight: '$base',
    color: '$white',
    backgroundColor: '$gray900',
    filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

 
  })



  export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: '$gray900',
    width: '$4',
    height: '$2',
  })