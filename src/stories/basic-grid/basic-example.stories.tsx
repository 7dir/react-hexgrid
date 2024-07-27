import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from "../.."
import "./basic-example.css"

export default {
  title: "Basic",
  component: Hexagon,
} as Meta<typeof Hexagon>

//parallelogram: q1 -> q2, r1 -> r2
const hexagons: Hex[] = GridGenerator.parallelogram(0, 1, 0, 1)

const Template: StoryFn<typeof Hexagon> = () => {
  return (
    <div className="basic-example">
      <h1>Basic example of HexGrid usage.</h1>
      <HexGrid>
        <Layout>
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default: StoryFn<typeof Hexagon> = Template.bind({})
