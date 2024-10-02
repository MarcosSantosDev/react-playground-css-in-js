import { Meta, StoryObj } from '@storybook/react';

import { StoryWrapper } from '@/components/app';
import ThemeProvider from '@/styles/ThemeProvider';

import { Button } from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  decorators: [
    Story => (
      <ThemeProvider>
        <StoryWrapper>{Story()}</StoryWrapper>
      </ThemeProvider>
    ),
  ],
  args: {
    variant: 'primary',
    size: 'md',
    align: 'left',
    icon: {
      name: 'inbox',
      align: 'left',
    },
    disabled: false,
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Property to add label',
      defaultValue: 'Click me!',
    },
    align: {
      type: 'string',
      defaultValue: 'left',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: ['left', 'center', 'right', 'space-between'],
    },
    variant: {
      type: 'string',
      defaultValue: 'primary',
      description: 'Property to control button variation',
      control: 'inline-radio',
      options: ['primary', 'secondary', 'error'],
    },
    size: {
      type: 'string',
      defaultValue: 'sm',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      description:
        'Property to add icon on button: align: left or right, name: inbox',
      control: 'object',
      options: {
        name: 'inbox',
        align: 'left',
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
