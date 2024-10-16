import { Hexagon, HexGrid, GridGenerator, Hex } from 'react-hexgrid';
import { useState, useRef } from 'react';
import { animated, useSprings, useSpring, easings, useSpringRef, useChain, useTrail } from 'react-spring';
import "./App.css";

const sat = 212;
const globalCenter = new Hex(0, 0, 0);
const AnimatedHexagon = animated(Hexagon);
// generate a continuous spiral by making rings, rotating them to line up in the same 
// place, and then concatenating them together
const ring1 = GridGenerator.ring(globalCenter, 1);
const ring2 = GridGenerator.ring(globalCenter, 2);
const pivotHex = ring2.filter((hex) => hex.s === 0)[0];
const pivotIndex = ring2.indexOf(pivotHex);
const ring2Pivoted = ring2.slice(pivotIndex - 1).concat(ring2.slice(0, pivotIndex - 1));
const spiral = [globalCenter, ring1, ring2Pivoted].flat();
spiral.shift(); // remove the center hex

export default function App() {

  const logoSpring = useSpring({
    from: {
      opacity: 0,
      rotate: 0,
      scale: 0,
    },
    to: {
      opacity: 1,
      rotate: 360,
      scale: 1,
    },
    //loop: { reverse: true },
    config: { precision: 0.0001 }
  });

  // text spring to start everything
  const textSpringRef = useSpringRef();
  const { textSpring } = useSpring({
    ref: textSpringRef,
    from: { textSpring: 0 },
    textSpring: 1,
    config: { duration: 4000, easing: easings.easeInOutQuint, },
  })

  //const [spiralOpacity, setSpiralOpacity] = useState(1);

  const spiralSpringRef = useSpringRef();
  const [spiralSpring, spiralSpringAPI] = useSprings(
    spiral.length,
    (i) => ({
      ref: spiralSpringRef,
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 100 * i,
    }),
  );


  useChain([textSpringRef, spiralSpringRef], [0, 1], 1700);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '95vh', position: "absolute", zIndex: "-5" }}>

        <HexGrid width="150px" height="150px" style={{ "outline": "0px solid black", background: "transparent" }}>
          <AnimatedHexagon
            radius={46}
            q={0}
            r={0}
            s={0}
            style={{ ...logoSpring, fill: "transparent" }}
            stroke="#61dbfb"
            strokeWidth="8px"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="0" r="10" fill="#61dbfb" />
        </HexGrid>

        <animated.div style={{
          width: textSpring.to({
            range: [0, 0.2, 0.5, 0.9, 1],
            output: [0, 600, 600, 600, 0],
          }),
          opacity: textSpring.to({
            range: [0, 0.2, 0.5, 0.9, 1],
            output: [0, 1, 1, 1, 0],
          }),
          fontSize: "75px", color: "#61dbfb", outline: "0px solid black", overflow: "hidden", textWrap: "nowrap"
        }}>react-hexgrid</animated.div>

        <HexGrid width="100vw" height="95vh" style={{ position: "absolute", zIndex: "-1" }}>
          {spiralSpring.map((props, index) => {
            const hex = spiral[index];
            return (
              <AnimatedHexagon
                radius={9}
                key={index}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                strokeWidth="2px"
                stroke={`hsl(${sat + (index * 20)} 95.1% 68.2%)`}
                strokeLinejoin="round"
                style={{
                  ...props,
                  fill: "transparent"
                }}
              />
            );
          })}
        </HexGrid>
      </div>
    </>
  );
}