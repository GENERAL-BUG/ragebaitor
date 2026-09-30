import { UserResponses, Ideology } from '../types';
import { IDEOLOGIES } from '../data/ideologies';
import { INTEREST_ITEMS, STEP_QUESTIONS } from '../data/questions';

export function calculateSpiritualIdeology(responses: UserResponses): {
  ideology: Ideology;
  scores: Record<string, number>;
  metrics: {
    cosmicAlignment: number;
    existentialStability: number;
    spiritualLatencyMs: number;
    philosophicalEntropy: string;
    innerPeaceCode: string;
    karmicDebtScore: number;
    soulRamUsage: string;
  };
} {
  const scores: Record<string, number> = {};
  IDEOLOGIES.forEach(i => {
    scores[i.id] = 0;
  });

  // 1. Process Interests
  responses.interests.forEach(interestId => {
    const item = INTEREST_ITEMS.find(i => i.id === interestId);
    if (!item) return;

    if (interestId === 'spreadsheets' || interestId === 'productivity') {
      scores['spreadsheet-spiritualism'] += 4;
      scores['corporate-karma'] += 3;
    } else if (interestId === 'tech' || interestId === 'gaming') {
      scores['algorithmic-zen'] += 4;
      scores['wifi-pantheism'] += 3;
    } else if (interestId === 'ai') {
      scores['ai-mysticism'] += 5;
      scores['terminal-enlightenment'] += 3;
    } else if (interestId === 'philosophy' || interestId === 'existential_dread') {
      scores['quantum-nihilism'] += 4;
      scores['existential-minimalism'] += 3;
    } else if (interestId === 'stoicism' || interestId === 'fitness') {
      scores['competitive-stoicism'] += 5;
    } else if (interestId === 'money') {
      scores['capitalist-monasticism'] += 5;
      scores['corporate-karma'] += 4;
    } else if (interestId === 'screen_time') {
      scores['chronically-online-spirituality'] += 5;
      scores['wifi-pantheism'] += 3;
    } else if (interestId === 'nature' || interestId === 'silent_retreat') {
      scores['digital-asceticism'] += 4;
      scores['aggressively-positive-buddhism'] += 3;
    } else if (interestId === 'politics') {
      scores['administrative-nihilism'] += 4;
      scores['cosmic-bureaucracy'] += 3;
    }
  });

  // 2. Process Preference and Moral choices
  STEP_QUESTIONS.forEach(q => {
    const answerId = responses.preferences[q.id] || responses.moralChoices[q.id];
    if (!answerId || !q.options) return;

    const selectedOption = q.options.find(opt => opt.id === answerId);
    if (selectedOption && selectedOption.ideologyWeight) {
      Object.entries(selectedOption.ideologyWeight).forEach(([ideoId, weight]) => {
        if (scores[ideoId] !== undefined) {
          scores[ideoId] += weight;
        }
      });
    }
  });

  // 3. Process Existential Slider
  const sliderVal = responses.existentialScore; // 0 to 100
  if (sliderVal < 25) {
    scores['aggressively-positive-buddhism'] += 4;
    scores['corporate-karma'] += 2;
  } else if (sliderVal > 75) {
    scores['quantum-nihilism'] += 5;
    scores['existential-minimalism'] += 4;
  } else {
    scores['spreadsheet-spiritualism'] += 3;
    scores['bureaucratic-taoism'] += 3;
  }

  // 4. Free text sentiment heuristic
  const freeText = responses.freeTextThought.toLowerCase();
  if (freeText.includes('meaning') || freeText.includes('void') || freeText.includes('why')) {
    scores['quantum-nihilism'] += 3;
  }
  if (freeText.includes('code') || freeText.includes('sudo') || freeText.includes('bug')) {
    scores['terminal-enlightenment'] += 4;
  }
  if (freeText.includes('money') || freeText.includes('work') || freeText.includes('kpi')) {
    scores['corporate-karma'] += 4;
  }
  if (freeText.includes('peace') || freeText.includes('breath') || freeText.includes('happy')) {
    scores['aggressively-positive-buddhism'] += 3;
  }

  // Find top ideology
  let topIdeologyId = IDEOLOGIES[0].id;
  let maxScore = -1;

  Object.entries(scores).forEach(([id, score]) => {
    if (score > maxScore) {
      maxScore = score;
      topIdeologyId = id;
    }
  });

  const matchedIdeology = IDEOLOGIES.find(i => i.id === topIdeologyId) || IDEOLOGIES[0];

  // Derive dynamic metrics
  const totalWeight = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const cosmicAlignment = Math.min(99.8, Math.max(12.4, Number((matchedIdeology.metrics.cosmicAlignment + (totalWeight % 7) - 3).toFixed(1))));
  const existentialStability = Math.min(95.0, Math.max(8.0, Number((matchedIdeology.metrics.existentialStability + ((sliderVal / 10) % 5)).toFixed(1))));
  const spiritualLatencyMs = matchedIdeology.metrics.spiritualLatencyMs + (responses.interests.length * 14);

  return {
    ideology: matchedIdeology,
    scores,
    metrics: {
      cosmicAlignment,
      existentialStability,
      spiritualLatencyMs,
      philosophicalEntropy: matchedIdeology.metrics.philosophicalEntropy,
      innerPeaceCode: matchedIdeology.metrics.innerPeaceCode,
      karmicDebtScore: Math.floor(totalWeight * 142.5),
      soulRamUsage: `${Math.min(98, 64 + responses.interests.length * 3.5)}%`
    }
  };
}
