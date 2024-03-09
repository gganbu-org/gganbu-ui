import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@danji/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    size: 'md',
  },
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  /**
   * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
   * If you are not concerned with linting, you may use an arrow function.
   */
  render: function Render({ color }) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        <Spinner size="sm" color="red.600" />
        <Spinner size="md" color="blue.600" />
        <Spinner size="lg" color="green.600" />
      </div>
    );
  },
};
