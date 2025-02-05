// src/components/Key.jsx
import { SPRITE_SIZE, KEY_POSITION } from "../constants";

const Key = ({ collected }) => {
  if (collected) return null;

  return (
    <img
      src={`../src/assets/${KEY_POSITION.img}`}
      alt="key"
      style={{
        position: "absolute",
        top: KEY_POSITION.y,
        left: KEY_POSITION.x,
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        imageRendering: "pixelated",
      }}
    />
  );
};

export default Key;
