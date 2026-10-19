import { firm, type CaseId } from './content';

/** Tiny event bus so any section can open the case review form with a case type already chosen. */
export function openReview(type?: CaseId) {
  window.dispatchEvent(new CustomEvent<CaseId | undefined>('kv:review', { detail: type }));
}

export function onOpenReview(fn: (type?: CaseId) => void) {
  const h = (e: Event) => fn((e as CustomEvent<CaseId | undefined>).detail);
  window.addEventListener('kv:review', h);
  return () => window.removeEventListener('kv:review', h);
}

export const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

/** $2,400,000 → "$2.4M", $850,000 → "$850K". */
export function short(n: number) {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 1)}M`;
  if (n >= 1e3) return `$${Math.round(n / 1e3)}K`;
  return money(n);
}

export const tel = `tel:${firm.phone.replace(/[^0-9+]/g, '')}`;
