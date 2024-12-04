import { Box, Tooltip, TooltipProps } from '@jf-ignite-ui/react/src'
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Data Display/Tooltip',
    component: Tooltip,
    args: {
        children: '14',
    },

    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        width: 'fit-content',
                        flexDirection: 'column',
                        gap: '$2',

                        color: 'White',
                        fontFamily: '$default',
                    }}
                >
                    <Story />
                </Box>
            )
        },
    ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    args: {
        content: '14 de março - Disponível',
    },
}