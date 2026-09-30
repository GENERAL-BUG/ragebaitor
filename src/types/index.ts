export type ScreenState = 
  | 'LANDING' 
  | 'QUESTIONNAIRE' 
  | 'VERIFICATION' 
  | 'ANALYZING' 
  | 'RESULT';

export type QuestionStep = 1 | 2 | 3 | 4;

export type ButtonAggressionLevel = 'low' | 'medium' | 'high' | 'unnecessary';

export interface Ideology {
  id: string;
  name: string;
  tagline: string;
  glyph: string;
  element: string;
  description: string;
  dominantTraits: string[];
  spiritualWeakness: string;
  philosophicalContradiction: string;
  cosmicCompatibility: {
    idealPartner: string;
    naturalEnemy: string;
    karmicDebtMultiplier: string;
  };
  recommendation: string;
  disclaimer: string;
  metrics: {
    cosmicAlignment: number;
    existentialStability: number;
    spiritualLatencyMs: number;
    philosophicalEntropy: string;
    innerPeaceCode: string;
  };
}

export interface InterestItem {
  id: string;
  label: string;
  category: string;
  karmicWeight: number;
  snarkComment?: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  subtext?: string;
  ideologyWeight: Record<string, number>;
  triggerToast?: string;
}

export interface Question {
  id: string;
  step: QuestionStep;
  title: string;
  subtitle?: string;
  type: 'radio' | 'multi' | 'slider' | 'textarea' | 'dilemma';
  options?: QuestionOption[];
  minLabel?: string;
  maxLabel?: string;
  rageTrigger?: 'delay' | 'evade' | 'reorder' | 'hesitate';
}

export interface ToastMessage {
  id: string;
  icon?: string;
  title: string;
  message: string;
  type?: 'info' | 'warning' | 'alert' | 'judgment';
  timestamp: number;
  duration?: number;
}

export interface ModalConfig {
  id: string;
  title: string;
  content: string;
  subtext?: string;
  type?: 'interruption' | 'liability' | 'certainty' | 'captcha' | 'error' | 'confirmation_step';
  primaryBtnText?: string;
  secondaryBtnText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryMoves?: boolean;
}

export interface UserResponses {
  interests: string[];
  preferences: Record<string, string>;
  moralChoices: Record<string, string>;
  existentialScore: number;
  freeTextThought: string;
  acceptedAbsurdAgreement: boolean;
  verifiedIntent: boolean;
}

export interface RageMetrics {
  rageLevel: number; // 0 to 7+
  clickCount: number;
  evasionEscapes: number;
  rapidClicks: number;
  timeSpentSec: number;
  tabBlurCount: number;
  disagreementAttempts: number;
  tryAgainAttempts: number;
  toastDismissals: number;
  easterEggFound: boolean;
}
