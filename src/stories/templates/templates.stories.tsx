import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Pattern,
  Text,
  HexUtils,
  Hex,
} from "../.."
import { configurations } from "./configurations"
import "./App.css"

export default {
  title: "Example/Templates",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const initialConfig = configurations["hexagon"]
const generator = GridGenerator.getGenerator(initialConfig.map)
const initialHexagons: Hex[] = generator.apply(this, initialConfig.mapProps)

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState(initialHexagons)
  const [config, setConfig] = React.useState<any>(initialConfig)

  const layout = config.layout
  const size = { x: layout.width, y: layout.height }
  return (
    <div className="App">
      <h2>Select grid type and configuration from dropdown.</h2>
      <div>
        <strong>Template: </strong>
        <select
          onChange={(event) => {
            const name = event.currentTarget.value
            const config = configurations[name]
            const generator = GridGenerator.getGenerator(config.map)
            const hexagons = generator.apply(this, config.mapProps)
            setConfig(config)
            setHexagons(hexagons)
          }}
        >
          {Object.keys(configurations).map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      </div>
      <hr />
      <HexGrid width={config.width} height={config.height}>
        <Layout
          size={size}
          flat={layout.flat}
          spacing={layout.spacing}
          origin={config.origin}
        >
          {
            // note: key must be unique between re-renders.
            // using config.mapProps+i makes a new key when the goal template chnages.
            hexagons.map((hex, i) => (
              <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>
                <Text>{HexUtils.getID(hex)}</Text>
              </Hexagon>
            ))
          }
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
