export interface FlashEntry {
  id: string;
  headline: string;
  body: string;
  icon: string;
  activeFrom: string;
  activeUntil: string;
  publishedAt: string;
}

export const FLASH_ENTRIES: FlashEntry[] = [
  {
    id: 'flash-2026-03-06-escalations',
    headline: 'Multiple Conflict Escalations — March 6 Update',
    body: 'Lebanon Hezbollah-Israel war (80K displaced, 50+ killed). DRC ceasefire collapsed (M23 captured Uvira, US sanctions on Rwanda). Sudan Kordofan hospital strike and El Obeid drone attacks. Afghanistan-Pakistan border war (56 dead, 163K displaced). Myanmar airstrikes + fuel crisis. US-Ecuador joint military ops launched.',
    icon: '🔴',
    activeFrom: '2026-03-06',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-06',
  },
  {
    id: 'flash-2026-03-05-hormuz',
    headline: 'Strait of Hormuz Closed — Global Energy Crisis',
    body: 'Iran has effectively closed the Strait of Hormuz to commercial traffic. Transit dropped from 40 ships/day to near zero. IRGC claimed complete Strait control (Mar 4). Insurance revoked for all vessels. 280 ships stranded. Qatar declared Force Majeure on LNG exports after drone strikes on Ras Laffan — 20% of global seaborne LNG offline. Oil prices surging toward $100. Europe faces critical gas storage shortfall.',
    icon: '🛢️',
    activeFrom: '2026-03-05',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-05',
  },
  {
    id: 'flash-2026-03-01-escalation',
    headline: 'Middle East Conflict Escalation (Updated 5 March)',
    body: 'Iranian retaliatory strikes hit 11 countries with 26+ fatalities: Israel (12 killed, Beit Shemesh synagogue destroyed), Kuwait (4), Iraq (4), UAE (3), Bahrain (2), Oman (1). Targets include civilian areas, military bases, airports, and energy infrastructure. 8+ vessels struck in Persian Gulf. Largest Iranian military operation in history.',
    icon: '🔴',
    activeFrom: '2026-03-01',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-05',
  },
  {
    id: 'flash-2026-02-17-transport',
    headline: 'Milano Cortina 2026 Transport Alert (Updated 6 March)',
    body: 'Nearly 14,000 flights canceled across 10 Middle Eastern countries since Feb 28. Dubai International down 85%, Doha down 94%. Paralympic delegations from Asia and Africa relying on Gulf hub airports face severe rerouting. Airports in Dubai and Kuwait struck. Some flights resuming but capacity remains critically low. Travelers urged to confirm status and secure alternative routing.',
    icon: '⚠️',
    activeFrom: '2026-02-17',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-06',
  },
];

export function getActiveFlashes(): FlashEntry[] {
  const today = new Date().toISOString().split('T')[0];
  return FLASH_ENTRIES.filter(
    (entry) => today >= entry.activeFrom && today <= entry.activeUntil
  );
}
