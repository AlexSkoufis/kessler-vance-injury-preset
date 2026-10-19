'use client';

import { useEffect, useRef, useState } from 'react';
import { estimator, firm } from '@/lib/content';
import { gsap, MQ } from '@/lib/motion';
import { money, openReview } from '@/lib/bus';

/** A dollar figure that counts to its new value instead of jumping. */
function Rolling({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    if (!window.matchMedia(MQ.motion).matches) { setShown(value); return; }
    const state = { n: from.current };
    const tween = gsap.to(state, { n: value, duration: 0.5, ease: 'power2.out', onUpdate: () => setShown(state.n) });
    from.current = value;
    return () => { tween.kill(); };
  }, [value]);
  return <>{money(shown)}</>;
}

function Slider({ label, value, max, step, onChange, format }: { label: string; value: number; max: number; step: number; onChange: (n: number) => void; format: (n: number) => string }) {
  return (
    <label className="slider">
      <span>{label}<output>{format(value)}</output></span>
      <input type="range" min={0} max={max} step={step} value={value} style={{ '--p': `${(value / max) * 100}%` } as React.CSSProperties} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

/**
 * How a claim is built, as an illustration: bills and lost pay, plus pain and suffering scaled by
 * how serious the injury is, reduced by your share of fault, then split into the firm's fee and
 * what you keep. The rates and the fault rule come from `estimator` in lib/content.ts.
 */
export default function Estimator() {
  const [medical, setMedical] = useState(18000);
  const [wages, setWages] = useState(6000);
  const [severity, setSeverity] = useState(1);
  const [fault, setFault] = useState(0);

  const economic = medical + wages;
  const pain = medical * estimator.severity[severity].multiplier;
  const barred = fault > estimator.faultBar;
  const value = barred ? 0 : (economic + pain) * (1 - fault / 100);
  const low = value * (1 - estimator.spread);
  const high = value * (1 + estimator.spread);
  const fee = value * estimator.feeRate;

  // The bar shows how the gross figure splits up
  const gross = economic + pain || 1;
  const parts = barred
    ? [{ key: 'lost', label: 'Not recoverable', share: 100 }]
    : [
        { key: 'you', label: 'You keep', share: ((value - fee) / gross) * 100 },
        { key: 'fee', label: 'Our fee', share: (fee / gross) * 100 },
        { key: 'lost', label: 'Lost to fault', share: fault },
      ];

  return (
    <section className="section section--dark" id="worth">
      <div className="wrap">
        <header className="head head--row">
          <div>
            <p className="eyebrow" data-reveal>Case value</p>
            <h2 className="display" data-reveal>{estimator.title}</h2>
          </div>
          <p className="head__aside" data-reveal>{estimator.text}</p>
        </header>

        <div className="worth" data-reveal>
          <div className="worth__inputs">
            <Slider label="Medical bills so far" value={medical} max={150000} step={1000} onChange={setMedical} format={money} />
            <Slider label="Pay you have lost" value={wages} max={80000} step={500} onChange={setWages} format={money} />

            <fieldset className="worth__severity">
              <legend>How serious is the injury?</legend>
              {estimator.severity.map((s, i) => (
                <button key={s.label} type="button" aria-pressed={severity === i} className={severity === i ? 'chip is-on' : 'chip'} onClick={() => setSeverity(i)}>{s.label}</button>
              ))}
            </fieldset>

            <Slider label="Your share of the blame" value={fault} max={100} step={5} onChange={setFault} format={(n) => `${n}%`} />
          </div>

          <aside className="worth__card" aria-live="polite">
            <p className="worth__label">A case like this might be valued around</p>
            {barred ? (
              <>
                <p className="worth__value">$0</p>
                <p className="worth__warn">In {firm.state}, if you are more than {estimator.faultBar}% at fault you cannot recover. Insurers know this, which is why they push blame onto you. Do not accept their percentage.</p>
              </>
            ) : (
              <p className="worth__value"><Rolling value={low} /> <span>to</span> <Rolling value={high} /></p>
            )}

            <div className="split" role="img" aria-label={parts.map((p) => `${p.label}: ${Math.round(p.share)}%`).join(', ')}>
              {parts.map((p) => p.share > 0 && <span key={p.key} className={`split__${p.key}`} style={{ flexGrow: p.share }} />)}
            </div>
            <dl className="worth__rows">
              <div><dt><i className="split__you" />You would keep about</dt><dd><Rolling value={value - fee} /></dd></div>
              <div><dt><i className="split__fee" />Our fee ({Math.round(estimator.feeRate * 100)}%)</dt><dd><Rolling value={fee} /></dd></div>
              <div><dt><i className="split__lost" />Our fee if we lose</dt><dd>$0</dd></div>
            </dl>

            <button type="button" className="btn btn--accent" onClick={() => openReview()}>Get a real answer, free <span aria-hidden="true">→</span></button>
            <p className="note">{estimator.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
