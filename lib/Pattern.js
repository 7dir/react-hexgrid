import React from "react";
import Point from "./models/Point";
const defaultSize = new Point(10, 10);
/**
 * Defines a `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export function Pattern({ id, x = 0, y = 0, link, rc, size = defaultSize }) {
    return (React.createElement("defs", null,
        React.createElement("pattern", { id: id, patternUnits: "objectBoundingBox", x: x, y: y, width: size.x, height: size.y },
            link && (React.createElement("image", { xlinkHref: link, x: 0, y: 0, width: size.x * 2, height: size.y * 2 })),
            rc && (React.createElement(React.Fragment, null, rc)))));
}
export default Pattern;
//# sourceMappingURL=Pattern.js.map