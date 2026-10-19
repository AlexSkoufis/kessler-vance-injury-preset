'use client';

import { Fragment, useRef } from 'react';
import { firm, hero, ticker } from '@/lib/content';
import { gsap, MQ, useGsap } from '@/lib/motion';
import { openReview, tel } from '@/lib/bus';
import { Count } from './Reveal';

/** One headline line, split into words so each can rise in. *Asterisks* mark the accent word. */
function Line({ text }: { text: string }) {
  return (
    <span className="hero__line">
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="hero__word"><span className={word.startsWith('*') ? 'is-accent' : undefined}>{word.replaceAll('*', '')}</span></span>{' '}
        </Fragment>
      ))}
    </span>
  );
}

/**
 * Billboard hero. The art is a night road drawn in CSS: lane markings run towards you in
 * perspective, with the firm's headline figure on a highway-sign card above it.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGsap(root, () => {
    if (!window.matchMedia(MQ.motion).matches) return;
    gsap.from('.hero__word > span', { yPercent: 115, duration: 1, stagger: 0.07, delay: 0.1 });
    gsap.from('.hero__fade', { autoAlpha: 0, y: 22, duration: 0.9, stagger: 0.08, delay: 0.6 });
    gsap.from('.sign', { autoAlpha: 0, y: -40, rotate: -3, duration: 1.2, delay: 0.5, ease: 'back.out(1.4)' });
  });

  return (
    <section className="hero" id="top" ref={root}>
      <div className="road" aria-hidden="true">
        <div className="road__plane">
          <span className="road__edge road__edge--l" />
          <span className="road__dash" />
          <span className="road__edge road__edge--r" />
        </div>
        <div className="road__glow" />
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__fade">{hero.eyebrow}</p>
          <h1 className="hero__title" aria-label={hero.title.join(' ').replaceAll('*', '')}>
            <span aria-hidden="true">{hero.title.map((line) => <Line key={line} text={line} />)}</span>
          </h1>
          <p className="hero__lead hero__fade">{hero.lead}</p>

          <div className="hero__cta hero__fade">
            <a className="btn btn--accent btn--xl" href={tel}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor" /></svg>
              {firm.phone}
            </a>
            <button type="button" className="btn btn--line btn--xl" onClick={() => openReview()}>{hero.cta}</button>
          </div>

          <ul className="hero__badges hero__fade">
            {hero.badges.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>

        <div className="sign">
          <span className="sign__bolt" aria-hidden="true" /><span className="sign__bolt" aria-hidden="true" />
          <p className="sign__label">{hero.recovered.label}</p>
          <p className="sign__value">{hero.recovered.prefix}<Count to={hero.recovered.value} />{hero.recovered.suffix}</p>
          <p className="sign__foot"><span className="live"><i />Free review · no obligation</span></p>
        </div>
      </div>

      <div className="ticker" aria-label="Recent results">
        <div className="ticker__track">
          {[...ticker, ...ticker].map(([amount, label], i) => (
            <span key={i} aria-hidden={i >= ticker.length}><strong>{amount}</strong>{label}<i /></span>
          ))}
        </div>
      </div>
    </section>
  );
}
