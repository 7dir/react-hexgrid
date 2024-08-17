import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { HexGrid, Layout } from "../../../src"
import { Hexagon } from "../../../src/Hexagon/Hexagon"
import { COLORS } from "../../../src/stories/colors"

export default {
  title: "A/Hexagon",
  component: Hexagon,
} satisfies Meta<typeof Hexagon>

const Template: StoryFn<typeof Hexagon> = () => {
  return (
    <div>
      <h1>Basic example of hexagon coordinates usage</h1>
      <HexGrid
        style={{
          border: `2px solid ${COLORS.gray[7]}`,
          background: COLORS.gray[2],
        }}
        width="100%"
        height={400}
      >
        <Layout>
          {/* the hexagon is rendered at the q,r,s coordinates. In this case in the origin (0,0) in the svg space */}
          <Hexagon r={0} q={0} s={0} style={{ fill: COLORS.dark[3] }} />
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Basic: StoryFn<typeof Hexagon> = Template.bind({})
