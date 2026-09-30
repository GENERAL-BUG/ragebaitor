import React from 'react';
import { useRage } from '../../context/RageContext';
import { INTEREST_ITEMS } from '../../data/questions';
import { MovingButton } from '../UI/MovingButton';
import { sound } from '../../services/audioEngine';

export const Step1Interests: React.FC = () => {
  const { 
    responses, 
    toggleInterest, 
    setCurrentStep, 
    addToast
  } = useRage();

  const handleContinue = () => {
    if (responses.interests.length === 0) {
      sound.playJudgmentChime();
      addToast({ title: 'NOTICE', message: 'Verification required.', type: 'alert' });
      return;
    }
    sound.playClick(1.2);
    setCurrentStep(2);
  };

  const handleReset = () => {
    sound.playClick(0.9);
    addToast({ title: 'LOG', message: 'Your previous selection has been retained.', type: 'info' });
  };

  const handleNo = () => {
    sound.playJudgmentChime();
    addToast({ title: 'STATUS', message: 'Cancellation was not completed.', type: 'alert' });
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
        STAGE 1: WORLDLY ATTACHMENTS
      </h2>

      {/* 2. Short Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '12px',
        color: '#999',
        margin: '0 0 20px 0',
        lineHeight: 1.5
      }}>
        Select the categories that occupy your consciousness unnecessarily.
      </p>

      {/* 3. Main Interaction: Clean Attachment Tiles */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
        gap: '6px',
        marginBottom: '24px'
      }}>
        {INTEREST_ITEMS.slice(0, 16).map(item => {
          const isSelected = responses.interests.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleInterest(item.id)}
              style={{
                background: isSelected ? '#241a00' : '#141414',
                border: `1px solid ${isSelected ? '#FFD600' : '#333'}`,
                color: isSelected ? '#FFD600' : '#bbb',
                padding: '10px 12px',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: '"Courier New", monospace',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{isSelected ? '☑' : '☐'}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. The Action Buttons (Clear, straightforward, but each moves deliberately) */}
      <div style={{
        borderTop: '2px solid #222',
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        
        {/* Left utility buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <MovingButton
            behavior="shift"
            maxJumps={3}
            baseDistance={18}
            onClick={handleReset}
            style={{
              background: '#1a1a1a',
              border: '1px solid #444',
              color: '#777',
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              padding: '8px 14px',
              cursor: 'pointer'
            }}
          >
            RESET
          </MovingButton>

          <MovingButton
            behavior="vertical"
            maxJumps={3}
            baseDistance={20}
            onClick={handleNo}
            style={{
              background: '#1a1a1a',
              border: '1px solid #444',
              color: '#777',
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              padding: '8px 14px',
              cursor: 'pointer'
            }}
          >
            NO
          </MovingButton>
        </div>

        {/* Primary CONTINUE button - moves diagonally when approached! */}
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
          CONTINUE →
        </MovingButton>

      </div>

    </div>
  );
};
