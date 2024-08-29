import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Hexagon from "./Hexagon/Hexagon";
import { HexGrid, GridGenerator, Layout } from "./"

const meta = {
    title: "Stories/GridGenerator",
} satisfies Meta<typeof GridGenerator>

export default meta;

type Story = StoryObj<typeof GridGenerator>

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%">
                <Layout>
                    {GridGenerator.hexagon(2).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} cellStyle={{ fill: "red", stroke: "black", strokeWidth: "0.1" }} />
                    ))}
                </Layout>
            </HexGrid>
        </>
    )
}

