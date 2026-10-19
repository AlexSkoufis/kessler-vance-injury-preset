'use client';

import { useEffect, useState } from 'react';
import { firm, nav } from '@/lib/content';
import { openReview, tel } from '@/lib/bus';

export function Logo() {
  return (
    <span className="logo">
      <span className="logo__mark" aria-hidden="true">KV</span>
      <span>{firm.name}<small>{firm.line}</small></span>
    </span>
  );
}

/** A thin call bar, then the main navigation. On phones a call button stays pinned to the bottom. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="callbar">
          <div className="wrap callbar__in">
            <span className="live"><i />Attorneys on call now · 24/7</span>
            <span className="callbar__es">{firm.spanish}</span>
            <a href={tel}>Injured? Call <strong>{firm.phone}</strong></a>
          </div>
        </div>

        <div className="wrap nav__bar">
          <a href="#top" aria-label={`${firm.name} home`}><Logo /></a>
          <nav className="nav__links" id="nav-links" aria-label="Main" onClick={() => setOpen(false)}>
            {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="nav__actions">
            <a className="nav__phone" href={tel}>{firm.phone}</a>
            <button type="button" className="btn btn--accent btn--sm" onClick={() => openReview()}>Free case review</button>
            <button type="button" className="nav__toggle" aria-label="Menu" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <a className="callfab" href={tel}>
        <span>Call now · free</span>
        <strong>{firm.phone}</strong>
      </a>
    </>
  );
}
