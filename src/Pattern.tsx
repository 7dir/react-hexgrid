import React from "react"
import Point from "./models/Point"
import { Size } from "./Layout"

export type PatternProps = {
  id: string
  link?: string
  rc?: React.ReactElement
  // ReactElement<any, any>
  size?: Size
}
const defaultSize = new Point(10, 10)

/**
 * Defines a `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export function Pattern({ id, link, rc, size = defaultSize }: PatternProps) {
  return (
    <defs>
      <pattern
        id={id}
        patternUnits="objectBoundingBox"
        x={0}
        y={0}
        width={size.x}
        height={size.y}
      >
        {link && (<image
          xlinkHref={link}
          x={0}
          y={0}
          width={size.x * 2}
          height={size.y * 2}
        />)}
        {rc && (<>{rc}</>)}
      </pattern>
    </defs>
  )
}

export default Pattern
