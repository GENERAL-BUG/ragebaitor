import React, { useState } from 'react';
import { useRage } from '../context/RageContext';
import { sound } from '../services/audioEngine';

interface CenterPopupProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export const CenterPopup: React.FC<CenterPopupProps> = ({ isOpen, onDismiss }) => {
  const { incrementRage, addToast } = useRage();
  const [xAttempts, setXAttempts] = useState(0);
  const [xPosition, setXPosition] = useState({ x: 0, y: 0 });
  const [yesAttempts, setYesAttempts] = useState(0);
  const [yesPos, setYesPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // X button movement & cancellation sequence
  const handleXMouseEnter = () => {
    const nextAttempts = xAttempts + 1;
    setXAttempts(nextAttempts);

    if (nextAttempts === 1) {
      sound.playEvasionWhoosh();
      incrementRage(1);
      setXPosition({ x: 22, y: -8 });
      addToast({ title: 'STATUS', message: 'Not there.', type: 'info' });
    } else if (nextAttempts === 2) {
      sound.playJudgmentChime();
      setStatusMessage('Assessment incomplete.');
    } else if (nextAttempts === 3) {
      sound.playEvasionWhoosh();
      incrementRage(1);
      setXPosition({ x: -24, y: 12 });
      addToast({ title: 'LOG', message: 'Attempt recorded.', type: 'warning' });
    } else {
      // Allow X to remain still on 4th attempt so user can close it
      setXPosition({ x: 0, y: 0 });
    }
  };

  const handleXClick = () => {
    if (xAttempts >= 3) {
      sound.playClick(0.9);
      onDismiss();
    } else {
      sound.playJudgmentChime();
      setStatusMessage('Assessment incomplete.');
      addToast({ title: 'NOTICE', message: 'Verification required.', type: 'alert' });
    }
  };

  // YES button moves slightly left/right once, then clickable
  const handleYesMouseEnter = () => {
    if (yesAttempts < 2) {
      sound.playEvasionWhoosh();
      const next = yesAttempts + 1;
      setYesAttempts(next);
      setYesPos({ x: next % 2 === 1 ? 18 : -18, y: 0 });
    } else {
      setYesPos({ x: 0, y: 0 });
    }
  };

  const handleYesClick = () => {
    sound.playClick(1.2);
    addToast({ title: 'LOG', message: 'Proceed.', type: 'info' });
    onDismiss();
  };

  // NO button moves vertically, then if clicked says "Cancellation was not completed."
  const handleNoMouseEnter = () => {
    if (noAttempts < 2) {
      sound.playEvasionWhoosh();
      const next = noAttempts + 1;
      setNoAttempts(next);
      setNoPos({ x: 0, y: next % 2 === 1 ? -18 : 18 });
    } else {
      setNoPos({ x: 0, y: 0 });
    }
  };

  const handleNoClick = () => {
    sound.playJudgmentChime();
    incrementRage(1);
    setStatusMessage('Cancellation was not completed.');
    addToast({ title: 'STATUS', message: 'Cancellation was not completed.', type: 'alert' });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.82)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: '#111116',
        border: '3px solid #FFD600',
        boxShadow: '6px 6px 0px #000, 0 0 20px rgba(0,0,0,0.9)',
        width: '100%',
        maxWidth: '440px',
        fontFamily: '"Courier New", Courier, monospace',
        color: '#E0E0E0',
        padding: '0',
        position: 'relative'
      }}>
        
        {/* Header bar */}
        <div style={{
          background: '#FFD600',
          color: '#000',
          padding: '8px 12px',
          fontFamily: '"Arial Black", sans-serif',
          fontSize: '12px',
          fontWeight: 900,
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid #000'
        }}>
          <span>ACCESS REVIEW</span>
          <button
            onMouseEnter={handleXMouseEnter}
            onClick={handleXClick}
            style={{
              background: '#000',
              color: '#FFD600',
              border: '1px solid #FFD600',
              fontFamily: '"Courier New", monospace',
              fontSize: '13px',
              fontWeight: 'bold',
              padding: '1px 7px',
              cursor: 'pointer',
              lineHeight: 1.2,
              transform: `translate(${xPosition.x}px, ${xPosition.y}px)`,
              transition: 'transform 0.16s ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content body */}
        <div style={{ padding: '24px 20px', textAlign: 'center' }}>
          <p style={{
            fontSize: '13px',
            lineHeight: 1.6,
            margin: '0 0 16px 0',
            color: '#DDD'
          }}>
            Your responses require verification.
          </p>

          <p style={{
            fontSize: '12px',
            color: '#999',
            margin: '0 0 24px 0'
          }}>
            Continue with the assessment?
          </p>

          {/* Status Message if user failed cancellation */}
          {statusMessage && (
            <div style={{
              background: '#220000',
              border: '1px solid #FF2020',
              color: '#FF4040',
              fontSize: '11px',
              padding: '6px 10px',
              marginBottom: '18px'
            }}>
              {statusMessage}
            </div>
          )}

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            marginTop: '8px'
          }}>
            <button
              onMouseEnter={handleYesMouseEnter}
              onClick={handleYesClick}
              style={{
                background: '#FFD600',
                color: '#000',
                border: '2px solid #FFD600',
                fontFamily: '"Arial Black", sans-serif',
                fontSize: '12px',
                fontWeight: 900,
                padding: '8px 24px',
                cursor: 'pointer',
                transform: `translate(${yesPos.x}px, ${yesPos.y}px)`,
                transition: 'transform 0.15s ease'
              }}
            >
              [ YES ]
            </button>

            <button
              onMouseEnter={handleNoMouseEnter}
              onClick={handleNoClick}
              style={{
                background: '#1a1a1a',
                color: '#888',
                border: '2px solid #444',
                fontFamily: '"Courier New", monospace',
                fontSize: '12px',
                padding: '8px 24px',
                cursor: 'pointer',
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                transition: 'transform 0.15s ease'
              }}
            >
              [ NO ]
            </button>
          </div>
        </div>

        {/* Quiet footnote */}
        <div style={{
          borderTop: '1px solid #222',
          padding: '6px 12px',
          fontSize: '9px',
          color: '#555',
          textAlign: 'left'
        }}>
          REF: SEC-VERIFY-409 // VERIFICATION MANDATORY
        </div>

      </div>
    </div>
  );
};
