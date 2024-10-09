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
            <HexGrid width="100%">
                <Hexagon q={0} r={0} s={0} style={{ fill: "red" }} />
            </HexGrid>
        </>
    )
}

export const Event: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Hexagon q={0} r={0} s={0} cellStyle={{ fill: "red", transition: "fill 0.1s" }}
                    onMouseEnter={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                        (e.target as SVGElement).style.fill = "blue"
                    }
                    onMouseLeave={(e) =>
                        (e.target as SVGElement).style.fill = "red"
                    }
                />
            </HexGrid>
        </>
    )
}

export const DragAndDrop: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%" >
                {/* drag and drop the colors! }
                {/* the drag source */}

                <Hexagon q={0} r={0} s={0} style={{ fill: "red" }}
                    onDragStart={() => { }}
                />

                {/* the drop target */}

                <Hexagon q={1} r={0} s={0} style={{ fill: "blue" }}
                    onDragStart={(e) => { e.preventDefault(); }}
                    onDragOver={(e) => { e.preventDefault(); }}
                    onDrop={(event: React.DragEvent<SVGElement>) => {
                        (event.target as SVGElement).style.fill = "red";
                        console.log("dropped!");
                    }}
                />
            </HexGrid>
        </>
    )
}
