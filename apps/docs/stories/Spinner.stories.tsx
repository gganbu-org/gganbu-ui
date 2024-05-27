import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@danji/components';
import { stylePropList } from '@danji/css';
import { generateArgTypesToDisable } from './stories.utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    ...generateArgTypesToDisable(stylePropList),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          gap: '4px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    size: 'md',
    theme: 'success',
  },
};

export const theme = () => (
  <>
    <Spinner key="bordered" theme="primary" />
    <Spinner key="solid" theme="secondary" />
    <Spinner key="solid" theme="success" />
    <Spinner key="solid" theme="danger" />
    <Spinner key="solid" theme="warning" />
    <Spinner key="solid" theme="current" />
  </>
);

export const size = () => (
  <>
    <Spinner size="sm" theme="primary" />
    <Spinner size="md" theme="danger" />
    <Spinner size="lg" theme="success" />
  </>
);

export const label = () => <Spinner label="label" />;
