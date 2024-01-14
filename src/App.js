import { Sky } from "drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "use-cannon";

import Cubes from "./components/Cubes";
import { Ground } from "./components/Ground";
import { Hud } from "./components/Hud";
import { Player } from "./components/Player";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <p>Test</p>
      </div>
      <Canvas
        shadowMap
        sRGB
      >
        <Sky
          distance={[90000]}
          sunPosition={[300, 100, 300]}
        />
        <ambientLight intensity={0.25} />
        <pointLight
          castShadow
          intensity={0.7}
          position={[100, 100, 100]}
        />
        <Hud position={[0, 0, -2]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground position={[0, 0.5, 0]} />
          <Player position={[120, 3, 70]} />
          <Cubes />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
