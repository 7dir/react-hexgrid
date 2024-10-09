import React from "react";
import { HexGrid, Layout, Hexagon, GridGenerator, Path, HexUtils, Text, } from "../";
export default {
    title: "Stories/PathFinding",
    component: Hexagon,
};
const initialHexagons = GridGenerator.hexagon(4);
const Template = (args, { argTypes }) => {
    const [hexagons, setHexagons] = React.useState(initialHexagons);
    const [path, setPath] = React.useState({ start: null, end: null });
    return (React.createElement("div", { className: "pathfinding-example", style: {
            background: "#133b43",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        } },
        React.createElement("h2", null, "Pathfinding & active highlight"),
        React.createElement("p", null, "Click a tile to start drawing a path to your cursor. Click again to cancel."),
        React.createElement("p", null, "Hover around the board to see helper lines drawn."),
        React.createElement(HexGrid, { width: 1200, height: 800 },
            React.createElement(Layout, { size: { x: 6, y: 6 }, flat: false, spacing: 1.1, origin: { x: 0, y: 0 } },
                React.createElement(React.Fragment, null, hexagons.map((hex, i) => (React.createElement(Hexagon, { key: i, q: hex.q, r: hex.r, s: hex.s, className: hex.props ? hex.props.className : undefined, onMouseEnter: (event, source) => {
                        // Set the path's end on hover
                        // const { path, hexagons } = this.state;
                        const targetHex = source.state.hex;
                        path.end = targetHex;
                        // Color some hexagons
                        const coloredHexas = hexagons.map((hex) => {
                            hex.props = hex.props || {};
                            // Highlight tiles that are next to the target (1 distance away)
                            hex.props.className =
                                HexUtils.distance(targetHex, hex) < 2 ? "active" : "";
                            // If the tile is on same coordinate, add class specific to the coordinate name
                            hex.props.className += targetHex.q === hex.q ? " q " : "";
                            hex.props.className += targetHex.r === hex.r ? " r " : "";
                            hex.props.className += targetHex.s === hex.s ? " s " : "";
                            return hex;
                        });
                        setPath(path);
                        setHexagons(coloredHexas);
                        // this.setState({ path, hexagons: coloredHexas });
                    }, onClick: (e, source) => {
                        if (path.start == null) {
                            path.start = source.state.hex;
                        }
                        else {
                            path.start = null;
                            path.end = null;
                        }
                        setPath(path);
                    } },
                    React.createElement(Text, null, HexUtils.getID(hex)))))),
                React.createElement(Path, { start: path.start, end: path.end })))));
};
export const Default = Template.bind({});
//# sourceMappingURL=PathFinding.disabledstories.js.map