import React from 'react';
import { useRage } from '../context/RageContext';
import { MovingButton } from './UI/MovingButton';
import { sound } from '../services/audioEngine';

export const ResultCard: React.FC = () => {
  const { resetAll } = useRage();

  return (
    <div style={{
      maxWidth: '640px',
      margin: '80px auto',
      padding: '0 20px',
      textAlign: 'center',
      fontFamily: '"Courier New", Courier, monospace',
      color: '#E0E0E0'
    }}>
      
      <div style={{
        background: '#111116',
        border: '2px solid #333',
        borderTop: '4px solid #FFD600',
        padding: '50px 32px'
      }}>
        
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '26px',
          color: '#FFD600',
          margin: '0 0 16px 0',
          letterSpacing: '-0.5px'
        }}>
          REPORT COMPLETE.
        </h1>

        <p style={{
          fontSize: '13px',
          color: '#888',
          margin: '0 0 32px 0',
          lineHeight: 1.6
        }}>
          No further action is required.
        </p>

        <div style={{
          borderTop: '1px solid #222',
          paddingTop: '24px',
          marginBottom: '24px',
          fontSize: '11px',
          color: '#555',
          lineHeight: 1.8
        }}>
          <div>SESSION: #8F2-991-A // VERIFIED</div>
          <div>TRANSMISSION STATUS: DELIVERED</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MovingButton
            behavior="away"
            maxJumps={2}
            baseDistance={20}
            onClick={() => {
              sound.playClick(1.0);
              resetAll();
            }}
            style={{
              background: '#1a1a1a',
              border: '1px solid #444',
              color: '#777',
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              padding: '10px 24px',
              cursor: 'pointer'
            }}
          >
            RESTART ASSESSMENT
          </MovingButton>
        </div>

      </div>

    </div>
  );
};
