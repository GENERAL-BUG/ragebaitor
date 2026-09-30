import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { ScreenState, QuestionStep, UserResponses, RageMetrics, ToastMessage, ModalConfig, ButtonAggressionLevel } from '../types';
import { PASSIVE_AGGRESSIVE_TOASTS, DISMISSAL_RETALIATION_TOASTS } from '../data/toasts';
import { sound } from '../services/audioEngine';

interface RageContextType {
  screen: ScreenState;
  currentStep: QuestionStep;
  rageMetrics: RageMetrics;
  responses: UserResponses;
  toasts: ToastMessage[];
  activeModal: ModalConfig | null;
  soundEnabled: boolean;
  developerMode: boolean;
  buttonAggression: ButtonAggressionLevel;
  totalButtonInteractions: number;
  isCenterPopupOpen: boolean;
  hasCenterPopupTriggered: boolean;
  setScreen: (s: ScreenState) => void;
  setCurrentStep: (step: QuestionStep) => void;
  incrementRage: (amount?: number, reason?: string) => void;
  addToast: (toast: Omit<ToastMessage, 'id' | 'timestamp'>) => void;
  removeToast: (id: string, wasManual?: boolean) => void;
  showModal: (config: ModalConfig) => void;
  closeModal: () => void;
  toggleSound: () => void;
  recordClick: (targetName?: string) => void;
  toggleInterest: (id: string) => void;
  setPreference: (questionId: string, optionId: string) => void;
  setMoralChoice: (questionId: string, optionId: string) => void;
  setExistentialScore: (val: number) => void;
  setFreeTextThought: (text: string) => void;
  setAcceptedAgreement: (val: boolean) => void;
  setVerifiedIntent: (val: boolean) => void;
  triggerEasterEgg: () => void;
  toggleDeveloperMode: () => void;
  openCenterPopup: () => void;
  dismissCenterPopup: () => void;
  triggerRickroll: (source?: string) => void;
  resetAll: () => void;
}

const initialResponses: UserResponses = {
  interests: ['philosophy', 'tech'],
  preferences: {},
  moralChoices: {},
  existentialScore: 50,
  freeTextThought: '',
  acceptedAbsurdAgreement: false,
  verifiedIntent: false,
};

const initialRageMetrics: RageMetrics = {
  rageLevel: 0,
  clickCount: 0,
  evasionEscapes: 0,
  rapidClicks: 0,
  timeSpentSec: 0,
  tabBlurCount: 0,
  disagreementAttempts: 0,
  tryAgainAttempts: 0,
  toastDismissals: 0,
  easterEggFound: false,
};

const RageContext = createContext<RageContextType | undefined>(undefined);

export const RageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screen, setScreenState] = useState<ScreenState>('LANDING');
  const [currentStep, setCurrentStepState] = useState<QuestionStep>(1);
  const [rageMetrics, setRageMetrics] = useState<RageMetrics>(initialRageMetrics);
  const [responses, setResponses] = useState<UserResponses>(initialResponses);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeModal, setActiveModal] = useState<ModalConfig | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [developerMode, setDeveloperMode] = useState<boolean>(false);
  const [buttonAggression] = useState<ButtonAggressionLevel>('high');
  const [totalButtonInteractions, setTotalButtonInteractions] = useState<number>(0);
  const [isCenterPopupOpen, setIsCenterPopupOpen] = useState<boolean>(false);
  const [hasCenterPopupTriggered, setHasCenterPopupTriggered] = useState<boolean>(false);

  // Time tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setRageMetrics(prev => ({
        ...prev,
        timeSpentSec: prev.timeSpentSec + 1
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update rageLevel dynamically
  useEffect(() => {
    const calculatedLevel = Math.min(
      7,
      Math.floor(
        (rageMetrics.clickCount * 0.05) +
        (rageMetrics.evasionEscapes * 0.5) +
        (rageMetrics.tabBlurCount * 0.8) +
        (rageMetrics.disagreementAttempts * 1.2) +
        (rageMetrics.tryAgainAttempts * 1.5) +
        (rageMetrics.toastDismissals * 0.4)
      )
    );

    if (calculatedLevel !== rageMetrics.rageLevel && calculatedLevel <= 7) {
      setRageMetrics(prev => ({ ...prev, rageLevel: calculatedLevel }));
    }
  }, [
    rageMetrics.clickCount,
    rageMetrics.evasionEscapes,
    rageMetrics.tabBlurCount,
    rageMetrics.disagreementAttempts,
    rageMetrics.tryAgainAttempts,
    rageMetrics.toastDismissals,
    rageMetrics.rageLevel
  ]);

  // Tab blur detection (deadpan title)
  useEffect(() => {
    const originalTitle = document.title;
    const handleBlur = () => {
      document.title = 'Assessment in progress.';
      setRageMetrics(prev => ({ ...prev, tabBlurCount: prev.tabBlurCount + 1 }));
    };

    const handleFocus = () => {
      document.title = originalTitle;
      setTimeout(() => {
        addToast({
          title: 'LOG',
          message: 'Your previous selection has been retained.',
          type: 'judgment'
        });
      }, 500);
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Trigger Center Popup after initial interactions (e.g. 7 button interactions or moving to step 2/3)
  useEffect(() => {
    if (!hasCenterPopupTriggered && (totalButtonInteractions >= 7 || currentStep >= 2)) {
      setHasCenterPopupTriggered(true);
      setTimeout(() => {
        sound.playPopupAlert();
        setIsCenterPopupOpen(true);
      }, 600);
    }
  }, [totalButtonInteractions, currentStep, hasCenterPopupTriggered]);

  const setScreen = (s: ScreenState) => {
    sound.playClick(1.2);
    setScreenState(s);
  };

  const setCurrentStep = (step: QuestionStep) => {
    sound.playClick(1.0 + step * 0.1);
    setCurrentStepState(step);
  };

  const incrementRage = useCallback((amount: number = 1, reason?: string) => {
    setRageMetrics(prev => {
      const nextLevel = Math.min(7, prev.rageLevel + amount);
      return {
        ...prev,
        rageLevel: nextLevel,
        evasionEscapes: reason === 'evasion' ? prev.evasionEscapes + 1 : prev.evasionEscapes
      };
    });
    setTotalButtonInteractions(prev => prev + 1);
  }, []);

  const addToast = useCallback((toastData: Omit<ToastMessage, 'id' | 'timestamp'>) => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const newToast: ToastMessage = {
      ...toastData,
      id,
      timestamp: Date.now(),
      duration: toastData.duration ?? 4500
    };

    setToasts(prev => {
      // Limit to 3 small visible stacked toasts
      const trimmed = prev.length >= 3 ? prev.slice(prev.length - 2) : prev;
      return [...trimmed, newToast];
    });

    if (toastData.type === 'judgment') {
      sound.playJudgmentChime();
    } else if (toastData.type === 'alert') {
      sound.playPopupAlert();
    } else {
      sound.playClick(0.8);
    }
  }, []);

  const removeToast = useCallback((id: string, wasManual: boolean = false) => {
    setToasts(prev => prev.filter(t => t.id !== id));
    if (wasManual) {
      setRageMetrics(prev => ({ ...prev, toastDismissals: prev.toastDismissals + 1 }));
      if (Math.random() < 0.35) {
        setTimeout(() => {
          const retaliation = DISMISSAL_RETALIATION_TOASTS[Math.floor(Math.random() * DISMISSAL_RETALIATION_TOASTS.length)];
          addToast(retaliation);
        }, 600);
      }
    }
  }, [addToast]);

  const showModal = (config: ModalConfig) => {
    sound.playPopupAlert();
    setActiveModal(config);
  };

  const closeModal = () => {
    sound.playClick(0.9);
    setActiveModal(null);
  };

  const openCenterPopup = () => {
    sound.playPopupAlert();
    setIsCenterPopupOpen(true);
  };

  const dismissCenterPopup = () => {
    sound.playClick(0.9);
    setIsCenterPopupOpen(false);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
    if (next) sound.playClick(1.5);
  };

  const recordClick = (_targetName?: string) => {
    sound.playClick(1.0);
    setTotalButtonInteractions(prev => prev + 1);
    setRageMetrics(prev => {
      const nextCount = prev.clickCount + 1;
      if (nextCount % 10 === 0) {
        const randomToast = PASSIVE_AGGRESSIVE_TOASTS[Math.floor(Math.random() * PASSIVE_AGGRESSIVE_TOASTS.length)];
        setTimeout(() => addToast(randomToast), 300);
      }
      return { ...prev, clickCount: nextCount };
    });
  };

  const toggleInterest = (id: string) => {
    sound.playClick(1.1);
    setTotalButtonInteractions(prev => prev + 1);
    setResponses(prev => {
      const exists = prev.interests.includes(id);
      const nextInterests = exists 
        ? prev.interests.filter(item => item !== id)
        : [...prev.interests, id];
      
      return { ...prev, interests: nextInterests };
    });
  };

  const setPreference = (questionId: string, optionId: string) => {
    setTotalButtonInteractions(prev => prev + 1);
    setResponses(prev => ({
      ...prev,
      preferences: { ...prev.preferences, [questionId]: optionId }
    }));
  };

  const setMoralChoice = (questionId: string, optionId: string) => {
    setTotalButtonInteractions(prev => prev + 1);
    setResponses(prev => ({
      ...prev,
      moralChoices: { ...prev.moralChoices, [questionId]: optionId }
    }));
  };

  const setExistentialScore = (val: number) => {
    setResponses(prev => ({ ...prev, existentialScore: val }));
  };

  const setFreeTextThought = (text: string) => {
    setResponses(prev => ({ ...prev, freeTextThought: text }));
  };

  const setAcceptedAgreement = (val: boolean) => {
    setResponses(prev => ({ ...prev, acceptedAbsurdAgreement: val }));
  };

  const setVerifiedIntent = (val: boolean) => {
    setResponses(prev => ({ ...prev, verifiedIntent: val }));
  };

  const triggerEasterEgg = () => {
    sound.playEnlightenmentFanfare();
    setRageMetrics(prev => ({ ...prev, easterEggFound: true }));
    addToast({
      title: 'ACCESS',
      message: 'Terminal verified.',
      type: 'judgment'
    });
  };

  const toggleDeveloperMode = () => {
    sound.playClick(2.0);
    setDeveloperMode(prev => !prev);
  };

  // Rickroll Climax trigger: Exactly ONE new tab
  const triggerRickroll = (source?: string) => {
    sound.playEnlightenmentFanfare();
    if (source) {
      addToast({
        title: 'LOG',
        message: source,
        type: 'info'
      });
    }
    // Canonical link in one new tab only
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer');
  };

  const resetAll = () => {
    sound.playGong();
    setScreenState('LANDING');
    setCurrentStepState(1);
    setResponses(initialResponses);
    setRageMetrics(prev => ({
      ...initialRageMetrics,
      tryAgainAttempts: prev.tryAgainAttempts + 1
    }));
    setActiveModal(null);
    setToasts([]);
    setIsCenterPopupOpen(false);
    setHasCenterPopupTriggered(false);
    setTotalButtonInteractions(0);
  };

  return (
    <RageContext.Provider
      value={{
        screen,
        currentStep,
        rageMetrics,
        responses,
        toasts,
        activeModal,
        soundEnabled,
        developerMode,
        buttonAggression,
        totalButtonInteractions,
        isCenterPopupOpen,
        hasCenterPopupTriggered,
        setScreen,
        setCurrentStep,
        incrementRage,
        addToast,
        removeToast,
        showModal,
        closeModal,
        toggleSound,
        recordClick,
        toggleInterest,
        setPreference,
        setMoralChoice,
        setExistentialScore,
        setFreeTextThought,
        setAcceptedAgreement,
        setVerifiedIntent,
        triggerEasterEgg,
        toggleDeveloperMode,
        openCenterPopup,
        dismissCenterPopup,
        triggerRickroll,
        resetAll,
      }}
    >
      {children}
    </RageContext.Provider>
  );
};

export const useRage = () => {
  const context = useContext(RageContext);
  if (!context) {
    throw new Error('useRage must be used within a RageProvider');
  }
  return context;
};
