import React from "react";
import type { Meta } from "@storybook/react";
import { HexGrid, Hexagon } from "../../../src/";

const meta = {
    title: "Text/Hexagon Two",
    component: Hexagon,
} satisfies Meta<typeof Hexagon>;

export default meta;

export const Primary = {
    render: () => (
        <>
            <HexGrid>
                <Hexagon q={0} r={0} s={0} />
            </HexGrid>
        </>
    )
}

