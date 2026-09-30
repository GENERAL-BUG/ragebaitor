import React from 'react';
import { useRage } from '../../context/RageContext';
import { STEP_QUESTIONS } from '../../data/questions';
import { MovingButton } from '../UI/MovingButton';
import { sound } from '../../services/audioEngine';

export const Step3MoralAlignment: React.FC = () => {
  const { responses, setMoralChoice, setCurrentStep, addToast } = useRage();
  const step3Questions = STEP_QUESTIONS.filter(q => q.step === 3);

  const handleSelect = (qId: string, optId: string) => {
    sound.playClick(1.1);
    setMoralChoice(qId, optId);
  };

  const handleProceed = () => {
    const unanswered = step3Questions.filter(q => !responses.moralChoices[q.id]);
    if (unanswered.length > 0) {
      sound.playJudgmentChime();
      addToast({ title: 'LOG', message: 'Assessment incomplete.', type: 'alert' });
      return;
    }
    sound.playClick(1.2);
    setCurrentStep(4);
  };

  const handleCancel = () => {
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
        STAGE 3: MORAL DILEMMAS
      </h2>

      {/* 2. Short Explanation */}
      <p style={{
        fontFamily: 'Verdana, sans-serif',
        fontSize: '12px',
        color: '#999',
        margin: '0 0 24px 0',
        lineHeight: 1.5
      }}>
        Select your response to the situational dilemmas below.
      </p>

      {/* 3. Main Interaction */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
        {step3Questions.map((q, idx) => (
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
              DILEMMA 0{idx + 1}
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
                const isSelected = responses.moralChoices[q.id] === opt.id;
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
            onClick={() => setCurrentStep(2)}
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

          {/* CANCEL moves slightly when approached */}
          <MovingButton
            behavior="away"
            maxJumps={3}
            baseDistance={22}
            onClick={handleCancel}
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
            CANCEL
          </MovingButton>
        </div>

        {/* Primary SUBMIT moves away from cursor! */}
        <MovingButton
          behavior="away"
          maxJumps={4}
          baseDistance={30}
          onClick={handleProceed}
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
          SUBMIT CHOICES →
        </MovingButton>

      </div>

    </div>
  );
};
