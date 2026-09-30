import React, { useState } from 'react';
import { useRage } from '../../context/RageContext';
import { sound } from '../../services/audioEngine';
import { MovingButton } from './MovingButton';

export const ModalContainer: React.FC = () => {
  const { activeModal, closeModal, incrementRage, addToast } = useRage();
  const [captchaSelections, setCaptchaSelections] = useState<number[]>([]);
  const [captchaAttempts, setCaptchaAttempts] = useState(0);

  if (!activeModal) return null;

  const handlePrimary = () => {
    sound.playClick(1.2);
    activeModal.onPrimary?.();
    closeModal();
  };

  const handleSecondary = () => {
    sound.playClick(0.9);
    incrementRage(1);
    if (activeModal.type === 'interruption') {
      addToast({ title: 'Noted.', message: 'You chose the second option. The result is identical to the first option. We hope that\'s frustrating.', type: 'judgment' });
    }
    activeModal.onSecondary?.();
    closeModal();
  };

  const captchaTiles = [
    'Zero Unread Emails', 'Pure White Screen', '4:30 AM Alarm',
    'Spinning Wheel', 'Silent Room', 'Excel Formulas',
    'Untangled Earbuds', 'Airplane Mode', 'Terms of Service',
  ];

  const handleCaptchaVerify = () => {
    if (captchaSelections.length === 0) {
      addToast({ title: 'Invalid.', message: 'You selected nothing. Selecting nothing is not inner peace. It is inaction.', type: 'alert' });
      return;
    }
    if (captchaAttempts === 0) {
      setCaptchaAttempts(1);
      setCaptchaSelections([]);
      incrementRage(1);
      addToast({ title: 'Incorrect.', message: 'Your perception of Inner Peace is non-standard. Try again.', type: 'warning' });
    } else {
      sound.playEnlightenmentFanfare();
      addToast({ title: 'Verified.', message: 'You are probably a biological human. Proceeding.', type: 'judgment' });
      closeModal();
    }
  };

  const headerBg = activeModal.type === 'error' ? '#FF2020' : '#FFD600';
  const headerText = activeModal.type === 'error' ? '#fff' : '#000';

  return (
    <div className="atrocity-modal-overlay">
      <div className="atrocity-modal">
        
        {/* Header */}
        <div className="atrocity-modal-header" style={{ background: headerBg, color: headerText }}>
          <span>{activeModal.type === 'error' ? '❌' : '⚠'} {activeModal.title}</span>
          <button
            onClick={() => { sound.playClick(0.8); closeModal(); }}
            style={{
              background: '#000',
              color: headerText === '#000' ? '#fff' : '#FFD600',
              border: '2px solid currentColor',
              fontFamily: '"Courier New", monospace',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '1px 8px',
              cursor: 'pointer',
              lineHeight: 1.2,
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="atrocity-modal-body">
          <p style={{ margin: '0 0 10px', lineHeight: 1.7, fontFamily: 'Verdana, sans-serif', fontSize: '13px' }}>
            {activeModal.content}
          </p>
          
          {activeModal.subtext && (
            <p style={{ margin: '0', fontFamily: '"Courier New", monospace', fontSize: '11px', color: '#888', borderTop: '1px solid #333', paddingTop: '8px' }}>
              {activeModal.subtext}
            </p>
          )}

          {/* Captcha tiles */}
          {activeModal.type === 'captcha' && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '10px', color: '#FFD600', marginBottom: '8px', textTransform: 'uppercase' }}>
                SELECT ALL TILES REPRESENTING "TRUE INNER PEACE":
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                {captchaTiles.map((tile, idx) => {
                  const isSel = captchaSelections.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playClick(1.2);
                        setCaptchaSelections(p => isSel ? p.filter(x => x !== idx) : [...p, idx]);
                      }}
                      style={{
                        background: isSel ? '#4B0082' : '#111',
                        border: `2px solid ${isSel ? '#00FF41' : '#333'}`,
                        color: isSel ? '#00FF41' : '#888',
                        fontFamily: '"Courier New", monospace',
                        fontSize: '10px',
                        padding: '8px 6px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        lineHeight: 1.3,
                      }}
                    >
                      {isSel ? '☑' : '☐'} {tile}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="atrocity-modal-footer">
          {activeModal.type === 'captcha' ? (
            <button onClick={handleCaptchaVerify} className="btn-atrocity-primary" style={{ fontSize: '11px' }}>
              VERIFY CONSCIOUSNESS
            </button>
          ) : (
            <>
              {activeModal.primaryMoves ? (
                <MovingButton
                  onClick={handlePrimary}
                  maxJumps={2}
                  style={{
                    background: '#FFD600',
                    color: '#000',
                    border: '3px solid #FF0000',
                    fontFamily: '"Arial Black", sans-serif',
                    fontSize: '11px',
                    fontWeight: '900',
                    padding: '8px 14px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  {activeModal.primaryBtnText || 'OK'}
                </MovingButton>
              ) : (
                <button onClick={handlePrimary} className="btn-atrocity-primary" style={{ fontSize: '11px', padding: '8px 14px' }}>
                  {activeModal.primaryBtnText || 'OK'}
                </button>
              )}
              {activeModal.secondaryBtnText && (
                <button onClick={handleSecondary} className="btn-atrocity-small">
                  {activeModal.secondaryBtnText}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
