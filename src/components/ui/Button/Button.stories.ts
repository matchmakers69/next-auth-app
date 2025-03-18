import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const description = `
## Description

A Button component for the Lifecraft design system.

## ⚠️ Browser support

This component works out of the box on all modern browsers.

## Status:
- built on MUI
- styled with Tailwind
- tested with Vitest
`;

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
    layout: "centered",
  },
  tags: ["autodocs", "button", 'mui', 'tailwind'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button
export const Primary: Story = {
  args: {
    size: "default",
    variant: "outline",
    children: "Click Me",
  },
};

// Default button
export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
    children: "Default Button",
  },
};

// Destructive button (for delete or critical actions)
export const Destructive: Story = {
  args: {
    size: "default",
    variant: "destructive",
    children: "Delete",
  },
};

// Primary variant with a larger size
export const PrimaryLarge: Story = {
  args: {
    size: "lg",
    variant: "primary",
    children: "Large Primary Button",
  },
};

// Outline variant with a small size
export const OutlineSmall: Story = {
  args: {
    size: "sm",
    variant: "outline",
    children: "Small Outline Button",
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    size: "default",
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Link variant
export const Link: Story = {
  args: {
    size: "default",
    variant: "link",
    children: "Link Button",
  },
};

// Social button (for social media or third-party actions)
export const Social: Story = {
  args: {
    size: "sm",
    variant: "social",
    children: "Login with Google",
  },
};

// Icon button (just an icon, no text)
export const Icon: Story = {
  args: {
    size: "icon",
    variant: "default",
    children: "🔍", // Using an emoji as an icon
  },
};
