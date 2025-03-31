import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    title: "UI/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        href: { control: "text" },
        date: { control: "text" }
    }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: "My First Blog Post",
        description: "This is a short excerpt from the blog post.",
        href: "/blog/my-first-post",
        date: "2025-03-24"
    }
};
