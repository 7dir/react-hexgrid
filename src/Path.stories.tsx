import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hexagon from "./Hexagon/Hexagon";
import { HexGrid, Layout, Path, GridGenerator, Hex } from "./";
import type { PathProps } from "./Path";


const meta = {
    title: "Stories/Path",
    component: Path
} as Meta<typeof Path>

export default meta;

type Story = StoryObj<typeof Path>

const args: PathProps = {
    start: new Hex(5, -3, -2),
    end: new Hex(-5, 1, 4),
    strokeWidth: "0.1em",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "black",
}

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%">
                <Layout flat={false} spacing={1.1}>
                    {GridGenerator.hexagon(10).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} cellStyle={{ fill: "red" }} />
                    ))}
                    <Path
                        fill="none"
                        {...args}
                    />
                </Layout>
            </HexGrid>
        </>
    )
}

export const FillTrue: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%">
                <Layout flat={false} spacing={1.1}>
                    {GridGenerator.hexagon(10).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} cellStyle={{ fill: "red" }} />
                    ))}
                    <Path
                        fill="blue"
                        {...args}
                    />
                </Layout>
            </HexGrid>
        </>
    )
}