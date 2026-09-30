import React, { useState } from 'react';
import { useRage } from '../context/RageContext';
import { MovingButton } from './UI/MovingButton';
import { sound } from '../services/audioEngine';

export const Hero: React.FC = () => {
  const { setScreen, addToast } = useRage();
  const [noHoverCount, setNoHoverCount] = useState(0);

  const handleStart = () => {
    sound.playGong();
    addToast({ title: 'LOG', message: 'Assessment initiated.', type: 'info' });
    setScreen('QUESTIONNAIRE');
  };

  const handleNoClick = () => {
    sound.playJudgmentChime();
    addToast({ title: 'STATUS', message: 'Cancellation was not completed.', type: 'alert' });
  };

  return (
    <div style={{
      maxWidth: '720px',
      margin: '40px auto',
      padding: '0 20px',
      fontFamily: '"Courier New", Courier, monospace',
      textAlign: 'center'
    }}>
      
      {/* 1. Main Heading */}
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(28px, 5vw, 46px)',
        color: '#FFD600',
        margin: '0 0 12px 0',
        lineHeight: 1.15,
        letterSpacing: '-1px'
      }}>
        DISCOVER YOUR SPIRITUAL IDEOLOGY
      </h1>

      {/* 2. Short, Cold Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '13px',
        color: '#A0A0A0',
        lineHeight: 1.6,
        maxWidth: '560px',
        margin: '0 auto 32px auto'
      }}>
        An analytical assessment of your cognitive preoccupations, worldly attachments, and existential posture.
      </p>

      {/* 3. Main Instruction & Clean Button Cluster (2-3 distinct, uncooperative buttons) */}
      <div style={{
        background: '#121212',
        border: '2px solid #333',
        borderTop: '3px solid #FFD600',
        padding: '32px 24px',
        marginBottom: '24px'
      }}>
        
        <div style={{
          fontSize: '11px',
          color: '#777',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          ASSESSMENT MODULE: FORM ATMAN-01
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          
          {/* Primary CTA - Moves diagonally when approached */}
          <MovingButton
            behavior="diagonal"
            maxJumps={4}
            baseDistance={28}
            onClick={handleStart}
            style={{
              background: '#FFD600',
              color: '#000',
              border: '2px solid #FFD600',
              fontFamily: '"Arial Black", sans-serif',
              fontSize: '13px',
              fontWeight: 900,
              padding: '14px 32px',
              cursor: 'pointer',
              letterSpacing: '1px'
            }}
          >
            BEGIN SELF-DISCOVERY
          </MovingButton>

          {/* Secondary CTA - NO moves vertically */}
          <MovingButton
            behavior="vertical"
            maxJumps={4}
            baseDistance={24}
            onClick={handleNoClick}
            style={{
              background: '#1a1a1a',
              color: '#777',
              border: '1px solid #444',
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              padding: '8px 24px',
              cursor: 'pointer'
            }}
          >
            NO
          </MovingButton>

        </div>

      </div>

      {/* Footnote information */}
      <div style={{
        fontSize: '10px',
        color: '#444',
        lineHeight: 1.6
      }}>
        <div>REF: EVAL-104 // NON-PSYCHOLOGICAL SATIRICAL EXPERIMENT</div>
        <div>Your inputs will be retained for classification purposes.</div>
      </div>

    </div>
  );
};
