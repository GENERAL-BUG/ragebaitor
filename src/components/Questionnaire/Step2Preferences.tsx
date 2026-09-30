import React from 'react';
import { useRage } from '../../context/RageContext';
import { STEP_QUESTIONS } from '../../data/questions';
import { MovingButton } from '../UI/MovingButton';
import { sound } from '../../services/audioEngine';

export const Step2Preferences: React.FC = () => {
  const { responses, setPreference, setCurrentStep, addToast } = useRage();
  const step2Questions = STEP_QUESTIONS.filter(q => q.step === 2);

  const handleSelect = (qId: string, optId: string) => {
    sound.playClick(1.1);
    setPreference(qId, optId);
  };

  const handleNext = () => {
    const unanswered = step2Questions.filter(q => !responses.preferences[q.id]);
    if (unanswered.length > 0) {
      sound.playJudgmentChime();
      addToast({ title: 'LOG', message: 'Assessment incomplete.', type: 'alert' });
      return;
    }
    sound.playClick(1.2);
    setCurrentStep(3);
  };

  const handleBack = () => {
    sound.playClick(0.9);
    setCurrentStep(1);
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
        STAGE 2: METAPHYSICAL POSTURE
      </h2>

      {/* 2. Short Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '12px',
        color: '#999',
        margin: '0 0 24px 0',
        lineHeight: 1.5
      }}>
        Indicate your cosmological posture. Choices are retained.
      </p>

      {/* 3. Main Interaction: 2 Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
        {step2Questions.map((q, idx) => (
          <div key={q.id} style={{
            background: '#121212',
            border: '1px solid #333',
            borderLeft: '4px solid #FFD600',
            padding: '16px'
          }}>
            <div style={{
              fontSize: '11px',
              color: '#888',
              marginBottom: '4px'
            }}>
              QUESTION 0{idx + 1}
            </div>
            
            <div style={{
              fontFamily: 'Verdana, sans-serif',
              fontSize: '13px',
              color: '#EEE',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              {q.title}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {q.options?.map(opt => {
                const isSelected = responses.preferences[q.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(q.id, opt.id)}
                    style={{
                      background: isSelected ? '#241a00' : '#181818',
                      border: `1px solid ${isSelected ? '#FFD600' : '#282828'}`,
                      color: isSelected ? '#FFD600' : '#bbb',
                      padding: '8px 12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: '"Courier New", monospace',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>{isSelected ? '◉' : '○'}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
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
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <MovingButton
            behavior="away"
            maxJumps={2}
            baseDistance={16}
            onClick={handleBack}
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

          <MovingButton
            behavior="vertical"
            maxJumps={3}
            baseDistance={20}
            onClick={() => addToast({ title: 'STATUS', message: 'Cancellation was not completed.', type: 'alert' })}
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
            NO
          </MovingButton>
        </div>

        {/* Primary NEXT button - shifts position when approached */}
        <MovingButton
          behavior="shift"
          maxJumps={4}
          baseDistance={26}
          onClick={handleNext}
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
          NEXT STAGE →
        </MovingButton>

      </div>

    </div>
  );
};
