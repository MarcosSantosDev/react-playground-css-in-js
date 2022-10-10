import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '../../../../styles/AppThemeProvider';
import { Button, buttonSize } from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'Components/Structure/Button',
  component: Button,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
  args: {
    variation: 'primary',
    size: 'small',
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Property to add label',
      defaultValue: 'Click me!',
    },
    variation: {
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
      options: Object.keys(buttonSize),
    },
  },
} as Meta<ButtonProps>;

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
};
