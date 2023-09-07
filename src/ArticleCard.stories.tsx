import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';

const meta = {
  title: 'Example/ArticleCard',
  component: ArticleCard,
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Can coffee make you a better developer?',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image: '/card-left.jpg',
    author: { name: 'Jonathan Reinink', image: '/jonathan.jpg' },
    publishDate: '2023-08-18T04:00:00.000Z',
    type: 'FREE',
  },
};

export const MembersOnly: Story = {
  args: {
    ...Base.args,
    type: 'MEMBERS_ONLY',
  },
};
