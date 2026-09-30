import React from 'react';
import { useRage } from '../../context/RageContext';
import { MovingButton } from '../UI/MovingButton';
import { sound } from '../../services/audioEngine';

export const Step5Verification: React.FC = () => {
  const { setScreen, setCurrentStep, addToast } = useRage();

  const handleFinalSubmit = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    sound.playGong();
    addToast({ title: 'LOG', message: 'Proceed.', type: 'info' });
    setScreen('ANALYZING');
  };

  const finalLabels = [
    'REVEAL MY SPIRITUAL IDEOLOGY',
    'SUBMIT',
    'CONTINUE',
    'FINALIZE'
  ];

  return (
    <div style={{
      maxWidth: '720px',
      margin: '40px auto',
      padding: '0 20px',
      fontFamily: '"Courier New", Courier, monospace',
      textAlign: 'center'
    }}>
      
      {/* 1. Main Heading */}
      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        color: '#FFD600',
        margin: '0 0 8px 0',
        letterSpacing: '-0.5px'
      }}>
        ASSESSMENT COMPLETE.
      </h2>

      {/* 2. Short Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '12px',
        color: '#999',
        margin: '0 0 36px 0',
        lineHeight: 1.6
      }}>
        All responses have been retained. Click below to generate your spiritual ideology report.
      </p>

      {/* 3. The Climax Button (The Biggest Trap) */}
      <div style={{
        background: '#121212',
        border: '2px solid #333',
        borderTop: '3px solid #FFD600',
        padding: '48px 24px',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px'
      }}>
        
        <div style={{
          fontSize: '11px',
          color: '#666',
          marginBottom: '24px',
          letterSpacing: '1px'
        }}>
          FINAL VERIFICATION: FORM ATMAN-FINAL
        </div>

        {/* The Final Submit Trap Button: cycles labels, evades 5-6 times, then stays still */}
        <MovingButton
          behavior="final_trap"
          labels={finalLabels}
          maxJumps={6}
          baseDistance={40}
          onClick={handleFinalSubmit}
          style={{
            background: '#FFD600',
            color: '#000',
            border: '3px solid #FFD600',
            fontFamily: '"Arial Black", sans-serif',
            fontSize: '13px',
            fontWeight: 900,
            padding: '16px 36px',
            cursor: 'pointer',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '4px 4px 0 #000'
          }}
        >
          REVEAL MY SPIRITUAL IDEOLOGY
        </MovingButton>

      </div>

      {/* Bottom return link */}
      <div>
        <button
          onClick={() => {
            sound.playClick(0.9);
            setCurrentStep(4);
            setScreen('QUESTIONNAIRE');
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#555',
            fontFamily: '"Courier New", monospace',
            fontSize: '11px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          ← Return to Stage 4
        </button>
      </div>

    </div>
  );
};
