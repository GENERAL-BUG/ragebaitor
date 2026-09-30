import { ModalConfig } from '../types';

export const POPUP_PRESETS: Record<string, ModalConfig> = {
  spiritualInterruption: {
    id: 'spiritualInterruption',
    title: 'SPIRITUAL INTERRUPTION // NOTICE #4092',
    content: 'Before continuing to the next metaphysical tier, please formally confirm that you are spiritually prepared to perceive the consequences of your choices.',
    subtext: 'Failure to prepare may result in spontaneous ideological bewilderment or mild chakra dislocation.',
    type: 'interruption',
    primaryBtnText: 'Yes, I Am Prepared',
    secondaryBtnText: 'I Am Unprepared (Continue Anyway)',
    primaryMoves: false
  },
  certaintyAudit: {
    id: 'certaintyAudit',
    title: 'CONFIDENCE & CERTAINTY AUDIT',
    content: 'Our algorithms have detected that your previous response was selected with 89% certainty. The cosmos strictly requires either 100% unwavering dogma or 0% complete existential paralysis.',
    subtext: 'Please select one of the following non-ambiguous options:',
    type: 'certainty',
    primaryBtnText: 'I Am 100% Certain',
    secondaryBtnText: 'Definitely Unconditionally Yes',
    primaryMoves: true
  },
  liabilityAgreement: {
    id: 'liabilityAgreement',
    title: 'METAPHYSICAL LIABILITY & KARMIC RELEASE',
    content: 'By interacting with this interface, you waive all rights to sue the Cosmos, the developers, or the quantum fabric of space-time for any existential dread, unintended ego loss, or sudden realization that you should have taken that marketing job in 2019.',
    subtext: 'Clause 4.1: The user understands that they may not understand what they do not understand.',
    type: 'liability',
    primaryBtnText: 'I Understand That I May Not Understand',
    secondaryBtnText: 'I Reject Reality (Also Agree)',
    primaryMoves: false
  },
  soulCaptcha: {
    id: 'soulCaptcha',
    title: 'SECURITY CHECK: SOUL VERIFICATION',
    content: 'To prevent automated AI bots from attaining synthetic enlightenment before real humans, please solve the metaphysical verification challenge below.',
    subtext: 'Select all images containing "Unconditional Inner Peace".',
    type: 'captcha',
    primaryBtnText: 'Verify Consciousness',
    secondaryBtnText: 'I Am A Meat-Based Entity',
    primaryMoves: false
  },
  fakeError418: {
    id: 'fakeError418',
    title: 'SYSTEM FAULT: ERROR 418 // TEAPOT DETECTED',
    content: 'Your current spiritual configuration is temporarily emotionally unavailable. Our enlightenment cluster is experiencing heavy existential congestion.',
    subtext: 'Status: 0xSOUL_OVERFLOW. Do not refresh. Panic mindfully.',
    type: 'error',
    primaryBtnText: 'Attempt Karmic Hotfix',
    secondaryBtnText: 'Accept The Void',
    primaryMoves: true
  }
};
