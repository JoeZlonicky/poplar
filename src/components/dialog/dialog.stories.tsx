import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./dialog";

const meta: Meta = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: "Dialog Title",
    descripton: "Dialog Description",
    alignment: "center",
  },
};
