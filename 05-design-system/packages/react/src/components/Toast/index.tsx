import { X } from 'phosphor-react'
import {
    ToastClose,
    ToastContainer,
    ToastDescription,
    ToastRoot,
    ToastTitle,
    ToastViewport,
} from './styles'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
    title: string
    description: string
    duration?: number
    open?: boolean
    onOpenChange?(open: boolean): void
}

export function Toast({
    title,
    description,
    duration = 5000,
    onOpenChange,
    open,
}: ToastProps) {
    return (
        <ToastContainer duration={duration}>
            <ToastRoot open={open} onOpenChange={onOpenChange}>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
                <ToastClose>
                    <X size={12} />
                </ToastClose>
            </ToastRoot>

            <ToastViewport />
        </ToastContainer>
    )
}

Toast.displayName = 'Toast'