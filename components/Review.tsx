'use client';

import { useEffect, useRef, useState } from 'react';
import { cases, faqs, firm, review, type CaseId } from '@/lib/content';
import { onOpenReview, tel } from '@/lib/bus';
import { scrollToTarget } from './SmoothScroll';

const steps = ['What happened', 'When', 'Injuries', 'Contact'];

/**
 * The free case review: four short steps with a progress bar. Any "Free review" button on the
 * page scrolls here, and the case tiles open it with the type already chosen (see lib/bus.ts).
 * It is a demo: on submit nothing is sent. Connect `submit` to your intake system or email.
 * The FAQ sits beside it.
 */
export default function Review() {
  const root = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [type, setType] = useState<CaseId | null>(null);
  const [when, setWhen] = useState<string | null>(null);
  const [injured, setInjured] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);

  useEffect(() => onOpenReview((chosen) => {
    setSent(false);
    if (chosen) { setType(chosen); setStep(1); }
    if (root.current) scrollToTarget(root.current, { offset: -90 });
  }), []);

  const canSubmit = name.trim().length > 1 && phone.replace(/\D/g, '').length >= 7;
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (canSubmit) setSent(true); };
  const reset = () => { setStep(0); setType(null); setWhen(null); setInjured(null); setName(''); setPhone(''); setSent(false); };

  return (
    <section className="section" id="review" ref={root}>
      <div className="wrap review">
        <div className="intake" data-reveal>
          <p className="eyebrow">Free case review</p>
          <h2 className="display">{review.title}</h2>
          <p className="intake__lead">{review.text}</p>

          {sent ? (
            <div className="intake__done" aria-live="polite">
              <div className="intake__tick" aria-hidden="true">✓</div>
              <h3>Got it, {name.trim().split(' ')[0]}.</h3>
              <p>On a live site an attorney would now call you back today. {review.demoNote}</p>
              <p>Need someone right now? <a href={tel}>{firm.phone}</a></p>
              <button type="button" className="btn btn--line" onClick={reset}>Start over</button>
            </div>
          ) : (
            <>
              <div className="intake__progress" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1} aria-label={`Step ${step + 1} of ${steps.length}: ${steps[step]}`}>
                {steps.map((label, i) => (
                  <button key={label} type="button" disabled={i > step} className={i === step ? 'is-current' : i < step ? 'is-done' : undefined} onClick={() => setStep(i)}>
                    {label}
                  </button>
                ))}
              </div>

              <div className="intake__pane" aria-live="polite">
                {step === 0 && (
                  <>
                    <h3>What kind of accident was it?</h3>
                    <div className="intake__options">
                      {cases.map((c) => (
                        <button key={c.id} type="button" aria-pressed={type === c.id} className={type === c.id ? 'chip is-on' : 'chip'} onClick={() => { setType(c.id); setStep(1); }}>{c.name}</button>
                      ))}
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h3>When did it happen?</h3>
                    <div className="intake__options">
                      {review.when.map((w) => (
                        <button key={w} type="button" aria-pressed={when === w} className={when === w ? 'chip is-on' : 'chip'} onClick={() => { setWhen(w); setStep(2); }}>{w}</button>
                      ))}
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3>Were you hurt?</h3>
                    <div className="intake__options">
                      {review.injured.map((w) => (
                        <button key={w} type="button" aria-pressed={injured === w} className={injured === w ? 'chip is-on' : 'chip'} onClick={() => { setInjured(w); setStep(3); }}>{w}</button>
                      ))}
                    </div>
                  </>
                )}
                {step === 3 && (
                  <form onSubmit={submit}>
                    <h3>Where can an attorney reach you?</h3>
                    <div className="intake__fields">
                      <label>Your name<input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required /></label>
                      <label>Phone number<input type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required /></label>
                    </div>
                    <ul className="intake__summary">
                      {[cases.find((c) => c.id === type)?.name, when, injured].filter(Boolean).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <button type="submit" className="btn btn--accent btn--xl" disabled={!canSubmit}>Get my free review <span aria-hidden="true">→</span></button>
                    <p className="note">Confidential. No obligation. {review.demoNote}</p>
                  </form>
                )}
              </div>
            </>
          )}
        </div>

        <div className="faq" id="faq" data-reveal>
          <h2 className="display display--sm">Straight answers.</h2>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={isOpen ? 'faq__item is-open' : 'faq__item'} key={f.q}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}<span className="plus" aria-hidden="true" />
                  </button>
                </h3>
                <p id={`faq-${i}`} hidden={!isOpen}>{f.a}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
