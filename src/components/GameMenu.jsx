// src/components/GameMenu.jsx
import { useNavigate } from "react-router-dom";

const GameMenu = ({ onStart }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Adventure Quest</h1>
      
      <button
        onClick={onStart}
        style={buttonStyle}
      >
        Play
      </button>

      <button
        onClick={() => navigate("/about")}
        style={buttonStyle}
      >
        About
      </button>

      <button
        onClick={() => navigate("/settings")}
        style={buttonStyle}
      >
        Settings
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "1rem 2rem",
  fontSize: "1.5rem",
  margin: "1rem",
  border: "none",
  backgroundColor: "#08f",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "8px",
};

export default GameMenu;
