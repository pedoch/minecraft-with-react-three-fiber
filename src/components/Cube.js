import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "../textures";

export const Cube = ({ position, type, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    ...props,
  }));
  const skinArr = [1, 2, 3, 4, 5, 6];
  return (
    <mesh castShadow ref={ref}>
      {skinArr.map((_, index) => (
        <meshStandardMaterial
          attachArray="material"
          map={textures[type]}
          key={index}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};
