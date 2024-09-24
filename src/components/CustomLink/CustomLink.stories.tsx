import { Meta, StoryObj } from '@storybook/react';

import { LinkProps, MemoryRouter } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import StoryWrapper from '../StoryWrapper/StoryWrapper';
import { CustomLink } from './CustomLink';

export default {
  title: 'Components/CustomLink',
  component: CustomLink,
  decorators: [
    Story => (
      <MemoryRouter>
        <AppThemeProvider>
          <StoryWrapper>{Story()}</StoryWrapper>
        </AppThemeProvider>
      </MemoryRouter>
    ),
  ],
  args: {
    to: '/test',
    children: 'Test Link',
  },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
