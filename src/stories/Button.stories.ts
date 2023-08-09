import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    chromatic: {
      modes: {
        'MY SUPER LIGHT THEME': {
          theme: 'light',
          viewport: '200',
          language: 'css',

        },
        dark: { theme: 'dark' },
        dark2: { theme: 'dark' },
      }
    }
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    }
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
