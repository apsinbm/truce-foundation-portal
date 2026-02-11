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
    id: 'pulse-2026-02-10',
    periodStart: '2026-02-10',
    periodEnd: '2026-02-10',
    periodLabel: '10 February 2026',
    focusAreas: ['Diplomatic Engagement', 'Humanitarian Access', 'De-escalation', 'Regional Stability'],
    sections: [
      {
        id: 'diplomatic',
        title: 'Diplomatic Engagement',
        icon: '🤝',
        color: 'blue',
        bullets: [
          {
            headline: 'Iran–U.S. Muscat Meeting',
            text: 'Continued diplomatic engagement between Iranian and U.S. representatives in Muscat reflects ongoing efforts to de-escalate tensions and foster dialogue, resonating with the Olympic Truce\'s spirit of peaceful engagement.',
          },
          {
            headline: 'VP Vance\'s Historic Visit to Armenia',
            text: 'Vice President JD Vance\'s historic visit to Armenia to promote peace represents a significant diplomatic gesture aligned with Truce principles of dialogue and reconciliation.',
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
            headline: 'U.S. Maritime Strike & Rescue Operations',
            text: 'A U.S. military strike against a suspected drug trafficking vessel in the eastern Pacific, followed by immediate Coast Guard notification for search and rescue, demonstrates commitment to safeguarding survivors and humanitarian access.',
          },
          {
            headline: 'Migrant Boat Capsizes off Libya',
            text: 'IOM reports a capsized migrant boat off Libya with only two survivors rescued. Nearly 500 migrants dead or missing in 2026 highlights the urgent need for international cooperation to ensure safe passage for vulnerable populations.',
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
            headline: 'Gaza: Continued Violence Despite Ceasefire',
            text: 'Continued airstrikes and fatalities in Gaza illustrate the difficulties in calming hostilities and securing humanitarian corridors. Casualty figures since the ceasefire agreement emphasize the gap between truce intentions and realities on the ground.',
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
            headline: 'Progress and Persistent Obstacles',
            text: 'Events collectively reveal both progress and persistent obstacles in realizing the Olympic Truce\'s vision, underscoring the need for sustained international commitment to safe passage, humanitarian access, and the reduction of hostilities.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed Progress: Diplomatic openings and rescue commitments demonstrate partial alignment with Truce objectives, while continued violence in Gaza and migration casualties reveal persistent gaps between truce intentions and ground realities.',
    },
    keyConstraints: [
      'Continued violence in Gaza despite ceasefire agreements challenges the realization of humanitarian corridors and safe passage.',
      'Nearly 500 migrant deaths or disappearances in 2026 underscore systemic failures in ensuring safe passage for vulnerable populations.',
    ],
    publishedAt: '2026-02-10',
  },
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
