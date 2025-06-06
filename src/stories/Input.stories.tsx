import { FocusBox, inputlineClassName } from '#src/components/Input';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/input',
  component: FocusBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof FocusBox>;

export default meta;
type Story = StoryObj<typeof FocusBox>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    children: <input className={inputlineClassName} />,
  },
};

export const Large: Story = {
  args: {
    'data-size': 'xl',
    children: <input className={inputlineClassName} />,
  },
};

export const Small: Story = {
  args: {
    'data-size': 's',
    children: <input className={inputlineClassName} />,
  },
};
