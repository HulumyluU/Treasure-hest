import { useEffect, useState } from "react";

const SPRITE_SIZE = 64;
const HERO_SIZE = SPRITE_SIZE * 2;
const STEP = 6; // Movement speed
const DIRECTIONS = {
  w: 1, // Up
  s: 0, // Down
  a: 2, // Left
  d: 3, // Right
};

const TASKS = [
  "Find the hidden key",
  "Avoid all obstacles",
  "Find the right chest", 
];

const OBSTACLES = [
   { x: 600, y: 30, img: "7.png" },
   { x: 100, y: 30, img: "7.png" },
   { x: 300, y: 30, img: "7.png" },
   { x: 10, y: 100, img: "7.png" },
   { x: 200, y: 200, img: "1.png" },
   { x: 300, y: 150, img: "2.png" },
   { x: 400, y: 250, img: "3.png" },
   { x: 500, y: 100, img: "4.png" },
   { x: 600, y: 300, img: "5.png" },
   { x: 700, y: 200, img: "6.png" },
   { x: 800, y: 150, img: "7.png" },
   { x: 10, y: 250, img: "8.png" },
   { x: 300, y: 430, img: "9.png" },
   { x: 450, y: 400, img: "10.png" },
   { x: 120, y: 450, img: "11.png" },
   { x: 190, y: 320, img: "12.png" }
 ];

const KEY_POSITION = { x: 500, y: 300, img: "key.png" };
const CHEST_POSITION = { x: 800, y: 400, img: "absolute7.png", openImg: "absolute8.png" };

export default function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState(0);
  const [frame, setFrame] = useState(0);
  const [tasks, setTasks] = useState(TASKS);
  const [keyCollected, setKeyCollected] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);

  const isCollision = (newPos) => {
    return OBSTACLES.some(
      (obs) =>
        newPos.x < obs.x &&
        newPos.x + SPRITE_SIZE > obs.x &&
        newPos.y < obs.y  &&
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
      setTasks((prev) => [...prev, "Right Chest Founded"]);
      setTasks((prev) => [...prev, "Treasure Unlocked"]);
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

        {!keyCollected && (
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
        )}

        <img
          src={`../src/assets/map/${chestOpened ? CHEST_POSITION.openImg : CHEST_POSITION.img}`}
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
      </div>
      <div
        style={{
          flex: 1,
          zIndex: 1,
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          borderLeft: "2px solid #777",
        }}
      >
        <h3 style={{ textAlign: "center", color: "white" }}>Tasks</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                marginBottom: "5px",
                backgroundColor: "#444",
                borderRadius: "5px",
              }}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
