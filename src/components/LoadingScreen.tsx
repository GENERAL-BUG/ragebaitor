import React, { useState, useEffect } from 'react';
import { useRage } from '../context/RageContext';
import { sound } from '../services/audioEngine';

export const LoadingScreen: React.FC = () => {
  const { setScreen } = useRage();
  const [phaseIndex, setPhaseIndex] = useState(0);

  const stages = [
    'Finalizing assessment...',
    'Verifying responses...',
    'Preparing report...'
  ];

  useEffect(() => {
    sound.playGong();

    // Stage 1
    const t1 = setTimeout(() => {
      setPhaseIndex(1);
      sound.playClick(1.0);
    }, 1300);

    // Stage 2
    const t2 = setTimeout(() => {
      setPhaseIndex(2);
      sound.playClick(1.1);
    }, 2600);

    // Final Transition to RESULT
    const t3 = setTimeout(() => {
      setScreen('RESULT');
    }, 3900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div style={{
      maxWidth: '600px',
      margin: '80px auto',
      padding: '0 20px',
      textAlign: 'center',
      fontFamily: '"Courier New", Courier, monospace',
      color: '#E0E0E0'
    }}>
      
      <div style={{
        background: '#121212',
        border: '2px solid #333',
        borderTop: '3px solid #FFD600',
        padding: '40px 24px'
      }}>
        
        <div style={{
          fontSize: '11px',
          color: '#666',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          PROCESSING
        </div>

        <div style={{
          fontSize: '18px',
          color: '#FFD600',
          fontWeight: 'bold',
          marginBottom: '24px'
        }}>
          {stages[phaseIndex]}
        </div>

        {/* ASCII bar */}
        <div style={{
          fontSize: '12px',
          color: '#00FF41',
          letterSpacing: '2px',
          marginBottom: '12px'
        }}>
          {phaseIndex === 0 && '██████░░░░░░░░░░░░░░'}
          {phaseIndex === 1 && '█████████████░░░░░░░'}
          {phaseIndex === 2 && '████████████████████'}
        </div>

        <div style={{
          fontSize: '10px',
          color: '#555'
        }}>
          Please remain on this screen.
        </div>

      </div>

    </div>
  );
};
