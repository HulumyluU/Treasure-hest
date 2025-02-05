// src/components/Obstacles.jsx
import { SPRITE_SIZE, OBSTACLES } from "../constants";

const Obstacles = () => {
  return (
    <>
      {OBSTACLES.map((obs, index) => (
        <img
          key={index}
          src={`../src/assets/map/absolute${obs.img}`}
          alt={`obstacle-${index}`}
          style={{
            position: "absolute",
            top: obs.y,
            left: obs.x,
            width: SPRITE_SIZE,
            height: SPRITE_SIZE,
            imageRendering: "pixelated",
          }}
        />
      ))}
    </>
  );
};

export default Obstacles;
