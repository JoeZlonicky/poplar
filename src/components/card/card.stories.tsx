import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Hello, world",
  },
};
