import * as React from "react";
//import { css } from "@emotion/react"
import { Meta, StoryFn } from "@storybook/react"
import { GridGenerator, Hexagon, HexGrid, Layout, Pattern } from "../.."
import { COLORS } from "../colors"

type PathType = typeof Pattern

export default {
  title: "Components/Pattern",
  component: Pattern,
} as Meta<PathType>

const hexas = GridGenerator.hexagon(10)

const Template: StoryFn<PathType> = () => (
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
        {hexas.map((hex, i) => (
          <Hexagon
            fillOpacity="0.6"

            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            fill={hex.r % 2 === 0 ? "pattern1" : "pattern2"}
          />
        ))}
      </>
      <Pattern id="pattern1" link="https://picsum.photos/200?image=80" />
      <Pattern id="pattern2" link="https://picsum.photos/200?image=82" />
    </Layout>
  </HexGrid>
)
export const Default = Template.bind({})

// import * as React from "react"
// import { ComponentStory, ComponentMeta } from "@storybook/react"
// import {
//   HexGrid,
//   Layout,
//   Hexagon,
//   GridGenerator,
//   Pattern,
//   Text,
//   HexUtils,
// } from "../.."
// import { css, jsx } from "@emotion/react"

// export default {
//   title: "PatternSwap",
//   component: Hexagon,
// } as ComponentMeta<typeof Hexagon>

// const initialHexagons = GridGenerator.hexagon(2)
// // Set additional data for hexagons
// initialHexagons.forEach((hex) => {
//   hex.pattern = "pattern1"
// })

/*

css={css`
  fill: ;
  fill-opacity: 0.6;

  &:hover {
    fill: #7be3f6;
    fill-opacity: 0.9;
  }
  polygon {
    stroke: #7be3f6;
    stroke-width: 0.2;
    transition: fill-opacity 0.5s;
  }
`}*/
