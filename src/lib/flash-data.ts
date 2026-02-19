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
    id: 'flash-2026-02-17-transport',
    headline: 'Milano Cortina 2026 Transport Alert',
    body: 'The Italian government is pursuing an Olympic truce to stabilize transport during Milano Cortina 2026, even as February brings a dense calendar of strikes across aviation, rail, maritime, and local transit. A nationwide airport walkout has been pushed to 26 February to protect Olympic operations, though unions continue pressing for contract reforms. Travelers face significant disruption and are urged to secure alternatives.',
    icon: '⚠️',
    activeFrom: '2026-02-17',
    activeUntil: '2026-03-22',
    publishedAt: '2026-02-17',
  },
];

export function getActiveFlashes(): FlashEntry[] {
  const today = new Date().toISOString().split('T')[0];
  return FLASH_ENTRIES.filter(
    (entry) => today >= entry.activeFrom && today <= entry.activeUntil
  );
}
