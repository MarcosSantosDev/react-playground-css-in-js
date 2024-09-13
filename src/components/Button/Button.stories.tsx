import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Button } from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
  args: {
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Property to add label',
      defaultValue: 'Click me!',
    },
    variant: {
      type: 'string',
      defaultValue: 'primary',
      description: 'Property to control button variation',
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    size: {
      type: 'string',
      defaultValue: 'small',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
