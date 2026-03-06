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
    body: 'Iranian retaliatory strikes hit 10 countries with 26+ fatalities: Israel (12 killed, Beit Shemesh synagogue destroyed), Kuwait (4), Iraq (4), UAE (3), Bahrain (2), Oman (1). Targets include civilian areas, military bases, airports, and energy infrastructure. 8+ vessels struck in Persian Gulf. Largest Iranian military operation in history.',
    icon: '🔴',
    activeFrom: '2026-03-01',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-05',
  },
  {
    id: 'flash-2026-02-17-transport',
    headline: 'Milano Cortina 2026 Transport Alert (Updated 3 March)',
    body: 'Initially issued on 17 February over Italian labor strikes—including a nationwide airport walkout pushed to 26 February—transport disruption has since escalated dramatically. Airspace closures across the Arabian Peninsula and Gulf states following Operation Epic Fury and Iranian retaliatory strikes have grounded flights and forced delegation rerouting. Airports in Dubai and Kuwait have been struck. Several teams report delayed or rerouted travel into Europe, affecting training schedules and final preparations. Travelers are urged to confirm flight status and secure alternative routing.',
    icon: '⚠️',
    activeFrom: '2026-02-17',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-03',
  },
];

export function getActiveFlashes(): FlashEntry[] {
  const today = new Date().toISOString().split('T')[0];
  return FLASH_ENTRIES.filter(
    (entry) => today >= entry.activeFrom && today <= entry.activeUntil
  );
}
