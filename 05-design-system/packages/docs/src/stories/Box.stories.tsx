import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jf-ignite-ui/react/src/'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}
