'use client';

import { useEffect, useState } from 'react';
import { afterCrash, deadline } from '@/lib/content';
import { openReview } from '@/lib/bus';

const DAY = 86_400_000;
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/**
 * Two tools side by side: a filing-deadline countdown from the date of the crash, and a
 * checklist of what to do afterwards. The deadline length comes from `deadline.years`.
 */
export default function Deadline() {
  // Dates are worked out in the browser, so the server-rendered page never disagrees with the visitor's clock
  const [today, setToday] = useState<Date | null>(null);
  const [crash, setCrash] = useState('');
  const [done, setDone] = useState<number[]>([]);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
    // Start with an example three months back so the countdown shows something straight away
    setCrash(iso(new Date(now.getTime() - 92 * DAY)));
  }, []);

  let daysLeft: number | null = null;
  let used = 0;
  let by = '';
  if (today && crash) {
    const start = new Date(`${crash}T00:00:00`);
    const end = new Date(start);
    end.setFullYear(end.getFullYear() + deadline.years);
    const total = (end.getTime() - start.getTime()) / DAY;
    daysLeft = Math.round((end.getTime() - today.getTime()) / DAY);
    used = Math.min(100, Math.max(0, ((total - daysLeft) / total) * 100));
    by = end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  const expired = daysLeft !== null && daysLeft < 0;
  const toggle = (i: number) => setDone(done.includes(i) ? done.filter((d) => d !== i) : [...done, i]);

  return (
    <section className="section" id="deadline">
      <div className="wrap">
        <header className="head head--row">
          <div>
            <p className="eyebrow" data-reveal>Time matters</p>
            <h2 className="display" data-reveal>{deadline.title}</h2>
          </div>
          <p className="head__aside" data-reveal>{deadline.text}</p>
        </header>

        <div className="duo">
          <div className="clock" data-reveal>
            <label className="clock__date">
              When was the crash?
              <input type="date" value={crash} max={today ? iso(today) : undefined} onChange={(e) => setCrash(e.target.value)} />
            </label>

            <div className="clock__read" aria-live="polite">
              {daysLeft === null ? (
                <p className="clock__days">—</p>
              ) : expired ? (
                <>
                  <p className="clock__days is-over">Passed</p>
                  <p>The general deadline was {by}. Call anyway: some claims have exceptions, and only a lawyer can tell you.</p>
                </>
              ) : (
                <>
                  <p className="clock__days">{daysLeft.toLocaleString('en-US')}<small>days left to file</small></p>
                  <p>Generally you would need to file by <strong>{by}</strong>.</p>
                </>
              )}
            </div>

            <div className="clock__bar" aria-hidden="true"><span style={{ width: `${used}%` }} /></div>
            <button type="button" className="btn btn--ink" onClick={() => openReview()}>Check my deadline <span aria-hidden="true">→</span></button>
            <p className="note">{deadline.note}</p>
          </div>

          <div className="todo" data-reveal>
            <div className="todo__head">
              <h3>After a crash: {afterCrash.length} things to do</h3>
              <span>{done.length}/{afterCrash.length}</span>
            </div>
            <ol>
              {afterCrash.map((step, i) => {
                const on = done.includes(i);
                return (
                  <li key={step.title}>
                    <button type="button" className={on ? 'todo__item is-done' : 'todo__item'} aria-pressed={on} onClick={() => toggle(i)}>
                      <span className="todo__box" aria-hidden="true">{on ? '✓' : i + 1}</span>
                      <span><strong>{step.title}</strong>{step.text}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
