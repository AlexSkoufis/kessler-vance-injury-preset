'use client';

import { adjuster, cases } from '@/lib/content';
import { openReview } from '@/lib/bus';

// One simple line icon per case type, drawn on a 24×24 grid
const icons: Record<string, string> = {
  car: 'M3 14l2-6h14l2 6M3 14v4h3v-2h12v2h3v-4M3 14h18M7 11h10',
  truck: 'M2 7h11v9H2zM13 10h5l3 3v3h-8M6 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  motorcycle: 'M5 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 16l4-6h5l3 6M14 10l-1-3h3',
  rideshare: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11zM12 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5z',
  pedestrian: 'M12 5.500a1.500 1.500 0 1 0 0-3 1.500 1.500 0 0 0 0 3zM10 22l1-7-2-2 1-5 3 1 2 3h3M13 15l2 2 1 5',
  premises: 'M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6',
  work: 'M4 18h16M6 18v-5a6 6 0 0 1 12 0v5M12 7V4M9 18v-4M15 18v-4',
  death: 'M12 21s-8-5-8-11a4.500 4.500 0 0 1 8-2.800A4.500 4.500 0 0 1 20 10c0 6-8 11-8 11z',
};

/** The case types as large tiles, then "what the adjuster says" as cards that flip to the truth. */
export default function Cases() {
  return (
    <section className="section" id="cases">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow" data-reveal>Cases we take</p>
          <h2 className="display" data-reveal>What happened to you?</h2>
        </header>

        <ul className="cases">
          {cases.map((c) => (
            <li key={c.id} data-reveal>
              <button type="button" className="case" onClick={() => openReview(c.id)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[c.id]} /></svg>
                <strong>{c.name}</strong>
                <span>{c.text}</span>
                <em>Free review <i aria-hidden="true">→</i></em>
              </button>
            </li>
          ))}
        </ul>

        <header className="head head--gap">
          <p className="eyebrow" data-reveal>Know the playbook</p>
          <h2 className="display" data-reveal>What the adjuster says. <span>What it means.</span></h2>
        </header>

        <ul className="flips">
          {adjuster.map((a, i) => (
            <li key={i} data-reveal>
              {/* A real button, so the card flips on tap and from the keyboard as well as on hover */}
              <button type="button" className="flip" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
                <span className="flip__in">
                  <span className="flip__face flip__face--front"><small>They say</small>{a.says}<em>Tap to flip</em></span>
                  <span className="flip__face flip__face--back"><small>It means</small>{a.means}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
