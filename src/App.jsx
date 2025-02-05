// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameMenu from "./components/GameMenu";
import Game from "./Game";
import Settings from "./pages/Settings";
import About from "./pages/About";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={gameStarted ? <Game /> : <GameMenu onStart={() => setGameStarted(true)} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
