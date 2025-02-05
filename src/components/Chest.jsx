// src/components/Chest.jsx
import { SPRITE_SIZE, CHEST_POSITION } from "../constants";

const Chest = ({ opened }) => {
  return (
    <img
      src={`../src/assets/map/${opened ? CHEST_POSITION.openImg : CHEST_POSITION.img}`}
      alt="chest"
      style={{
        position: "absolute",
        top: CHEST_POSITION.y,
        left: CHEST_POSITION.x,
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        imageRendering: "pixelated",
      }}
    />
  );
};

export default Chest;
