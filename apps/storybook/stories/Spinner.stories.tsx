import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@gganbu-org/spinner';
import { systemPropList } from '@gganbu-org/styled';
import { generateArgTypesToDisable } from '../utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    ...generateArgTypesToDisable(systemPropList),
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

export const Basic: Story = {
  args: {
    size: 'md',
    theme: 'primary',
  },
};

export function Theme() {
  return (
    <>
      <Spinner theme="primary" />
      <Spinner theme="secondary" />
      <Spinner theme="success" />
      <Spinner theme="danger" />
      <Spinner theme="warning" />
      <Spinner theme="current" />
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
