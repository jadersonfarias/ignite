import type { Meta, StoryObj } from "@storybook/react"
import { Box, Text, TextArea, TextAreaProps } from "@jf-ignite-ui/react/src"

export default {
    title: 'Form/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (StoryObj) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm">Obsertvations</Text>
                    {StoryObj()}
                </Box>
            )
        }
    ]
} as Meta<TextAreaProps>


export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: "Add any observations...",
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}

