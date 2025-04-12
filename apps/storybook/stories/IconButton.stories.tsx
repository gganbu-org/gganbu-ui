import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@gganbu-org/icon-button';
import { systemPropList } from '@gganbu-org/styled';
import AppleIcon from '../components/AppleIcon';
import { generateArgTypesToDisable } from '../utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    ...generateArgTypesToDisable(systemPropList),
    children: { table: { disable: true } },
  },
  args: {
    isLoading: false,
    isDisabled: false,
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'sm',
    theme: 'primary',
    variant: 'solid',
    children: <AppleIcon />,
  },
};

export function Variant() {
  return (
    <>
      <IconButton variant="link">
        <AppleIcon />
      </IconButton>
      <IconButton variant="solid">
        <AppleIcon />
      </IconButton>
      <IconButton variant="ghost">
        <AppleIcon />
      </IconButton>
      <IconButton variant="outline">
        <AppleIcon />
      </IconButton>
    </>
  );
}

export function Rounded() {
  return (
    <IconButton rounded>
      <AppleIcon />
    </IconButton>
  );
}

export function Theme() {
  return (
    <>
      <IconButton theme="success">
        <AppleIcon />
      </IconButton>
      <IconButton theme="secondary">
        <AppleIcon />
      </IconButton>
      <IconButton theme="warning">
        <AppleIcon />
      </IconButton>
      <IconButton theme="danger">
        <AppleIcon />
      </IconButton>
      <IconButton theme="primary">
        <AppleIcon />
      </IconButton>
    </>
  );
}

export function Size() {
  return (
    <>
      <IconButton size="sm">
        <AppleIcon />
      </IconButton>
      <IconButton size="md">
        <AppleIcon />
      </IconButton>
      <IconButton size="lg">
        <AppleIcon />
      </IconButton>
    </>
  );
}

export function Disabled() {
  return (
    <IconButton disabled>
      <AppleIcon />
    </IconButton>
  );
}
