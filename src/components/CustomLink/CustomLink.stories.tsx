import { Meta, StoryObj } from '@storybook/react';

import { LinkProps, MemoryRouter } from 'react-router-dom';

import ThemeProvider from '@/styles/ThemeProvider';

import StoryWrapper from '../StoryWrapper/StoryWrapper';
import { CustomLink } from './CustomLink';

export default {
  title: 'Components/CustomLink',
  component: CustomLink,
  decorators: [
    Story => (
      <MemoryRouter>
        <ThemeProvider>
          <StoryWrapper>{Story()}</StoryWrapper>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
  args: {
    to: '/test',
    children: 'Test Link',
  },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
