import { nanoid } from "nanoid";
import create from "zustand";
import { MyIntro } from "../presets";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [...MyIntro()],
  // cubes: [...MyOccupation()],
  // cubes: [
  //   {
  //     pos: [88, 1, 141],
  //     texture: "dirt",
  //   },
  // ],
  addCube: (x, y, z) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        { key: nanoid(), pos: [x, y, z], texture: state.texture },
      ],
    })),
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [_x, _y, _z] = cube.pos;
        return _x !== x || _y !== y || _z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    set((state) => ({
      texture,
    }));
  },
  saveWorld: () =>
    set((state) => {
      setLocalStorage("world", state.cubes);
    }),
}));
