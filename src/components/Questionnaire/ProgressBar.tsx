import React from 'react';
import { QuestionStep } from '../../types';

interface ProgressBarProps {
  currentStep: QuestionStep;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const stepTitles = [
    'STAGE 1: ATTACHMENTS',
    'STAGE 2: METAPHYSICAL POSTURE',
    'STAGE 3: MORAL DILEMMAS',
    'STAGE 4: ENTROPY CALIBRATION'
  ];

  const pct = currentStep === 1 ? 25 : currentStep === 2 ? 50 : currentStep === 3 ? 75 : 95;

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto 20px auto',
      padding: '0 20px',
      fontFamily: '"Courier New", Courier, monospace'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#888',
        marginBottom: '6px'
      }}>
        <span style={{ color: '#FFD600', fontWeight: 'bold' }}>
          {stepTitles[currentStep - 1]}
        </span>
        <span>
          PROGRESS: {pct}%
        </span>
      </div>

      <div style={{
        background: '#0d0d0d',
        border: '1px solid #333',
        height: '10px',
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: '#FFD600',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
};
