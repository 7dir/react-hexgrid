import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Hexagon from "./Hexagon";
import { HexGrid, Layout } from "../"

const meta = {
    title: "Stories/Hexagon",
    component: Hexagon,
} satisfies Meta<typeof Hexagon>

export default meta;

type Story = StoryObj<typeof Hexagon>

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%">
                <Layout>
                    <Hexagon q={0} r={0} s={0} cellStyle={{ fill: "red" }} />
                </Layout>
            </HexGrid>
        </>
    )
}
