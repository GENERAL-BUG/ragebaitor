import React from 'react';
import { useRage } from '../../context/RageContext';
import { Terminal, X, Zap, RotateCcw } from 'lucide-react';

export const DevConsoleModal: React.FC = () => {
  const { developerMode, toggleDeveloperMode, rageMetrics, responses, incrementRage, resetAll, addToast } = useRage();

  if (!developerMode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-cosmic-900 border border-emerald-500/50 rounded-2xl shadow-2xl p-6 font-mono text-emerald-400">
        
        <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-sm tracking-wider uppercase text-emerald-300">
              ATMAN OS // METAPHYSICAL DEBUGGER [v4.0.19]
            </h3>
          </div>
          <button
            onClick={toggleDeveloperMode}
            className="p-1 rounded hover:bg-emerald-500/20 text-emerald-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="my-4 text-xs space-y-2 max-h-64 overflow-y-auto pr-2">
          <p className="text-emerald-500">// Real-time psychological telemetry:</p>
          <div className="grid grid-cols-2 gap-2 p-3 bg-black/50 rounded-lg border border-emerald-500/20">
            <div>Rage Level: <span className="text-white font-bold">{rageMetrics.rageLevel}/7</span></div>
            <div>Total Clicks: <span className="text-white font-bold">{rageMetrics.clickCount}</span></div>
            <div>Evasions Triggered: <span className="text-white font-bold">{rageMetrics.evasionEscapes}</span></div>
            <div>Tab Blurs (Drifts): <span className="text-white font-bold">{rageMetrics.tabBlurCount}</span></div>
            <div>Toast Dismissals: <span className="text-white font-bold">{rageMetrics.toastDismissals}</span></div>
            <div>Session Time: <span className="text-white font-bold">{rageMetrics.timeSpentSec}s</span></div>
          </div>

          <p className="text-emerald-500 mt-2">// Current User Selections:</p>
          <div className="p-3 bg-black/50 rounded-lg border border-emerald-500/20 text-[11px] break-words">
            Interests: {JSON.stringify(responses.interests)}<br />
            Slider Score: {responses.existentialScore}<br />
            Free Thought: "{responses.freeTextThought.slice(0, 50) || 'None'}"
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-emerald-500/30">
          <div className="flex gap-2">
            <button
              onClick={() => {
                incrementRage(1);
                addToast({
                  title: 'Manual Hostility Surge',
                  message: 'Hostility incremented via debugger console.',
                  type: 'alert'
                });
              }}
              className="px-3 py-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-xs hover:bg-emerald-500/30 flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" /> +1 Hostility
            </button>
            <button
              onClick={resetAll}
              className="px-3 py-1.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs hover:bg-rose-500/30 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Hard Reset
            </button>
          </div>
          <button
            onClick={toggleDeveloperMode}
            className="px-4 py-1.5 rounded bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
};
