import type { Meta, StoryObj } from "@storybook/react-vite";
import { fireEvent, within } from "@testing-library/react";
import { expect } from "storybook/test";
import { App } from "./App";

const meta: Meta<typeof App> = {
  title: "App/App",
  component: App,
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Increase Count/i });
    const count = canvas.getByText(/^Count is/i);

    expect(count.textContent).toBe("Count is 0");
    fireEvent.click(button);
    expect(count.textContent).toBe("Count is 1");
  },
};
