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
    id: 'flash-2026-03-01-escalation',
    headline: 'Middle East Conflict Escalation',
    body: 'U.S.–Israel coordinated strikes on Iran and Iranian retaliation have triggered a major regional escalation. Israeli operations in Lebanon and Gaza continue. Multiple borders closed. The Truce Pulse tracks these developments against Olympic Truce principles.',
    icon: '🔴',
    activeFrom: '2026-03-01',
    activeUntil: '2026-03-22',
    publishedAt: '2026-03-01',
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
