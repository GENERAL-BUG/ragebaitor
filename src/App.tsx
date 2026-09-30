import React, { useEffect } from 'react';
import { RageProvider, useRage } from './context/RageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressBar } from './components/Questionnaire/ProgressBar';
import { Step1Interests } from './components/Questionnaire/Step1Interests';
import { Step2Preferences } from './components/Questionnaire/Step2Preferences';
import { Step3MoralAlignment } from './components/Questionnaire/Step3MoralAlignment';
import { Step4ExistentialSlider } from './components/Questionnaire/Step4ExistentialSlider';
import { Step5Verification } from './components/Questionnaire/Step5Verification';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultCard } from './components/ResultCard';
import { CenterPopup } from './components/CenterPopup';
import { ToastContainer } from './components/UI/ToastContainer';
import { DevConsoleModal } from './components/UI/DevConsoleModal';

const MainAppContent: React.FC = () => {
  const { 
    screen, 
    currentStep, 
    recordClick, 
    addToast,
    isCenterPopupOpen,
    dismissCenterPopup 
  } = useRage();

  // Inactivity monitoring for deadpan commentary
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        addToast({
          title: 'LOG',
          message: 'Inactivity recorded.',
          type: 'judgment'
        });
      }, 40000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [addToast]);

  return (
    <div 
      onClick={() => recordClick()} 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0E0E10',
        color: '#E0E0E0',
        fontFamily: '"Courier New", Courier, monospace',
        position: 'relative'
      }}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Main Dynamic View Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 0' }}>
        {screen === 'LANDING' && <Hero />}

        {screen === 'QUESTIONNAIRE' && (
          <div>
            <ProgressBar currentStep={currentStep} />
            {currentStep === 1 && <Step1Interests />}
            {currentStep === 2 && <Step2Preferences />}
            {currentStep === 3 && <Step3MoralAlignment />}
            {currentStep === 4 && <Step4ExistentialSlider />}
          </div>
        )}

        {screen === 'VERIFICATION' && <Step5Verification />}

        {screen === 'ANALYZING' && <LoadingScreen />}

        {screen === 'RESULT' && <ResultCard />}
      </main>

      {/* The One Major Center-Screen Popup */}
      <CenterPopup
        isOpen={isCenterPopupOpen}
        onDismiss={dismissCenterPopup}
      />

      {/* Deadpan Toasts & Developer Console */}
      <ToastContainer />
      <DevConsoleModal />
    </div>
  );
};

export default function App() {
  return (
    <RageProvider>
      <MainAppContent />
    </RageProvider>
  );
}
