import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hexagon from "./Hexagon/Hexagon";
import { GridGenerator } from 'react-hexgrid';

import { SiNginxproxymanager } from "react-icons/si";
import { SiNginx } from "@react-icons/all-files/si/SiNginx";


import { HexGrid, Layout, Pattern } from "./"

const meta = {
    title: "Stories/Pattern",
    component: Pattern
} as Meta<typeof Pattern>

export default meta;

type Story = StoryObj<typeof Pattern>

const onClickHexagon = (e, h) => {
    console.log(`e.target`)
    console.log(e.target)
    console.log(`h`)
    console.log(h)
    alert("ALERT CLICK")
}

export const Default: Story = {
    render: () => (

        <>
            <style>{`
                                .heavy_hexagon {
                                    font-size: 3px;
                                    cursor: pointer;
                                }

                                .tutorial {
                                    stroke: grey;
                                }
                                
                                .tutorial .hexagon:hover polygon {
                                    stroke: rebeccapurple;
                                    fill: red;
                                }

                                .tutorial .hexagon:hover .heavy_hexagon {
                                    stroke: rebeccapurple;
                                    fill: white;
                                }
                                
                                .tutorial .hexagon .heavy_hexagon {
                                    stroke: grey;
                                    fill: black;
                                }
                                
                                
                                .tutorial .hexagon polygon {
                                    stroke: grey;
                                    fill: white;
                                }
                                

                            `}</style>

            <HexGrid width="100%">
                <Layout spacing={1.1}>
                    {/* <Pattern id="my-pattern2" x={0.18} y={0.13} rc={<SiNginxproxymanager size={"0.8em"} color={"black"} title="SiNginxproxymanager" />} /> */}
                    {/* <Pattern id="my-pattern2" x={0.18} y={0.13} rc={<SiNginx size={"0.8em"} color={"black"} title="SiNginx" />} /> */}

                    {GridGenerator.hexagon(2).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className="tutorial" fill="my-pattern2"
                            cellStyle={{
                                fill: "my-pattern2",
                                transition: "fill 0.1s"
                            }}
                            onClick={onClickHexagon}
                        // Hexagon
                        // onMouseEnter={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                        //     (e.target as SVGElement).style.fill = "blue"
                        // }
                        // onMouseLeave={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                        //     (e.target as SVGElement).style.fill = "my-pattern2"
                        // }
                        >
                            <text text-anchor="middle" fill="grey" strokeWidth={0} className="heavy_hexagon">
                                q={hex.q} r={hex.r} s={hex.s}
                            </text>
                            {/* <text y={5} text-anchor="middle" fill="green" stroke="white" className="heavy_hexagon">
                                Desc
                            </text> */}
                            {/* <SiNginxproxymanager size={"1.5em"} color={"black"} title="nginx"/> */}
                            {/* <SiNginx size={"0.8em"} color={"black"} title="SiNginx" /> */}
                        </Hexagon>
                    ))}
                </Layout>
            </HexGrid>

            <HexGrid width="100%">
                <Layout>
                    <Pattern id="my-pattern" link="http://192.124.171.94:81/images/favicons/favicon-32x32.png" />
                    <Hexagon q={0} r={0} s={0} fill="my-pattern" />
                </Layout>
            </HexGrid>

        </>
    )
}