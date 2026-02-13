// Truce Pulse - Weekly expert analysis of current events
// mapped against Olympic Truce principles

export type FocusArea =
  | 'Diplomatic Engagement'
  | 'Humanitarian Access'
  | 'De-escalation'
  | 'Regional Stability'
  | 'Safe Passage'
  | 'Participation';

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
    id: 'pulse-2026-02-13',
    periodStart: '2026-02-13',
    periodEnd: '2026-02-13',
    periodLabel: '13 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.N. Peacekeeping in DR Congo',
            text: 'The U.N. peacekeeping mission\'s reconnaissance flights to monitor a ceasefire in the Democratic Republic of the Congo directly support the Truce\'s goal of enabling humanitarian access and safe movement.',
          },
          {
            headline: 'U.S. Withdrawal from Al-Tanf, Syria',
            text: 'U.S. Central Command\'s orderly departure from the al-Tanf garrison in Syria, repositioning troops and reducing direct conflict, may contribute to safer regional conditions aligned with the Truce\'s call for restraint and secure transit.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Reduced Hostilities in Conflict Zones',
            text: 'The reduction of hostilities in conflict zones such as Syria and Congo, along with multinational defense initiatives proposed by the U.K., create environments more conducive to international sporting events and Olympic participation.',
          },
          {
            headline: 'U.N. Global Scientific Panel on AI',
            text: 'A new global scientific panel on AI approved by the U.N. reflects international cooperation and dialogue foundational to the Olympic spirit and the Truce\'s encouragement of peaceful participation.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Reducing Tensions',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'U.S.–China Diplomatic Restraint',
            text: 'The U.S. pausing bans on Chinese telecom operations ahead of a summit with China signals diplomatic restraint and dialogue, resonating with the Truce\'s appeal for calming tensions.',
          },
          {
            headline: 'Bangladesh Election & Peaceful Transition',
            text: 'The Bangladesh Nationalist Party\'s landslide election win, if followed by peaceful transition, could reduce domestic tensions and support the Truce\'s humanitarian aims.',
          },
          {
            headline: 'High Court Ruling on Palestine Action',
            text: 'The High Court ruling on Palestine Action demonstrates legal processes over violent confrontation, echoing the Truce\'s preference for dialogue and institutional resolution.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Multinational Defense & Reconstruction Plans',
            text: 'Multinational defense and reconstruction plans for Gaza and joint U.S.-Mexico military exercises show efforts at international cooperation and coexistence fitting the Truce\'s diplomatic frame.',
          },
          {
            headline: 'Intelligence & Alliance Coordination',
            text: 'CIA outreach in China and NATO\'s coordinated support for Ukraine, while rooted in security interests, reflect the importance of communication and alliances that can foster restraint and coexistence if managed constructively.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Positive Signals: Peacekeeping operations, diplomatic pauses, multinational initiatives, and legal restraint collectively align with the Truce\'s core values of safe passage, participation, calming hostilities, and fostering dialogue.',
    },
    keyConstraints: [
      'Ongoing conflict in DR Congo and Syria continues to challenge full realization of safe passage despite peacekeeping and withdrawal efforts.',
      'Geopolitical tensions between major powers (U.S.-China, NATO-Russia) remain an underlying risk to the Truce\'s vision of global restraint.',
    ],
    publishedAt: '2026-02-13',
  },
  {
    id: 'pulse-2026-02-12',
    periodStart: '2026-02-12',
    periodEnd: '2026-02-12',
    periodLabel: '12 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage & Protection of Civilians',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Iran Protest Crackdown',
            text: 'The death toll from Iran\'s crackdown on nationwide protests has reached at least 7,002 people, underscoring a domestic environment where safe passage is far from guaranteed.',
          },
          {
            headline: 'Afghan Migrant Deaths Near Chios',
            text: 'Deaths of Afghan migrants near Chios, where autopsies show they died of head injuries rather than drowning, reveal the acute vulnerability of displaced populations the Truce explicitly aims to protect.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'U.S. Aircraft Carrier Deployment Toward Iran',
            text: 'The Pentagon\'s preparation of a second U.S. aircraft carrier for potential deployment toward Iran signals rising tensions that could impede athletes\' ability to travel safely or represent their nations without political pressure.',
          },
          {
            headline: 'Russian Strike on Odesa Infrastructure',
            text: 'A Russian strike leaving nearly 300,000 people without electricity and water in Odesa illustrates how ongoing conflict disrupts the basic infrastructure necessary for training, qualification, and international mobility.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Iran Nuclear Negotiations',
            text: 'President Trump insisted that negotiations with Iran continue, and Turkey\'s foreign minister emphasized that expanding the talks could risk another war. These gestures toward dialogue align with the Truce\'s spirit of de-escalation.',
          },
          {
            headline: 'Gaza Humanitarian Crisis',
            text: 'The Gaza situation, where hundreds of Palestinians were killed near aid sites, shows how far current realities are from the Truce\'s humanitarian aspirations for safe access and civilian protection.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Munich Security Conference',
            text: 'Secretary of State Rubio\'s plan to emphasize cooperation on the Middle East, Ukraine, and China at the Munich Security Conference reflects the Truce\'s diplomatic ethos. His intention to take a less contentious approach mirrors the Truce\'s aim to create space for coexistence amid strategic rivalry.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed: Diplomatic channels on Iran and the Munich Security Conference signal alignment with Truce principles, but severe civilian harm in Iran, Gaza, and Ukraine, alongside military escalation, underscores persistent gaps between Truce aspirations and ground realities.',
    },
    keyConstraints: [
      'Iran\'s protest crackdown and Afghan migrant deaths highlight severe threats to civilian safety and safe passage.',
      'Military escalation (U.S. carrier deployment, Russian infrastructure strikes) directly threatens athlete participation and regional stability.',
      'Humanitarian access in Gaza remains critically obstructed despite ongoing diplomatic efforts.',
    ],
    publishedAt: '2026-02-12',
  },
  {
    id: 'pulse-2026-02-11',
    periodStart: '2026-02-11',
    periodEnd: '2026-02-11',
    periodLabel: '11 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Middle East Military Escalation',
            text: 'U.S. carrier deployments, missile readiness in Qatar, and ongoing Israel-Hamas hostilities directly threaten regional stability and could impede safe transit routes for Olympic participants.',
          },
          {
            headline: 'Russia–Ukraine Conflict',
            text: 'Russian advances toward strategic Ukrainian cities pose risks to athletes and officials from affected regions, potentially limiting their ability to travel safely to the Games.',
          },
        ],
      },
      {
        id: 'participation',
        title: 'Participation in the Games',
        icon: '🏅',
        color: 'blue',
        bullets: [
          {
            headline: 'Indonesia Humanitarian Deployment to Gaza',
            text: 'Indonesia\'s preparation to send medical and engineering personnel to Gaza demonstrates a commitment to humanitarian support, echoing the Truce\'s principle of enabling participation and assistance even amid conflict.',
          },
          {
            headline: 'Conflict Zones Hindering Athletes',
            text: 'Ongoing violence in Myanmar, South Sudan, and Gaza may hinder athletes\' ability to train, qualify, or attend the Games, challenging the universality of Olympic participation.',
          },
        ],
      },
      {
        id: 'calming-hostilities',
        title: 'Calming Hostilities & Humanitarian Access',
        icon: '🚑',
        color: 'amber',
        bullets: [
          {
            headline: 'Qatari Emir–Trump De-escalation Call',
            text: 'Diplomatic efforts such as the Qatari Emir\'s call with President Trump for regional de-escalation reflect attempts to calm hostilities in line with the Truce\'s spirit.',
          },
          {
            headline: 'U.S. Draft Plan for Hamas & Indonesia Deployment',
            text: 'The U.S. negotiation team\'s draft plan for Hamas and Indonesia\'s humanitarian deployment are practical steps toward reducing violence and enabling humanitarian corridors.',
          },
          {
            headline: 'Persistent Barriers to Humanitarian Access',
            text: 'Ongoing airstrikes, restrictions on humanitarian access in South Sudan and Myanmar, and continued military buildups in the Arctic and Europe highlight challenges to the Truce\'s humanitarian aims.',
          },
        ],
      },
      {
        id: 'diplomatic-frame',
        title: 'Broader Diplomatic Frame',
        icon: '🤝',
        color: 'purple',
        bullets: [
          {
            headline: 'Diplomatic Engagement',
            text: 'U.S.-Qatar and U.S.-Azerbaijan dialogues, along with humanitarian missions, support the Truce\'s ideals of restraint, dialogue, and coexistence.',
          },
          {
            headline: 'Rising Militarization & Political Deadlocks',
            text: 'Increasing militarization, political deadlocks, and fragmented conflict landscapes underscore the difficulties of achieving global restraint and peaceful coexistence during the Games.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Mixed: Diplomatic and humanitarian efforts echo Truce principles, while ongoing conflicts and militarization threaten safe passage, participation, and the broader vision for peace and dialogue.',
    },
    keyConstraints: [
      'Military escalations in the Middle East and Europe threaten safe transit routes for Olympic participants.',
      'Ongoing violence in Myanmar, South Sudan, and Gaza may hinder athletes\' ability to train, qualify, or attend the Games.',
    ],
    publishedAt: '2026-02-11',
  },
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
