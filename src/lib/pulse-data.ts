// Truce Pulse - Weekly expert analysis of current events
// mapped against Olympic Truce principles

export type FocusArea =
  | 'Diplomatic Engagement'
  | 'Humanitarian Access'
  | 'De-escalation'
  | 'Regional Stability';

export interface PulseBulletPoint {
  headline: string; // Bold label (e.g., "Iran–U.S. Indirect Talks (Oman)")
  text: string;     // Detail text
}

export interface PulseSection {
  id: string;
  title: string;
  icon: string;
  color: 'blue' | 'amber' | 'green' | 'purple';
  bullets: PulseBulletPoint[];
}

export interface PulseEntry {
  id: string;
  periodStart: string;
  periodEnd: string;
  periodLabel: string;
  focusAreas: FocusArea[];
  sections: PulseSection[];
  overallAlignment: {
    level: 'strong' | 'moderate' | 'weak' | 'critical';
    summary: string;
  };
  keyConstraints: string[];
  publishedAt: string;
}

export const PULSE_ENTRIES: PulseEntry[] = [
  {
    id: 'pulse-2026-w01',
    periodStart: '2026-01-30',
    periodEnd: '2026-02-06',
    periodLabel: '30 January 2026 – 6 February 2026',
    focusAreas: ['Diplomatic Engagement', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'diplomatic',
        title: 'Diplomatic Engagement',
        icon: '🤝',
        color: 'blue',
        bullets: [
          {
            headline: 'Iran–U.S. Indirect Talks (Oman)',
            text: 'Renewed diplomatic channel supports restraint and conditions for dialogue during the Truce period.',
          },
          {
            headline: 'U.S.–Russia Military Dialogue Restored',
            text: 'Reopening high-level communication reduces escalation risk and reinforces confidence-building.',
          },
        ],
      },
      {
        id: 'humanitarian',
        title: 'Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Gaza Displacement (UAE Proposal)',
            text: 'Temporary housing plan highlights urgent civilian needs; feasibility concerns underscore barriers to safe passage.',
          },
          {
            headline: 'Sudan Crisis',
            text: 'Famine-level malnutrition and attacks on medical facilities continue to obstruct humanitarian access and civilian protection.',
          },
        ],
      },
      {
        id: 'deescalation',
        title: 'Conflict De-escalation',
        icon: '⚖️',
        color: 'green',
        bullets: [
          {
            headline: 'Russia–Ukraine: Prisoner Exchange',
            text: 'U.S.-brokered talks in Abu Dhabi produced a 314-person prisoner exchange.',
          },
          {
            headline: 'Russia–Ukraine: Resumed Negotiations',
            text: 'Agreement to resume negotiations aligns with Truce principles of dialogue over confrontation.',
          },
          {
            headline: 'Russia–Ukraine: Ongoing Fragility',
            text: 'Persistent instability (communications disruptions, targeted violence) signals ongoing fragility.',
          },
        ],
      },
      {
        id: 'stabilization',
        title: 'Regional Stabilization',
        icon: '🌍',
        color: 'purple',
        bullets: [
          {
            headline: 'Yemen',
            text: 'Saudi financial commitments aim to stabilize government-held areas and encourage renewed talks with the Houthis, reflecting movement toward political pathways.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Moderate Positive Movement: Multiple diplomatic openings and humanitarian initiatives reflect partial alignment with Truce objectives.',
    },
    keyConstraints: [
      'Active conflicts, civilian displacement, and attacks on essential services continue to challenge safe passage and humanitarian access.',
    ],
    publishedAt: '2026-02-07',
  },
];

export function getLatestPulse(): PulseEntry {
  return PULSE_ENTRIES[0];
}

export function getPulseById(id: string): PulseEntry | undefined {
  return PULSE_ENTRIES.find(entry => entry.id === id);
}
