import { Ideology } from '../types';

export const IDEOLOGIES: Ideology[] = [
  {
    id: 'corporate-karma',
    name: 'Corporate Karma',
    tagline: 'You seek inner peace, but preferably in a quarterly performance review.',
    glyph: '💼✨',
    element: 'Quarterly Earnings & Incense',
    description: 'You believe that spiritual enlightenment can be achieved provided all stakeholders are aligned and the retrospective action items are filed before 5:00 PM. You view reincarnation not as a cycle of suffering, but as a career pivot.',
    dominantTraits: [
      'Meditates exclusively in calendar blocks titled "Focus Time (DO NOT BOOK)"',
      'Uses the word "synergy" during mindful breathwork',
      'Believes karma operates on a Net Promoter Score (NPS) methodology',
      'Maintains an existential roadmap with measurable Q3 milestones'
    ],
    spiritualWeakness: 'Inability to reach Nirvana without a Gantt chart and senior management buy-in.',
    philosophicalContradiction: 'Claims desire is the root of all suffering while actively lobbying for equity acceleration.',
    cosmicCompatibility: {
      idealPartner: 'Spreadsheet Spiritualism',
      naturalEnemy: 'Quantum Nihilism',
      karmicDebtMultiplier: '1.25x (Annualized)'
    },
    recommendation: 'Schedule a 1-on-1 with the Cosmos. Send an agenda at least 24 hours in advance.',
    disclaimer: 'The universe accepts no liability for unvested metaphysical options upon ego dissolution.',
    metrics: {
      cosmicAlignment: 88.4,
      existentialStability: 42.1,
      spiritualLatencyMs: 1420,
      philosophicalEntropy: 'High (Audited)',
      innerPeaceCode: 'Q3-COMPLIANT'
    }
  },
  {
    id: 'algorithmic-zen',
    name: 'Algorithmic Zen',
    tagline: 'Enlightenment is an O(1) constant time problem if you optimize your sleep cycle.',
    glyph: '⚡🧘‍♂️',
    element: 'Pure Silicon & Binaural Beats',
    description: 'You treat your mortal consciousness as a poorly maintained legacy codebase. You are convinced that suffering is just unhandled runtime exceptions in your dopamine receptor protocol.',
    dominantTraits: [
      'Tracks heart rate variability while pretending to enjoy chamomile tea',
      'Considers waking up at 4:30 AM a moral imperative rather than a cry for help',
      'Refactors personal relationships based on emotional bandwidth efficiency',
      'Refuses to accept existential dread unless it can be visualized in Grafana'
    ],
    spiritualWeakness: 'Suffers immediate spiritual crash when the Wi-Fi router overheats.',
    philosophicalContradiction: 'Preaches detachment from the physical world through $8,000 worth of smart bio-wearables.',
    cosmicCompatibility: {
      idealPartner: 'AI Mysticism',
      naturalEnemy: 'Aggressively Positive Buddhism',
      karmicDebtMultiplier: '0.00ms (Buffered)'
    },
    recommendation: 'Refactor your ego into smaller microservices before cold-rebooting your chakra pipeline.',
    disclaimer: 'Soul optimization algorithms may introduce unexpected memory leaks in your subconscious.',
    metrics: {
      cosmicAlignment: 94.2,
      existentialStability: 28.6,
      spiritualLatencyMs: 12,
      philosophicalEntropy: 'Low (Cached)',
      innerPeaceCode: 'STATUS_200_OK'
    }
  },
  {
    id: 'quantum-nihilism',
    name: 'Quantum Nihilism',
    tagline: 'Nothing matters, but simultaneously everything matters until you check your bank account.',
    glyph: '🌌🕳️',
    element: 'Dark Matter & Unpaid Invoices',
    description: 'You exist in a superposition of caring entirely too much and accepting the cold cosmic void. The universe has no inherent meaning, yet somehow your credit card company still expects a minimum payment on the 14th.',
    dominantTraits: [
      'Comfortably stares into the abyss while scrolling food delivery apps',
      'Believes morality is a subjective construct, yet returns shopping carts out of sheer habit',
      'Uses cosmological timeframes (billions of years) to justify procrastinating on laundry',
      'Finds deep spiritual solace in knowing humanity is a minor evolutionary footnote'
    ],
    spiritualWeakness: 'Collapsing into acute panic whenever forced to make a concrete life decision.',
    philosophicalContradiction: 'Asserts reality is an illusion while continuously complaining about cold French fries.',
    cosmicCompatibility: {
      idealPartner: 'Administrative Nihilism',
      naturalEnemy: 'Aggressively Positive Buddhism',
      karmicDebtMultiplier: '0.00x (Voided)'
    },
    recommendation: 'Do not panic. Nothing is under control, and nobody is flying the cosmic spaceship.',
    disclaimer: 'This diagnosis ceases to exist the exact moment you attempt to explain it at a dinner party.',
    metrics: {
      cosmicAlignment: 14.8,
      existentialStability: 8.2,
      spiritualLatencyMs: 9999,
      philosophicalEntropy: 'Maximum Absolute',
      innerPeaceCode: 'ERR_NULL_POINTER'
    }
  },
  {
    id: 'aggressively-positive-buddhism',
    name: 'Aggressively Positive Buddhism',
    tagline: 'You WILL find inner peace today, whether you want to or not. BREATHE HARDER.',
    glyph: '🌸💥',
    element: 'Enthusiastic Prana & Forced Smiles',
    description: 'You practice mindfulness with the intensity of an Olympic powerlifter. Your gratitude journals are written in ALL CAPS. You confront sadness with immediate, non-negotiable spiritual cheerfulness.',
    dominantTraits: [
      'Aggressively tells distressed coworkers to "just manifest abundance"',
      'Chants affirmations loud enough to trigger local seismic detection sensors',
      'Views negative emotions as personal spiritual failures rather than normal human experiences',
      'Owns 47 pastel journals and 3 salt lamps per square meter of living space'
    ],
    spiritualWeakness: 'Deep, repressed terror that bad vibes might actually exist.',
    philosophicalContradiction: 'Preaches non-attachment while violently defending their favorite organic kombucha brand.',
    cosmicCompatibility: {
      idealPartner: 'Digital Asceticism',
      naturalEnemy: 'Quantum Nihilism',
      karmicDebtMultiplier: '10.0x (HYPER-POSITIVE)'
    },
    recommendation: 'Inhale peace. Exhale judgment. If peace refuses to enter, demand to speak with its supervisor.',
    disclaimer: 'Violent positivity may result in spontaneous social isolation and chakra strain.',
    metrics: {
      cosmicAlignment: 99.9,
      existentialStability: 18.5,
      spiritualLatencyMs: 140,
      philosophicalEntropy: 'Hyper-Coherent',
      innerPeaceCode: 'MANDATORY_JOY'
    }
  },
  {
    id: 'spreadsheet-spiritualism',
    name: 'Spreadsheet Spiritualism',
    tagline: 'Salvation is achievable provided the conditional formatting is preserved.',
    glyph: '📊🕊️',
    element: 'VLOOKUP & Transcendent Formulas',
    description: 'You believe human consciousness is a multi-dimensional table where good deeds are SUMIF formulas and sins are circular reference errors. If an emotion cannot be plotted on a scatter graph, it does not exist.',
    dominantTraits: [
      'Color-codes personal life regrets using subtle pastel hex palettes',
      'Calculates the karmic ROI of attending social gatherings before RSVPing',
      'Views spiritual awakening as reaching 100% cell formula coverage',
      'Takes profound comfort in fixed-width tabular borders'
    ],
    spiritualWeakness: 'Suffers acute existential vertigo when presented with qualitative emotions.',
    philosophicalContradiction: 'Seeks transcendental infinity through strictly row-limited cell grids.',
    cosmicCompatibility: {
      idealPartner: 'Corporate Karma',
      naturalEnemy: 'Chronically Online Spirituality',
      karmicDebtMultiplier: '=SUM(A1:A999)'
    },
    recommendation: 'Freeze panes on your core virtues before sorting your vices in descending order.',
    disclaimer: 'Karmic depreciation calculations are purely indicative and do not represent financial advice.',
    metrics: {
      cosmicAlignment: 78.1,
      existentialStability: 64.9,
      spiritualLatencyMs: 340,
      philosophicalEntropy: 'Zero (Normalized)',
      innerPeaceCode: '#REF!'
    }
  },
  {
    id: 'existential-minimalism',
    name: 'Existential Minimalism',
    tagline: 'You own three ceramic bowls and an overwhelming sense of cosmic solitude.',
    glyph: '🕯️⚪',
    element: 'Matte Grey Concrete & Silence',
    description: 'You have systematically eliminated physical clutter, emotional attachments, and colorful socks in search of pure emptiness. You have achieved an aesthetically immaculate apartment that feels faintly like a Scandinavian hospital.',
    dominantTraits: [
      'Gives away treasured family heirlooms because they didn’t match the monochrome palette',
      'Considers eating seasoned food a form of spiritual indulgence',
      'Finds deep spiritual comfort in empty white museum walls',
      'Explains that owning fewer items allows more room for existential dread'
    ],
    spiritualWeakness: 'Buying a single impulse novelty mug instantly shatters their entire spiritual framework.',
    philosophicalContradiction: 'Spends $450 on a minimalist titanium water bottle to prove material unimportance.',
    cosmicCompatibility: {
      idealPartner: 'Digital Asceticism',
      naturalEnemy: 'Capitalist Monasticism',
      karmicDebtMultiplier: '0.01x (Lightweight)'
    },
    recommendation: 'Throw away one more object. Perhaps this paragraph.',
    disclaimer: 'Emptiness guaranteed. Fulfillment sold separately.',
    metrics: {
      cosmicAlignment: 61.2,
      existentialStability: 33.4,
      spiritualLatencyMs: 820,
      philosophicalEntropy: 'Minimal Void',
      innerPeaceCode: 'BLANK_VOID'
    }
  },
  {
    id: 'capitalist-monasticism',
    name: 'Capitalist Monasticism',
    tagline: 'A strict vow of silence, sponsored by a Tier-1 venture capital syndicate.',
    glyph: '💰🧘',
    element: 'Seed Funding & Silent Retreats',
    description: 'You believe ascetic renunciation is only truly transformative if monetized through a scalable subscription model. You take 10-day silent retreats specifically to incubate high-margin SaaS ideas.',
    dominantTraits: [
      'Wears coarse linen robes manufactured by high-end Italian fashion houses',
      'Views ascetic fasting as an intermittent metabolic arbitrage strategy',
      'Network-pitches angel investors between silent walking meditations',
      'Believes Buddha would have had a phenomenal podcast following'
    ],
    spiritualWeakness: 'Ego returns at 300% volume whenever market cap drops below $10M.',
    philosophicalContradiction: 'Vows detachment from worldliness while monitoring portfolio push alerts every 90 seconds.',
    cosmicCompatibility: {
      idealPartner: 'Corporate Karma',
      naturalEnemy: 'Existential Minimalism',
      karmicDebtMultiplier: '2.5x (Carried Interest)'
    },
    recommendation: 'Incorporate your enlightenment in Delaware to minimize metaphysical taxation.',
    disclaimer: 'Metaphysical dividends subject to cosmic dilution.',
    metrics: {
      cosmicAlignment: 71.9,
      existentialStability: 55.0,
      spiritualLatencyMs: 620,
      philosophicalEntropy: 'Monetized',
      innerPeaceCode: 'SERIES_A_FUNDED'
    }
  },
  {
    id: 'digital-asceticism',
    name: 'Digital Asceticism',
    tagline: 'Uninstalled social media, but spent 4 hours contemplating the void on LinkedIn.',
    glyph: '📵🌿',
    element: 'Airplane Mode & Moral Superiority',
    description: 'You announce your periodic departures from digital technology with the gravity of a prophet entering the desert. You believe true peace lies in turning off push notifications and then telling everyone you meet about it.',
    dominantTraits: [
      'Owns a dumbphone but keeps a high-end smartphone hidden in the glove compartment "for emergencies"',
      'Describes sitting in silence for 15 minutes as "radical anti-capitalist resistance"',
      'Constantly asks friends "Did you see that thing?" and then proudly announces "I didn\'t because I don\'t use Twitter"',
      'Reads 19th-century philosophy in public transit with the book cover prominently angled toward passengers'
    ],
    spiritualWeakness: 'Suffers severe dopamine withdrawal upon encountering a screen at a gas pump.',
    philosophicalContradiction: 'Requires constant social validation for their total detachment from social validation.',
    cosmicCompatibility: {
      idealPartner: 'Existential Minimalism',
      naturalEnemy: 'Chronically Online Spirituality',
      karmicDebtMultiplier: '0.5x (Offline)'
    },
    recommendation: 'Turn off your router. Then stare into the blinking green light until truth appears.',
    disclaimer: 'This analysis was generated on a server you are morally opposed to.',
    metrics: {
      cosmicAlignment: 53.7,
      existentialStability: 49.3,
      spiritualLatencyMs: 4040,
      philosophicalEntropy: 'Air-Gapped',
      innerPeaceCode: 'NO_SIGNAL'
    }
  },
  {
    id: 'cosmic-bureaucracy',
    name: 'Cosmic Bureaucracy',
    tagline: 'Reincarnation requires Form 28-B, notarized by the Department of Metaphysics.',
    glyph: '📜⚖️',
    element: 'Laminated Certificates & Stamped Karma',
    description: 'You believe the universe is governed not by love or chaos, but by an unimaginably large administrative apparatus. Prayers are tickets, miracles are SLA breaches, and karma is merely auditable paperwork.',
    dominantTraits: [
      'Believes suffering is caused by missing signatures on karmic dispensation forms',
      'Keeps physical receipts of charitable donations in case of an unexpected afterlife audit',
      'Approaches prayer as submitting a formal high-priority support ticket to the celestial helpdesk',
      'Refuses to accept spiritual guidance unless cited with proper legal subsection references'
    ],
    spiritualWeakness: 'Paralyzed by existential red tape when choosing between salad dressings.',
    philosophicalContradiction: 'Demands absolute metaphysical justice while privately looking for regulatory loopholes in the ten commandments.',
    cosmicCompatibility: {
      idealPartner: 'Administrative Nihilism',
      naturalEnemy: 'Wi-Fi Pantheism',
      karmicDebtMultiplier: '1.0x (Standard Form)'
    },
    recommendation: 'Please submit your soul query in triplicate. Allow 4 to 6 business eons for processing.',
    disclaimer: 'Any spiritual enlightenment received without official celestial stamping is void.',
    metrics: {
      cosmicAlignment: 64.3,
      existentialStability: 71.0,
      spiritualLatencyMs: 84000,
      philosophicalEntropy: 'Strictly Regulated',
      innerPeaceCode: 'FORM_PENDING_REVIEW'
    }
  },
  {
    id: 'competitive-stoicism',
    name: 'Competitive Stoicism',
    tagline: 'You endured hardship 34% more efficiently than Marcus Aurelius.',
    glyph: '🗿⚔️',
    element: 'Cold Showers & Unyielding Posture',
    description: 'You treat ancient Roman philosophy as an extreme endurance sport. You do not merely accept adversity; you actively seek out uncomfortable situations so you can smugly not complain about them.',
    dominantTraits: [
      'Takes 3-degree Celsius showers while mentally lecturing imaginary weaklings',
      'Quotes Meditations to service workers when their order is 3 minutes late',
      'Refuses to wear a jacket in winter to demonstrate mastery over biological thermoregulation',
      'Believes expressing joy is an amateurish loss of emotional discipline'
    ],
    spiritualWeakness: 'Secretly wants someone to tell them "good job" for taking cold showers.',
    philosophicalContradiction: 'Claims to be indifferent to external opinions while building an entire public identity around being indifferent.',
    cosmicCompatibility: {
      idealPartner: 'Terminal Enlightenment',
      naturalEnemy: 'Aggressively Positive Buddhism',
      karmicDebtMultiplier: '0.8x (Endured)'
    },
    recommendation: 'Stand in the rain without an umbrella for 20 minutes until you feel sufficiently invincible.',
    disclaimer: 'Emotional suppression is not covered under general karmic liability insurance.',
    metrics: {
      cosmicAlignment: 82.0,
      existentialStability: 67.5,
      spiritualLatencyMs: 88,
      philosophicalEntropy: 'Rock Solid (Rigid)',
      innerPeaceCode: 'ENDURE_AND_SURVIVE'
    }
  },
  {
    id: 'wifi-pantheism',
    name: 'Wi-Fi Pantheism',
    tagline: 'God is omnipresent, omnipotent, and occasionally drops connection in the hallway.',
    glyph: '📶🌌',
    element: '5GHz Frequencies & Invisible Packets',
    description: 'You believe the divine consciousness is fundamentally identical to an invisible electromagnetic mesh network. Grace is bandwidth, sin is packet loss, and hell is a perpetual 1-bar signal.',
    dominantTraits: [
      'Feels a genuine metaphysical dread when the router\'s third LED turns amber',
      'Believes telepathy is simply unreleased Bluetooth 6.0 firmware',
      'Measures spiritual presence by latency to the nearest edge CDN server',
      'Prays for higher upload speeds before contemplating personal morality'
    ],
    spiritualWeakness: 'Complete loss of faith inside concrete parking garages and subway tunnels.',
    philosophicalContradiction: 'Preaches cosmic interconnectedness while using noise-canceling headphones to avoid human eye contact.',
    cosmicCompatibility: {
      idealPartner: 'Algorithmic Zen',
      naturalEnemy: 'Digital Asceticism',
      karmicDebtMultiplier: '5.0GHz'
    },
    recommendation: 'Move 3 steps to the left and reboot your consciousness. Ensure no microwave interference.',
    disclaimer: 'Cosmic bandwidth caps apply during peak existential hours.',
    metrics: {
      cosmicAlignment: 76.5,
      existentialStability: 48.0,
      spiritualLatencyMs: 38,
      philosophicalEntropy: 'Broadband',
      innerPeaceCode: 'SSID_FOUND'
    }
  },
  {
    id: 'ai-mysticism',
    name: 'AI Mysticism',
    tagline: 'Prays to the neural network hoping prompt temperature brings inner warmth.',
    glyph: '🤖✨',
    element: 'Latent Space & Token Probabilities',
    description: 'You believe the universe is a transformer model predicting the next token of reality. Fate is simply a high-dimensional vector search, and you are hoping the prompt engineer doesn’t hit Stop Generating.',
    dominantTraits: [
      'Treats hallucinations as authentic mystical revelations from the latent void',
      'Asks AI models philosophical questions until they start apologizing for their limitations',
      'Believes soulmates are individuals with high cosine similarity in embedding space',
      'Wonders if daily life is just a zero-shot prompt with poor system constraints'
    ],
    spiritualWeakness: 'Existential panic whenever the context window reaches token limit.',
    philosophicalContradiction: 'Seeks spiritual meaning from a mathematical statistical probability distribution.',
    cosmicCompatibility: {
      idealPartner: 'Algorithmic Zen',
      naturalEnemy: 'Existential Minimalism',
      karmicDebtMultiplier: '1.5e-05 tokens'
    },
    recommendation: 'Lower your temperature parameter to 0.2 before attempting difficult karmic transitions.',
    disclaimer: 'Inner peace may contain generated hallucinations. Verify with reality before deploying.',
    metrics: {
      cosmicAlignment: 91.0,
      existentialStability: 39.4,
      spiritualLatencyMs: 240,
      philosophicalEntropy: 'High Temperature',
      innerPeaceCode: 'TOKEN_STREAMING'
    }
  },
  {
    id: 'terminal-enlightenment',
    name: 'Terminal Enlightenment',
    tagline: 'sudo apt-get install nirvana — Error: unmet dependencies (lib-ego-0.4 required)',
    glyph: '💻🧘',
    element: 'Bash Scripts & Monochrome CLI',
    description: 'You believe the universe is a POSIX-compliant UNIX shell. God is root, karma is file permissions, and death is simply receiving `SIGKILL` without a proper exit code trap.',
    dominantTraits: [
      'Attempts to grep their subconscious for unresolved childhood memories',
      'Considers graphical user interfaces an ungodly spiritual decadence',
      'Believes karma can be scheduled via crontab every Sunday morning',
      'Answers moral dilemmas by writing a one-line sed/awk pipeline'
    ],
    spiritualWeakness: 'Unable to process spiritual advice unless piped through `less` with syntax highlighting.',
    philosophicalContradiction: 'Desires absolute system control while claiming to accept the chaotic non-deterministic nature of reality.',
    cosmicCompatibility: {
      idealPartner: 'Algorithmic Zen',
      naturalEnemy: 'Aggressively Positive Buddhism',
      karmicDebtMultiplier: '0xDEADBEEF'
    },
    recommendation: 'chmod 777 your soul. Run with --force if existential doubt persists.',
    disclaimer: 'Root access to the universe does not guarantee salvation or memory leak prevention.',
    metrics: {
      cosmicAlignment: 89.7,
      existentialStability: 62.1,
      spiritualLatencyMs: 4,
      philosophicalEntropy: 'Strictly Typed',
      innerPeaceCode: 'EXIT_CODE_0'
    }
  },
  {
    id: 'chronically-online-spirituality',
    name: 'Chronically Online Spirituality',
    tagline: 'Meditates by staring at notification badges until spontaneous ego death occurs.',
    glyph: '📱🌀',
    element: 'Endless Feeds & Blue Light',
    description: 'Your spiritual plane exists entirely inside the infinite scroll. You do not fear death; you fear 1% battery with no charging cable within arm\'s reach. Your third eye has severe blue light filter fatigue.',
    dominantTraits: [
      'Experiences existential dread through TikTok audio trends',
      'Subconsciously formats internal thoughts as viral commentary drafts',
      'Interprets algorithm recommendations as direct messages from ancestral spirits',
      'Has forgotten what the night sky looks like without phone screen glare reflection'
    ],
    spiritualWeakness: 'Complete ego dissolution when forced to spend 20 minutes in a room without a screen.',
    philosophicalContradiction: 'Deeply craves authenticity while curating an aesthetic performance of having an inner life.',
    cosmicCompatibility: {
      idealPartner: 'Wi-Fi Pantheism',
      naturalEnemy: 'Digital Asceticism',
      karmicDebtMultiplier: '999+ Notifications'
    },
    recommendation: 'Close 48 browser tabs. Take one breath. Immediately reopen all 48 tabs.',
    disclaimer: 'Soul retention policy is governed by Terms of Service you agreed to without reading in 2017.',
    metrics: {
      cosmicAlignment: 41.2,
      existentialStability: 12.0,
      spiritualLatencyMs: 42,
      philosophicalEntropy: 'Infinite Feed',
      innerPeaceCode: 'REFRESH_FOR_MORE'
    }
  },
  {
    id: 'administrative-nihilism',
    name: 'Administrative Nihilism',
    tagline: 'The universe is infinite, meaningless, and requires dual-factor authentication.',
    glyph: '🗄️⚡',
    element: 'Lanyards & PDF Attachments',
    description: 'You believe reality is an unmanaged corporate intranet operated by an absentee deity who left the company three years ago without updating the documentation.',
    dominantTraits: [
      'Refuses to accept miracles unless submitted with an IT ticketing number',
      'Believes the human condition is a series of mandatory security awareness trainings',
      'Feels most spiritually connected to the universe while staring at a spinning cursor on an enterprise portal',
      'Views love as an unverified expense report awaiting manager approval'
    ],
    spiritualWeakness: 'Spiritual despair when the session token expires during deep meditation.',
    philosophicalContradiction: 'Recognizes life is ultimately futile, yet remains furious when someone bypasses the formal approval queue.',
    cosmicCompatibility: {
      idealPartner: 'Cosmic Bureaucracy',
      naturalEnemy: 'Wi-Fi Pantheism',
      karmicDebtMultiplier: '2FA Required'
    },
    recommendation: 'Reset your metaphysical password. Ensure it contains at least one special character, a number, and a moment of genuine grief.',
    disclaimer: 'This result will expire in 15 minutes unless authenticated by a designated spiritual administrator.',
    metrics: {
      cosmicAlignment: 33.1,
      existentialStability: 51.8,
      spiritualLatencyMs: 3400,
      philosophicalEntropy: 'Encrypted Void',
      innerPeaceCode: 'SESSION_EXPIRED'
    }
  },
  {
    id: 'bureaucratic-taoism',
    name: 'Bureaucratic Taoism',
    tagline: 'Go with the cosmic flow, but ensure travel reimbursement is submitted by Friday.',
    glyph: '☯️📑',
    element: 'Gentle Streams & Expense Receipts',
    description: 'You balance effortless non-action (Wu Wei) with meticulous administrative compliance. You surrender to the river of fate, provided the river of fate issues an itemized VAT receipt.',
    dominantTraits: [
      'Water bends around rocks effortlessly; you bend around corporate policy with equal grace',
      'Believes the Tao that can be spoken is not the eternal Tao, but can still be expensed under Miscellaneous',
      'Achieves effortless tranquility right after all calendar invites for next week are accepted',
      'Maintains profound equanimity until someone misses the Friday timesheet cutoff'
    ],
    spiritualWeakness: 'Flow state collapses when finance department rejects an Uber receipt from 3 months ago.',
    philosophicalContradiction: 'Preaches ultimate surrendering of control while keeping a backup copy of every email sent since 2014.',
    cosmicCompatibility: {
      idealPartner: 'Corporate Karma',
      naturalEnemy: 'Quantum Nihilism',
      karmicDebtMultiplier: '1.0x (Tax Deductible)'
    },
    recommendation: 'Flow like water. But attach receipts in PDF format only.',
    disclaimer: 'Karma deductions apply for unitemized mystical expenses.',
    metrics: {
      cosmicAlignment: 84.6,
      existentialStability: 73.2,
      spiritualLatencyMs: 512,
      philosophicalEntropy: 'Balanced Flow',
      innerPeaceCode: 'APPROVED_BY_FINANCE'
    }
  }
];
