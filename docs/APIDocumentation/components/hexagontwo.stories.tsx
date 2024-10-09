import React from "react";
import type { Meta } from "@storybook/react";
import { HexGrid, Hexagon, Layout } from "../../../src/";
import { Point } from "../../../src/models/Point";

const meta = {
    title: "Text/Hexagon Two",
    component: Hexagon,
} satisfies Meta<typeof Hexagon>;

export default meta;

export const Primary = {
    render: () => (
        <>
            <HexGrid style={{ width: "100vw", height: "100vh" }}>
                <Layout size={new Point(window.innerWidth, window.innerHeight)}>
                    <Hexagon q={0} r={0} s={0} cellStyle={{ fill: "red" }} />
                </Layout>
            </HexGrid>
        </>
    )
}

