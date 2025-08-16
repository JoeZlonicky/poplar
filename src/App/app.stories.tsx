import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { App } from "./App";

const meta: Meta = {
  title: "App/App",
  component: App,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: /Increase Count/i });
    const count = canvas.getByText(/^Count is/i);

    expect(count.textContent).toBe("Count is 0");
    await userEvent.click(button);
    expect(count.textContent).toBe("Count is 1");
  },
};
