import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { App } from "./app";

const meta: Meta = {
  title: "App/App",
  component: App,
  render: () => (
    <div style={{ height: "calc(100vh - 32px)" }}>
      <App />
    </div>
  ),
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const toggleButton = canvas.getByRole("button", { name: "Toggle" });
    const startedText = "Game started";

    expect(canvas.queryByText(startedText)).toBeNull();

    await userEvent.click(toggleButton);

    expect(canvas.queryByText(startedText)).toBeInTheDocument();

    await userEvent.click(toggleButton);

    expect(canvas.queryByText(startedText)).toBeNull();
  },
};
