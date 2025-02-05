// src/components/GameIntroduction.jsx
import { useState } from 'react';

const GameIntroduction = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "How to Play",
      content: "Use the WASD keys to move your character around the map:\n\nW - Move Up\nA - Move Left\nS - Move Down\nD - Move Right"
    },
    {
      title: "Your Goal",
      content: "Your goal is to find the right chest. First, collect the key, then find and open the correct treasure chest!"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 50
      }}
    >
      <div
        style={{
          width: '66%',
          maxWidth: '600px',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#333'
          }}
        >
          {steps[step].title}
        </h2>
        <p
          style={{
            whiteSpace: 'pre-line',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '24px',
            color: '#666'
          }}
        >
          {steps[step].content}
        </p>
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          {step < steps.length - 1 ? 'Next' : 'Start Game'}
        </button>
      </div>
    </div>
  );
};

export default GameIntroduction;