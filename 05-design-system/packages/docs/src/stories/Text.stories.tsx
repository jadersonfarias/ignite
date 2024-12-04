import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@jf-ignite-ui/react/src";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto deleniti, rem mollitia ex beatae amet fugiat harum repellat similique sint? Quis, eius ea molestiae voluptatum iusto dolore! Sequi, assumenda",
  },
  argTypes: {

    size: {
      options: ['xs', 'xxs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: 'inline-radio',
    },

  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
