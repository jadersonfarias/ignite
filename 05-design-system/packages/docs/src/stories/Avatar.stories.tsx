import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@jf-ignite-ui/react/src";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/jadersonfarias.png',
    alt: 'Jaderson Farias'
  },

} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
};


