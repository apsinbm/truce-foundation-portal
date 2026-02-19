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
    id: 'pulse-2026-02-18',
    periodStart: '2026-02-18',
    periodEnd: '2026-02-18',
    periodLabel: '18 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'U.S.–Iran Nuclear Negotiations',
            text: 'Iran\'s willingness to suspend nuclear enrichment and exchange drafts for a potential deal suggests a diplomatic opening that could reduce barriers to safe passage for Olympic participants. However, Vice President Vance\'s statement that military action remains an option signals that safe passage is not yet guaranteed.',
          },
          {
            headline: 'Russia–Ukraine Talks Stalled on Territorial Disputes',
            text: 'The continuation of talks between Russia, Ukraine, and the U.S. reflects attempts at dialogue that could support the Truce\'s aims, but the lack of substantive progress and ongoing territorial disputes pose persistent risks to the movement of athletes and delegations.',
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
            headline: 'Poland Bars Chinese-Made Vehicles from Military Facilities',
            text: 'Poland\'s security restrictions on Chinese-made vehicles illustrate how geopolitical tensions can spill over into restrictions that, while not directly targeting Olympic participation, highlight an environment where exclusionary actions may affect athletes, officials, or national delegations.',
          },
          {
            headline: 'Belgium–U.S. Diplomatic Tensions over Antisemitism Accusations',
            text: 'Diplomatic friction between Belgium and the U.S. over accusations of antisemitism underscores how political disputes can create a climate of tension that risks affecting the inclusive spirit the Truce seeks to protect for all participants.',
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
            headline: 'Lebanese Disarmament Plan Rejected by Hezbollah',
            text: 'The Lebanese government\'s disarmament plan and its rejection by Hezbollah illustrate ongoing regional tensions that hinder humanitarian access and the calming of hostilities, running counter to the Truce\'s call for a cessation of violence.',
          },
          {
            headline: 'U.S. Military Operations & Cambodian-Thai Border Dispute',
            text: 'U.S. military operations in the Caribbean and Pacific, the indictment of a tanker captain, and the Cambodian-Thai border dispute further underscore the persistence of conflict and enforcement actions that impede the Truce\'s vision of humanitarian corridors.',
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
            headline: 'Geneva Negotiations & Continued Dialogue',
            text: 'The fact that negotiations are taking place in Geneva and that parties remain willing to continue talks aligns with the Truce\'s spirit of restraint and dialogue, even as concrete outcomes remain elusive.',
          },
          {
            headline: 'U.N. Human Rights Council & Canada\'s Defense Strategy',
            text: 'The U.N. Human Rights Council\'s investigation into global criminal enterprises and Canada\'s "Buy Canadian" defense strategy reflect international commitments to justice, sovereignty, and reduced dependency—steps toward the coexistence and self-determination the Truce envisions.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'Diplomatic negotiations in Geneva, Iran\'s willingness to engage, and continued Russia–Ukraine–U.S. talks show alignment with the Truce\'s spirit of dialogue—yet military threats, sanctions, and unresolved territorial disputes reveal the gap between current realities and the Truce\'s vision of restraint, safe passage, and coexistence.',
    },
    keyConstraints: [
      'Vice President Vance\'s statement that military action against Iran remains on the table, combined with persistent sanctions and embargoes, undermine the Truce\'s call for safe passage and peaceful resolution.',
      'Lack of progress in Russia–Ukraine negotiations and ongoing regional conflicts—from Lebanon to the Cambodian-Thai border—run counter to the Truce\'s objectives of calming hostilities and enabling humanitarian access.',
    ],
    publishedAt: '2026-02-18',
  },
  {
    id: 'pulse-2026-02-17',
    periodStart: '2026-02-17',
    periodEnd: '2026-02-17',
    periodLabel: '17 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Israel–Hamas War & Sudanese Civil War',
            text: 'Airstrikes in Gaza and Sudan create environments where safe passage is severely compromised, directly threatening the safe movement of athletes, officials, and spectators.',
          },
          {
            headline: 'Russia–Ukraine Military Operations',
            text: 'Ongoing military operations in Ukraine continue to undermine safe transit, underscoring the urgent need for adherence to the Truce\'s principle of allowing unhindered access and movement for Olympic participants.',
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
            headline: 'Conflict Zones Threatening Olympic Access',
            text: 'The Israel–Hamas war, Russia–Ukraine war, and Sudanese civil war directly threaten the ability of athletes, officials, and spectators to participate in the Games.',
          },
          {
            headline: 'Compromised Training & Travel Conditions',
            text: 'Active conflict environments create barriers to unhindered access and movement, highlighting the gap between the Truce\'s ideals and current realities for Olympic participants.',
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
            headline: 'Doctors Without Borders Suspends Gaza Operations',
            text: 'The suspension of medical operations by Doctors Without Borders in Gaza due to security breaches highlights the critical importance of reducing violence to facilitate humanitarian aid.',
          },
          {
            headline: 'Mass Casualties in Sudan',
            text: 'The humanitarian crisis in Sudan underscores how a pause in conflict could allow medical and relief efforts to reach those in need, echoing the Truce\'s call for enabling humanitarian access.',
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
            headline: 'U.S.–Iran Indirect Talks',
            text: 'Indirect talks between the U.S. and Iran align with the Truce\'s broader diplomatic frame, advocating for restraint, dialogue, and peaceful resolution of disputes.',
          },
          {
            headline: 'U.S.-Brokered Ukraine–Russia Peace Talks',
            text: 'U.S.-brokered peace talks between Ukraine and Russia demonstrate ongoing attempts to resolve disputes peacefully, resonating with the Truce\'s ethos of coexistence and international mediation.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While diplomatic efforts and calls for humanitarian access reflect the Olympic Truce\'s spirit, ongoing conflicts and security challenges highlight the gap between the Truce\'s ideals and current realities—a reminder of the urgent need for global leaders to honor the Truce by prioritizing safe passage, participation, and peaceful coexistence.',
    },
    keyConstraints: [
      'Preparation for sustained operations against Iran, Israeli strikes in Gaza, and drone attacks in Sudan illustrate ongoing tensions that undermine the Truce\'s call for global calm and cooperation.',
      'Escalation of military operations and continued hostilities in several regions run counter to the Truce\'s objectives despite diplomatic efforts.',
    ],
    publishedAt: '2026-02-17',
  },
  {
    id: 'pulse-2026-02-14',
    periodStart: '2026-02-14',
    periodEnd: '2026-02-15',
    periodLabel: '14–15 February 2026',
    focusAreas: ['Safe Passage', 'Participation', 'De-escalation', 'Diplomatic Engagement'],
    sections: [
      {
        id: 'safe-passage',
        title: 'Safe Passage',
        icon: '🛡️',
        color: 'green',
        bullets: [
          {
            headline: 'Russian Missile & Drone Attacks on Ukrainian Cities',
            text: 'Intensified Russian missile and drone attacks on Ukrainian cities, resulting in civilian casualties and infrastructure damage, directly challenge the Truce\'s principle of safe passage and undermine the ability of athletes and delegations to travel safely from affected regions.',
          },
          {
            headline: 'Blackouts & Heating Outages',
            text: 'The resulting blackouts and heating outages further jeopardize the safety and mobility of populations, including potential Olympic participants, creating conditions incompatible with the Truce\'s call for safe passage.',
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
            headline: 'Ukraine Conflict & Regional Instability',
            text: 'The escalation of conflict and regional instability—highlighted in both the Ukraine conflict and the Munich Security Conference 2026—could impede athletes\' ability to train, qualify, or travel.',
          },
          {
            headline: 'Disrupted Infrastructure in Conflict Zones',
            text: 'The broader climate of insecurity and disrupted infrastructure in conflict zones poses indirect barriers to participation, even where Olympic attendance is not explicitly addressed.',
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
            headline: 'UAE–Russia Diplomatic Engagement',
            text: 'Diplomatic engagements between the UAE and Russia reflect efforts to de-escalate tensions and promote dialogue, aligning with the Truce\'s spirit by advocating peaceful solutions and regional stability.',
          },
          {
            headline: 'UAE–Iran Dialogue',
            text: 'The UAE–Iran dialogue emphasizes cooperation in the Gulf, echoing the Truce\'s humanitarian intent—enabling environments where humanitarian access and coexistence are possible.',
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
            headline: 'Munich Security Conference 2026',
            text: 'The Munich Security Conference and global governance discussions underscore the urgent need for renewed multilateralism, trust, and institutional reform—themes that resonate with the Olympic Truce\'s broader aims of fostering restraint, dialogue, and coexistence.',
          },
          {
            headline: 'Security Council Reform & Inclusive Cooperation',
            text: 'Calls for Security Council reform and inclusive cooperation mirror the Truce\'s vision of a world where international events like the Olympics can proceed in peace amid fragmentation and polarization.',
          },
        ],
      },
    ],
    overallAlignment: {
      level: 'moderate',
      summary: 'While active conflicts starkly violate the Truce\'s ideals, ongoing diplomatic efforts and calls for multilateral reform offer hope for alignment with its principles of safe passage, participation, and peaceful coexistence.',
    },
    keyConstraints: [
      'Russian missile and drone attacks on Ukrainian cities, causing civilian casualties, blackouts, and heating outages, directly challenge safe passage and athlete mobility.',
      'Escalation of conflict and regional instability could impede athletes\' ability to train, qualify, or travel from affected regions.',
    ],
    publishedAt: '2026-02-15',
  },
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
