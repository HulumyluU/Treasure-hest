// src/App.jsx
import { useState, useEffect } from "react";
import { TASKS, SPRITE_SIZE, KEY_POSITION, CHEST_POSITION } from "./constants";
import useHeroMovement from "./hooks/useHeroMovement";
import Hero from "./components/Hero";
import Obstacles from "./components/Obstacles";
import Tasks from "./components/Tasks";
import Key from "./components/Key";
import Chest from "./components/Chest";

export default function App() {
  const { position, direction, frame } = useHeroMovement();
  const [tasks, setTasks] = useState(TASKS);
  const [keyCollected, setKeyCollected] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);

  useEffect(() => {
    if (
      !keyCollected &&
      position.x < KEY_POSITION.x + SPRITE_SIZE &&
      position.x + SPRITE_SIZE > KEY_POSITION.x &&
      position.y < KEY_POSITION.y + SPRITE_SIZE &&
      position.y + SPRITE_SIZE > KEY_POSITION.y
    ) {
      setKeyCollected(true);
      setTasks((prev) => [...prev, "Key Found"]);
    }

    if (
      keyCollected &&
      !chestOpened &&
      position.x < CHEST_POSITION.x + SPRITE_SIZE &&
      position.x + SPRITE_SIZE > CHEST_POSITION.x &&
      position.y < CHEST_POSITION.y + SPRITE_SIZE &&
      position.y + SPRITE_SIZE > CHEST_POSITION.y
    ) {
      setChestOpened(true);
      setTasks((prev) => [...prev, "Right Chest Found", "Treasure Unlocked"]);
    }
  }, [position, keyCollected, chestOpened]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1e853a",
        display: "flex",
      }}
    >
      <div style={{ flex: 3, position: "relative" }}>
        <Obstacles />
        <Key collected={keyCollected} />
        <Chest opened={chestOpened} />
        <Hero position={position} direction={direction} frame={frame} />
      </div>
      <Tasks tasks={tasks} />
    </div>
  );
}
