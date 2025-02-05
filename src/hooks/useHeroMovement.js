// src/hooks/useHeroMovement.js
import { useState, useEffect } from "react";
import { SPRITE_SIZE, STEP, DIRECTIONS, OBSTACLES } from "../constants";

const useHeroMovement = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState(0);
  const [frame, setFrame] = useState(0);

  const isCollision = (newPos) => {
    return OBSTACLES.some(
      (obs) =>
        newPos.x < obs.x &&
        newPos.x + SPRITE_SIZE > obs.x &&
        newPos.y < obs.y &&
        newPos.y + SPRITE_SIZE + 11 > obs.y
    );
  };

  const handleKeyDown = (event) => {
    if (DIRECTIONS[event.key] !== undefined) {
      setDirection(DIRECTIONS[event.key]);
      setFrame((prev) => (prev + 1) % 4);
      setPosition((prev) => {
        const newPos = { ...prev };
        if (event.key === "w") newPos.y -= STEP;
        if (event.key === "s") newPos.y += STEP;
        if (event.key === "a") newPos.x -= STEP;
        if (event.key === "d") newPos.x += STEP;
        return isCollision(newPos) ? prev : newPos;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { position, direction, frame };
};

export default useHeroMovement;
