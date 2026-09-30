import React from 'react';
import { useRage } from '../../context/RageContext';
import { Terminal, X, Zap, RotateCcw } from 'lucide-react';

export const HostilityBadge: React.FC = () => {
  const { rageMetrics } = useRage();
  const level = rageMetrics.rageLevel;

  const levels = [
    { label: '0: Deceptively Calm', color: '#00FF41' },
    { label: '1: Passive-Aggression', color: '#BFFF00' },
    { label: '2: Suspicion Phase', color: '#FFD600' },
    { label: '3: Moving Buttons', color: '#FF6200' },
    { label: '4: Administrative Hell', color: '#FF2020' },
    { label: '5: Full Offense Mode', color: '#FF00FF' },
    { label: '6: Sentient Contempt', color: '#FF00FF' },
    { label: '7: SINGULARITY', color: '#FF0000' },
  ];

  const current = levels[Math.min(7, level)];

  return (
    <div
      style={{
        fontFamily: '"Courier New", monospace',
        fontSize: '9px',
        padding: '3px 8px',
        border: `1px solid ${current.color}`,
        color: current.color,
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        whiteSpace: 'nowrap',
      }}
      title="UX hostility escalation level"
    >
      <span>UX:</span>
      <span style={{ fontWeight: 'bold' }}>{current.label}</span>
    </div>
  );
};

export const DevConsoleModal: React.FC = () => {
  const { developerMode, toggleDeveloperMode, rageMetrics, responses, incrementRage, resetAll, addToast } = useRage();

  if (!developerMode) return null;

  return (
    <div className="atrocity-modal-overlay">
      <div style={{
        background: '#0a0a0a',
        border: '2px solid #00FF41',
        maxWidth: '500px',
        width: '95%',
        fontFamily: '"Courier New", monospace',
        color: '#00FF41',
      }}>
        <div style={{ background: '#001a00', borderBottom: '1px solid #00FF41', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>▮ ATMAN OS // METAPHYSICAL DEBUGGER [v4.0.19]</span>
          <button onClick={toggleDeveloperMode} style={{ background: 'transparent', border: '1px solid #00FF41', color: '#00FF41', cursor: 'pointer', padding: '2px 8px', fontFamily: '"Courier New", monospace' }}>✕</button>
        </div>
        <div style={{ padding: '12px', fontSize: '11px' }}>
          <div style={{ color: '#555', marginBottom: '8px' }}>// psychological telemetry:</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px', border: '1px solid #001a00', padding: '8px', background: '#050505', marginBottom: '10px' }}>
            <span>Rage Level: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.rageLevel}/7</span></span>
            <span>Clicks: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.clickCount}</span></span>
            <span>Evasions: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.evasionEscapes}</span></span>
            <span>Tab Blurs: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.tabBlurCount}</span></span>
            <span>Dismissals: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.toastDismissals}</span></span>
            <span>Time: <span style={{ color: '#FFD600', fontWeight: 'bold' }}>{rageMetrics.timeSpentSec}s</span></span>
          </div>
          <div style={{ color: '#555', marginBottom: '4px' }}>// user responses:</div>
          <div style={{ padding: '6px 8px', background: '#050505', border: '1px solid #001a00', fontSize: '10px', color: '#888', marginBottom: '10px', wordBreak: 'break-all' }}>
            Interests: {JSON.stringify(responses.interests)}<br />
            Slider: {responses.existentialScore}<br />
            Text: "{responses.freeTextThought.slice(0, 60) || 'none'}"
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={() => { incrementRage(1); addToast({ title: '+1 hostility', message: 'Manually escalated via debug console.', type: 'alert' }); }}
              style={{ background: '#001a00', border: '1px solid #00FF41', color: '#00FF41', padding: '4px 10px', cursor: 'pointer', fontSize: '11px', fontFamily: '"Courier New", monospace' }}
            >
              +1 RAGE
            </button>
            <button
              onClick={resetAll}
              style={{ background: '#1a0000', border: '1px solid #FF2020', color: '#FF2020', padding: '4px 10px', cursor: 'pointer', fontSize: '11px', fontFamily: '"Courier New", monospace' }}
            >
              HARD RESET
            </button>
            <button
              onClick={toggleDeveloperMode}
              style={{ background: '#00FF41', border: 'none', color: '#000', padding: '4px 10px', cursor: 'pointer', fontSize: '11px', fontFamily: '"Courier New", monospace', fontWeight: 'bold' }}
            >
              CLOSE TERMINAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
