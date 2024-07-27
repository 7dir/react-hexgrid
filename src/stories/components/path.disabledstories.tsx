import React from "react";
import { Meta, StoryFn } from "@storybook/react"
import { GridGenerator, Hex, Hexagon, HexGrid, Layout, Path } from "../.."
import { COLORS } from "../colors"

type PathType = typeof Path

export default {
  title: "Components/Path",
  component: Path,
} as Meta<PathType>

const hexas = GridGenerator.hexagon(10)

const Template: StoryFn<PathType> = (args) => (
  <HexGrid
    style={{
      border: `4px solid ${COLORS.gray[8]}`,
      background: COLORS.gray[1],
    }}
    width="100%"
    height={800}
  >
    <Layout spacing={1.05}>
      <>
        {hexas.map(({ q, r, s }) => (
          <Hexagon
            fill={COLORS.dark[2]}
            onClick={() => console.log("clicked", { q, r, s })}
            q={q}
            r={r}
            s={s}
          />
        ))}
      </>
      <Path
        strokeWidth="0.1em"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...args}
      />
    </Layout>
  </HexGrid>
)

export const Basic: StoryFn<PathType> = Template.bind({})
Basic.args = {
  start: new Hex(5, -3, -2),
  end: new Hex(-5, 1, 4),
}

/*
css={css`
  fill: none;
  stroke: ${COLORS.blue[8]};
  stroke-width: 0.1em;
  stroke-linecap: round;
  stroke-linejoin: round;
`}
*/
