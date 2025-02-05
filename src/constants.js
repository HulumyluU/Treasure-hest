// src/constants.js
export const SPRITE_SIZE = 64;
export const HERO_SIZE = SPRITE_SIZE * 2;
export const STEP = 6;

export const DIRECTIONS = {
  w: 1, // Up
  s: 0, // Down
  a: 2, // Left
  d: 3, // Right
};

export const TASKS = [
  "Find the hidden key",
  "Avoid all obstacles",
  "Find the right chest",
];

export const OBSTACLES = [
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
  { x: 190, y: 320, img: "12.png" },
];

export const KEY_POSITION = { x: 500, y: 300, img: "key.png" };
export const CHEST_POSITION = { 
  x: 800, y: 400, img: "absolute7.png", openImg: "absolute8.png" 
};
