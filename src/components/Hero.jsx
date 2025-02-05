// src/components/Hero.jsx
import { HERO_SIZE } from "../constants";

const Hero = ({ position, direction, frame }) => {
  return (
    <img
      src={`../src/assets/hero/tile${direction * 4 + frame}.png`}
      alt="hero"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: HERO_SIZE,
        height: HERO_SIZE,
        imageRendering: "pixelated",
      }}
    />
  );
};

export default Hero;
