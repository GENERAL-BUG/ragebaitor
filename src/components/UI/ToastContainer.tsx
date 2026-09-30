import React from 'react';
import { useRage } from '../../context/RageContext';
import { ToastMessage } from '../../types';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useRage();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      maxWidth: '320px',
      width: '100%',
    }}>
      {toasts.map((toast) => (
        <UglyToast key={toast.id} toast={toast} onDismiss={(id) => removeToast(id, true)} />
      ))}
    </div>
  );
};

const UglyToast: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({ toast, onDismiss }) => {
  const borderColor = toast.type === 'judgment' ? '#FF00FF' : toast.type === 'alert' ? '#FF2020' : toast.type === 'warning' ? '#FFD600' : '#00FF41';
  const textColor = toast.type === 'judgment' ? '#FF00FF' : toast.type === 'alert' ? '#FF2020' : toast.type === 'warning' ? '#FFD600' : '#00FF41';

  return (
    <div style={{
      background: '#0a0a0a',
      border: `2px solid ${borderColor}`,
      borderLeft: `5px solid ${borderColor}`,
      fontFamily: '"Courier New", monospace',
      fontSize: '11px',
      padding: '8px 10px',
      boxShadow: '4px 4px 0 #000',
      animation: 'slideInRight 0.2s ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: textColor, fontWeight: 'bold', marginBottom: '3px', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '1px' }}>
            🔔 {toast.title}
          </div>
          <div style={{ color: '#bbb', lineHeight: 1.5 }}>
            {toast.message}
          </div>
        </div>
        <button
          onClick={() => onDismiss(toast.id)}
          title="Dismiss (consequences may follow)"
          style={{
            background: 'transparent',
            border: `1px solid ${borderColor}`,
            color: textColor,
            fontSize: '14px',
            lineHeight: 1,
            padding: '1px 6px',
            cursor: 'pointer',
            fontFamily: '"Courier New", monospace',
            flexShrink: 0,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};
