import React, { useState } from 'react';
import { useRage } from '../context/RageContext';
import { MovingButton } from './UI/MovingButton';
import { sound } from '../services/audioEngine';

export const Navbar: React.FC = () => {
  const { 
    currentStep,
    screen,
    toggleSound, 
    soundEnabled, 
    addToast, 
    triggerEasterEgg, 
    toggleDeveloperMode
  } = useRage();
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    const n = logoClicks + 1;
    setLogoClicks(n);
    sound.playClick(1.0 + n * 0.15);
    if (n >= 7) {
      triggerEasterEgg();
      toggleDeveloperMode();
      setLogoClicks(0);
    }
  };

  const steps = [
    { num: 1, label: 'ATTACHMENTS' },
    { num: 2, label: 'POSTURE' },
    { num: 3, label: 'DILEMMAS' },
    { num: 4, label: 'ENTROPY' },
    { num: 5, label: 'REPORT' },
  ];

  return (
    <header style={{
      borderBottom: '2px solid #FFD600',
      backgroundColor: '#0a0a0a',
      position: 'sticky',
      top: 0,
      zIndex: 7000,
      fontFamily: '"Courier New", Courier, monospace'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        minHeight: '44px',
        borderBottom: '1px solid #222'
      }}>
        
        {/* Brand / Logo */}
        <button
          onClick={handleLogoClick}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFD600',
            fontFamily: '"Arial Black", sans-serif',
            fontSize: '13px',
            fontWeight: 900,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>⚠</span>
          <span>ATMAN.io // ASSESSMENT</span>
        </button>

        {/* Step indicator (when in questionnaire) */}
        {screen === 'QUESTIONNAIRE' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '10px',
            color: '#777'
          }}>
            {steps.map(s => {
              const isActive = s.num === currentStep;
              const isPast = s.num < currentStep;
              return (
                <span
                  key={s.num}
                  style={{
                    color: isActive ? '#FFD600' : isPast ? '#00FF41' : '#444',
                    fontWeight: isActive ? 'bold' : 'normal'
                  }}
                >
                  [{s.num}] {s.label}
                </span>
              );
            })}
          </div>
        )}

        {/* Right side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={toggleSound}
            style={{
              background: '#161616',
              color: soundEnabled ? '#00FF41' : '#555',
              border: '1px solid #333',
              fontFamily: '"Courier New", monospace',
              fontSize: '10px',
              padding: '4px 8px',
              cursor: 'pointer'
            }}
          >
            {soundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF'}
          </button>

          <MovingButton
            behavior="away"
            maxJumps={2}
            baseDistance={18}
            onClick={() => addToast({ title: 'STATUS', message: 'Assessment incomplete.', type: 'warning' })}
            style={{
              background: '#220000',
              color: '#FF4040',
              border: '1px solid #FF4040',
              fontFamily: '"Courier New", monospace',
              fontSize: '10px',
              padding: '4px 8px',
              cursor: 'pointer'
            }}
          >
            EXIT
          </MovingButton>
        </div>

      </div>
    </header>
  );
};
