import React, { useState } from 'react';
import { useRage } from '../../context/RageContext';
import { MovingButton } from '../UI/MovingButton';
import { sound } from '../../services/audioEngine';

export const Step4ExistentialSlider: React.FC = () => {
  const { responses, setExistentialScore, setFreeTextThought, setScreen, setCurrentStep, addToast } = useRage();
  const [sliderVal, setSliderVal] = useState(responses.existentialScore);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = Number(e.target.value);
    if (v === 50) {
      v = Math.random() > 0.5 ? 49 : 51;
      sound.playEvasionWhoosh();
      addToast({ title: 'LOG', message: 'Not this time.', type: 'warning' });
    }
    setSliderVal(v);
    setExistentialScore(v);
    sound.playClick(0.6 + (v / 100) * 0.8);
  };

  const handleContinue = () => {
    sound.playClick(1.2);
    setScreen('VERIFICATION');
  };

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: '0 20px',
      fontFamily: '"Courier New", Courier, monospace'
    }}>
      
      {/* 1. Main Heading */}
      <h2 style={{
        fontFamily: '"Arial Black", sans-serif',
        fontSize: '20px',
        color: '#FFD600',
        margin: '0 0 6px 0',
        letterSpacing: '1px'
      }}>
        STAGE 4: EXISTENTIAL ENTROPY
      </h2>

      {/* 2. Short Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '12px',
        color: '#999',
        margin: '0 0 24px 0',
        lineHeight: 1.5
      }}>
        Calibrate your acceptance of cosmic meaninglessness.
      </p>

      {/* 3. Main Interaction: Slider & Text box */}
      <div style={{
        background: '#121212',
        border: '1px solid #333',
        borderLeft: '4px solid #FFD600',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          fontFamily: 'Verdana, sans-serif',
          fontSize: '13px',
          color: '#EEE',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          How comfortable are you with the possibility that nothing matters?
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderVal}
          onChange={handleSlider}
          style={{ width: '100%', marginBottom: '8px' }}
        />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '10px',
          color: '#666',
          marginBottom: '24px'
        }}>
          <span>0% // PANIC</span>
          <span style={{ color: '#FFD600', fontWeight: 'bold' }}>VALUE: {sliderVal}%</span>
          <span>100% // ACCEPTANCE</span>
        </div>

        <div style={{
          fontSize: '11px',
          color: '#888',
          marginBottom: '6px'
        }}>
          FREE-TEXT THOUGHTS (OPTIONAL):
        </div>
        <textarea
          rows={3}
          value={responses.freeTextThought}
          onChange={(e) => setFreeTextThought(e.target.value)}
          placeholder="Enter any unresolved thoughts."
          className="ugly-input"
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
      </div>

      {/* 4. Action Buttons */}
      <div style={{
        borderTop: '2px solid #222',
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <MovingButton
          behavior="away"
          maxJumps={2}
          baseDistance={16}
          onClick={() => setCurrentStep(3)}
          style={{
            background: '#1a1a1a',
            border: '1px solid #444',
            color: '#777',
            fontFamily: '"Courier New", monospace',
            fontSize: '11px',
            padding: '8px 16px',
            cursor: 'pointer'
          }}
        >
          ← BACK
        </MovingButton>

        {/* Primary CONTINUE moves diagonally */}
        <MovingButton
          behavior="diagonal"
          maxJumps={4}
          baseDistance={28}
          onClick={handleContinue}
          style={{
            background: '#FFD600',
            color: '#000',
            border: '2px solid #FFD600',
            fontFamily: '"Arial Black", sans-serif',
            fontSize: '12px',
            fontWeight: 900,
            padding: '10px 24px',
            cursor: 'pointer',
            letterSpacing: '1px'
          }}
        >
          PROCEED TO FINAL SUBMISSION →
        </MovingButton>
      </div>

    </div>
  );
};
