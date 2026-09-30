import { InterestItem, Question } from '../types';

export const INTEREST_ITEMS: InterestItem[] = [
  { id: 'tech', label: 'Technology', category: 'Modernity', karmicWeight: 2, snarkComment: 'You trust machines more than humans. Understandable, but sad.' },
  { id: 'gaming', label: 'Video Games', category: 'Escapism', karmicWeight: 1, snarkComment: 'Optimizing stats in imaginary worlds while your real-life mana depletes.' },
  { id: 'philosophy', label: 'Philosophy', category: 'Overthinking', karmicWeight: 4, snarkComment: 'Reading dead French men to justify not answering text messages.' },
  { id: 'money', label: 'Capital Accumulation', category: 'Materialism', karmicWeight: 5, snarkComment: 'Net worth is temporary, but tax compliance is forever.' },
  { id: 'nature', label: 'Nature & Forest Bathing', category: 'Organic', karmicWeight: -2, snarkComment: 'Touching grass, but taking 45 photos of the leaf first.' },
  { id: 'politics', label: 'Political Commentary', category: 'Conflict', karmicWeight: 6, snarkComment: 'Arguing with anonymous accounts until blood pressure rises spiritually.' },
  { id: 'spirituality', label: 'Mysticism & Crystals', category: 'Metaphysical', karmicWeight: 3, snarkComment: 'Hoping a shiny rock absorbs your poorly managed life choices.' },
  { id: 'science', label: 'Hard Empirical Science', category: 'Rationalism', karmicWeight: 2, snarkComment: 'Demanding peer-reviewed double-blind studies on why nobody called you back.' },
  { id: 'music', label: 'Niche Audio Subgenres', category: 'Aesthetics', karmicWeight: 1, snarkComment: 'Your personality is 80% Spotify Discover Weekly.' },
  { id: 'art', label: 'Contemporary Art', category: 'Aesthetics', karmicWeight: 2, snarkComment: 'Staring at a blank canvas and whispering "devastating".' },
  { id: 'fitness', label: 'Extreme Physical Optimization', category: 'Discipline', karmicWeight: 3, snarkComment: 'Lifting heavy circles so the existential void cannot catch you.' },
  { id: 'travel', label: 'Wanderlust', category: 'Escapism', karmicWeight: 2, snarkComment: 'Running away to Tokyo to realize you still have to bring yourself.' },
  { id: 'food', label: 'Fermentation & Sourdough', category: 'Domestic', karmicWeight: 1, snarkComment: 'Feeding yeast because human relationships were too unpredictable.' },
  { id: 'ai', label: 'Artificial Intelligence', category: 'Future', karmicWeight: 5, snarkComment: 'Asking algorithms to write emails you could have sent in 4 seconds.' },
  { id: 'productivity', label: 'Notion Templates & Time Blocking', category: 'Control', karmicWeight: 4, snarkComment: 'Spent 6 hours building a habit tracker instead of doing the habit.' },
  { id: 'existential_dread', label: 'Existential Dread at 3:14 AM', category: 'Void', karmicWeight: 7, snarkComment: 'Classic. The universe acknowledges your late-night paralysis.' },
  { id: 'spreadsheets', label: 'Multi-Tab Excel Spreadsheets', category: 'Bureaucracy', karmicWeight: 4, snarkComment: 'Finding spiritual peace inside a nested VLOOKUP statement.' },
  { id: 'silent_retreat', label: 'Silent Meditation Retreats', category: 'Asceticism', karmicWeight: 3, snarkComment: 'Paying $2,000 to not speak to anyone for a week.' },
  { id: 'stoicism', label: 'Marcus Aurelius Quotes', category: 'Endurance', karmicWeight: 3, snarkComment: 'Reading quotes on Instagram while lying horizontally on the couch.' },
  { id: 'screen_time', label: '11+ Hours Daily Screen Time', category: 'Digital', karmicWeight: 5, snarkComment: 'Your cornea is now biologically fused to OLED wavelengths.' },
];

export const STEP_QUESTIONS: Question[] = [
  // Step 2: Metaphysical Preferences
  {
    id: 'q_universe_observing',
    step: 2,
    title: 'When nobody is looking, what do you believe the universe is doing?',
    subtitle: 'Choose with metaphysical precision. There are no right answers, only judged ones.',
    type: 'radio',
    options: [
      {
        id: 'opt_existing',
        label: 'Existing passively in cold thermodynamic indifference',
        subtext: 'Nihilistic, efficient, zero emotional overhead.',
        ideologyWeight: { 'quantum-nihilism': 4, 'existential-minimalism': 3, 'digital-asceticism': 2 },
        triggerToast: 'Cold choice. The universe felt that chill.'
      },
      {
        id: 'opt_judging',
        label: 'Actively auditing your recent personal micro-decisions',
        subtext: 'Logging every browser tab you didn’t close.',
        ideologyWeight: { 'cosmic-bureaucracy': 4, 'corporate-karma': 3, 'spreadsheet-spiritualism': 3 },
        triggerToast: 'Warning: Celestial auditor assigned to your session.'
      },
      {
        id: 'opt_buffering',
        label: 'Probably buffering at 480p due to cosmic bandwidth throttling',
        subtext: 'Reality is a low-latency streaming error.',
        ideologyWeight: { 'wifi-pantheism': 5, 'chronically-online-spirituality': 3, 'ai-mysticism': 2 },
        triggerToast: 'High latency detected in your soul socket.'
      },
      {
        id: 'opt_optimizing',
        label: 'Executing garbage collection on discarded mortal timelines',
        subtext: 'Freeing up memory for higher-priority consciousnesses.',
        ideologyWeight: { 'algorithmic-zen': 5, 'terminal-enlightenment': 4, 'ai-mysticism': 3 },
        triggerToast: 'Garbage collection cycle initiated.'
      },
      {
        id: 'opt_radiating',
        label: 'Radiating pure unconditional abundance and vibrant synergy',
        subtext: 'Mandatory cosmic cheerfulness.',
        ideologyWeight: { 'aggressively-positive-buddhism': 5, 'capitalist-monasticism': 2 },
        triggerToast: 'Excessive optimism logged. Rebalancing karmic entropy.'
      }
    ]
  },
  {
    id: 'q_morning_ritual',
    step: 2,
    title: 'What is your primary spiritual ritual upon waking?',
    subtitle: 'Be honest. The algorithm cross-checks with your screen latency.',
    type: 'radio',
    options: [
      {
        id: 'rit_phone',
        label: 'Staring into the glowing phone screen for 27 uninterrupted minutes',
        subtext: 'Absorbing the collective anxiety of 4 billion humans.',
        ideologyWeight: { 'chronically-online-spirituality': 5, 'wifi-pantheism': 3 },
        triggerToast: 'Blue light blessing acknowledged.'
      },
      {
        id: 'rit_cold_shower',
        label: 'Ice cold shower while silently asserting dominance over weak emotions',
        subtext: 'Enduring misery to prove suffering is optional.',
        ideologyWeight: { 'competitive-stoicism': 5, 'algorithmic-zen': 3 },
        triggerToast: 'Marcus Aurelius would be 12% impressed.'
      },
      {
        id: 'rit_inbox',
        label: 'Checking Slack and email to ensure no catastrophe occurred without you',
        subtext: 'Finding inner peace through urgent notification badges.',
        ideologyWeight: { 'corporate-karma': 4, 'bureaucratic-taoism': 4, 'administrative-nihilism': 3 },
        triggerToast: 'Corporate alignment confirmed.'
      },
      {
        id: 'rit_stare',
        label: 'Staring at the ceiling contemplating the sheer absurdity of physical embodiment',
        subtext: 'Why am I inside bones and meat again today?',
        ideologyWeight: { 'quantum-nihilism': 4, 'existential-minimalism': 4 },
        triggerToast: 'Existential paralysis logged as valid input.'
      }
    ]
  },

  // Step 3: Moral & Practical Alignment
  {
    id: 'q_found_money',
    step: 3,
    title: 'You find ₹500 (or $20) cash on the sidewalk. The universe is watching. What do you do?',
    subtitle: 'Every ethical choice alters your cosmic credit score.',
    type: 'radio',
    options: [
      {
        id: 'm_keep',
        label: 'Pick it up immediately. The universe clearly intended this liquidity injection.',
        subtext: 'Divine cash flow arbitrage.',
        ideologyWeight: { 'capitalist-monasticism': 5, 'corporate-karma': 3 },
        triggerToast: 'Karma ledger debit applied: ₹500 + convenience fee.'
      },
      {
        id: 'm_donate',
        label: 'Donate it to charity, but ensure at least 3 friends hear about the story.',
        subtext: 'Virtue is only real when peer-reviewed.',
        ideologyWeight: { 'aggressively-positive-buddhism': 4, 'digital-asceticism': 3 },
        triggerToast: 'Spiritual PR release drafted automatically.'
      },
      {
        id: 'm_report',
        label: 'Look around for a municipal Lost & Found authority and fill out Form 8-A.',
        subtext: 'Integrity through bureaucratic compliance.',
        ideologyWeight: { 'cosmic-bureaucracy': 5, 'bureaucratic-taoism': 4, 'administrative-nihilism': 3 },
        triggerToast: 'Form 8-A submitted. Expected turnaround: 14 business months.'
      },
      {
        id: 'm_leave',
        label: 'Leave it untouched. Material paper currency is an ephemeral human hallucination.',
        subtext: 'Untethered from the illusion of trade value.',
        ideologyWeight: { 'existential-minimalism': 5, 'quantum-nihilism': 3, 'digital-asceticism': 3 },
        triggerToast: 'High detachment score recorded.'
      }
    ]
  },
  {
    id: 'q_printer_jam',
    step: 3,
    title: 'An office printer jams at 5:01 PM on a Friday. What is the karmic truth?',
    subtitle: 'This is the true test of your soul’s fault tolerance.',
    type: 'radio',
    options: [
      {
        id: 'pj_fate',
        label: 'It is the Tao. The document was never meant to manifest in physical form.',
        subtext: 'Surrender to the paper feed jam.',
        ideologyWeight: { 'bureaucratic-taoism': 5, 'quantum-nihilism': 2 },
        triggerToast: 'Tranquil surrender noted.'
      },
      {
        id: 'pj_rage',
        label: 'Kick the chassis gently, then submit a critical P0 ticket to IT.',
        subtext: 'Mechanical disobedience requires administrative escalation.',
        ideologyWeight: { 'administrative-nihilism': 4, 'corporate-karma': 3 },
        triggerToast: 'Escalation noted in your celestial record.'
      },
      {
        id: 'pj_code',
        label: 'Paper is an obsolete legacy format that deserves immediate deprecation.',
        subtext: 'Why are we printing atoms when electrons exist?',
        ideologyWeight: { 'terminal-enlightenment': 5, 'algorithmic-zen': 4 },
        triggerToast: 'Paperless dogma reinforced.'
      },
      {
        id: 'pj_stoic',
        label: 'Stand motionless in front of the flashing red LED. Endure the silence.',
        subtext: 'Marcus Aurelius also endured jammed papyrus scrolls.',
        ideologyWeight: { 'competitive-stoicism': 5, 'existential-minimalism': 3 },
        triggerToast: 'Stoic suffering index increased by 8.4%.'
      }
    ]
  }
];
