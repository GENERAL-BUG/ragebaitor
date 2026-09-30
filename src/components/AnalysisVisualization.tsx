import React from 'react';
import { Ideology } from '../types';

interface AnalysisVisualizationProps {
  ideology: Ideology;
  metrics: {
    cosmicAlignment: number;
    existentialStability: number;
    spiritualLatencyMs: number;
    philosophicalEntropy: string;
    innerPeaceCode: string;
    karmicDebtScore: number;
    soulRamUsage: string;
  };
}

export const AnalysisVisualization: React.FC<AnalysisVisualizationProps> = ({ ideology, metrics }) => {
  const rows = [
    { label: 'COSMIC ALIGNMENT', value: `${metrics.cosmicAlignment}%`, bar: metrics.cosmicAlignment, color: '#FFD600' },
    { label: 'EXISTENTIAL STABILITY', value: `${metrics.existentialStability}%`, bar: metrics.existentialStability, color: '#00FF41' },
    { label: 'GENUINE MINDFULNESS vs SCREEN DEPENDENCY', value: '92% SCREEN', bar: 92, color: '#FF6200' },
    { label: 'DETACHMENT FROM PHYSICAL REALM', value: `${100 - metrics.existentialStability}%`, bar: 100 - metrics.existentialStability, color: '#00FFFF' },
  ];

  return (
    <div style={{ fontFamily: '"Courier New", monospace', marginTop: '16px' }}>
      <div style={{ background: '#0a0a0a', border: '1px solid #333', borderTop: '3px solid #FF00FF', padding: '16px 20px', marginBottom: '12px' }}>
        <div style={{ fontSize: '11px', color: '#FF00FF', fontWeight: 'bold', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          ▮ EQUILIBRIUM DISPERSION MATRIX
        </div>
        {rows.map((row, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#666', marginBottom: '3px' }}>
              <span>{row.label}</span>
              <span style={{ color: row.color, fontWeight: 'bold' }}>{row.value}</span>
            </div>
            <div style={{ background: '#111', border: '1px solid #222', height: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${row.bar}%`, background: row.color, transition: 'width 0.8s ease' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
