import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@gganbu-org/spinner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs'],
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

export const Basic: Story = {
  args: {
    size: 'md',
    theme: 'primary',
  },
};

export function Theme() {
  return (
    <>
      <Spinner key="bordered" theme="primary" />
      <Spinner key="solid" theme="secondary" />
      <Spinner key="solid" theme="success" />
      <Spinner key="solid" theme="danger" />
      <Spinner key="solid" theme="warning" />
      <Spinner key="solid" theme="current" />
    </>
  );
}

export function Size() {
  return (
    <>
      <Spinner size="sm" theme="primary" />
      <Spinner size="md" theme="danger" />
      <Spinner size="lg" theme="success" />
    </>
  );
}

export function Label() {
  return <Spinner label="label" />;
}
