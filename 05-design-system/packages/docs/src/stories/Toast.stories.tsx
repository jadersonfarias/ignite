import { Toast, ToastProps } from '@jf-ignite-ui/react/src'
import { useArgs } from '@storybook/client-api'
import type { StoryFn, Meta } from '@storybook/react'

export default {
    title: 'Data Display/Toast',
    component: Toast,
    argTypes: {
        open: {
            control: 'boolean',
        },
    },
    args: {
        title: 'Agendamento Realizado',
        description: 'Quarta-feira, 16 de abril às 15h',
        open: true,
    },
    
} as Meta<ToastProps>

const Template: StoryFn<ToastProps> = ({ open, ...args }) => {
    const [, updateArgs] = useArgs()
    const handleOpenChange = (isOpen: boolean) => {
        updateArgs({ open: isOpen })
    }

    return <Toast {...args} open={open} onOpenChange={handleOpenChange} />
}

export const Primary = Template.bind({})
Primary.args = {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 16 de abril às 15h',
    open: true,
}