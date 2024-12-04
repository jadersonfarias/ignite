import { ComponentProps } from 'react'
import {
    TooltipArrow,
    TooltipContainer,
    TooltipContent,
    TooltipPortal,
    TooltipRoot,
    TooltipTrigger,
} from './styles'


export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
    content: string
    sideOffset?: number
    triggerAsChild?: boolean
   
}



export function Tooltip({ 
    content,
    triggerAsChild = false,
    sideOffset = 3,
  
    ...props 
}: TooltipProps
) {

 
    return (
        <TooltipContainer delayDuration={300}>
            <TooltipRoot>
                <TooltipTrigger asChild={triggerAsChild}>
                    {props.children}
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipContent
                      sideOffset={sideOffset}
                      {...props}
                    >
                        {content}
                    <TooltipArrow />
                    </TooltipContent>
                </TooltipPortal>
            </TooltipRoot>
        </TooltipContainer>
    )
}

Tooltip.displayName = 'Tooltip'