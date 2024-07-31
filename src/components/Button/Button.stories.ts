import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GoArrowDownRight } from "react-icons/go";

import Button from "./Button";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "small",
    label: "Primary Watch The Trailer",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Watch The Trailer",
    size: "medium",
    variant: "secondary",
  },
};

export const IconButton: Story = {
  args: {
    label: "Secondary Watch The Trailer",
    size: "medium",
    variant: "primary",
    Icon: GoArrowDownRight,
  },
};
