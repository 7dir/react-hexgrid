import React from "react"
import type { Meta, StoryFn } from "@storybook/react";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from "./";

const meta = {
    title: "Stories/Events",
    component: Hexagon,
} satisfies Meta<typeof Hexagon>;

export default meta;

type Story = StoryFn<typeof Hexagon>;

