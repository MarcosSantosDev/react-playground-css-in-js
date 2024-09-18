import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Input, { InputProps } from './Input';

export default {
  title: 'components/Input',
  component: Input,
  decorators: [Story => <AppThemeProvider>{Story()}</AppThemeProvider>],
  args: {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter your username',
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number'],
      },
    },
    placeholder: { control: 'text' },
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
