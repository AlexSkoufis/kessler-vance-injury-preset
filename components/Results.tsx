'use client';

import { useState } from 'react';
import { cases, process, results, type CaseId } from '@/lib/content';
import { short } from '@/lib/bus';

/** Results as a filterable board of big numbers, then the four steps of a case. */
export default function Results() {
  const [filter, setFilter] = useState<CaseId | 'all'>('all');
  const types = cases.filter((c) => results.some((r) => r.type === c.id));
  const list = results.filter((r) => filter === 'all' || r.type === filter);

  return (
    <>
      <section className="section section--accent" id="results">
        <div className="wrap">
          <header className="head head--row">
            <div>
              <p className="eyebrow" data-reveal>Results</p>
              <h2 className="display" data-reveal>We do not talk tough. We show receipts.</h2>
            </div>
            <div className="filters" role="group" aria-label="Filter results" data-reveal>
              <button type="button" aria-pressed={filter === 'all'} className={filter === 'all' ? 'chip is-on' : 'chip'} onClick={() => setFilter('all')}>All</button>
              {types.map((t) => (
                <button key={t.id} type="button" aria-pressed={filter === t.id} className={filter === t.id ? 'chip is-on' : 'chip'} onClick={() => setFilter(t.id)}>{t.name}</button>
              ))}
            </div>
          </header>

          <ul className="wins" data-reveal>
            {list.map((r) => (
              <li className="win" key={r.title}>
                <p className="win__kind">{r.kind}</p>
                <p className="win__amount">{short(r.amount)}</p>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
          <p className="note note--dark" data-reveal>Example results for this demo. Every case is different, and past results do not guarantee a similar outcome.</p>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <header className="head">
            <p className="eyebrow" data-reveal>How it works</p>
            <h2 className="display" data-reveal>You focus on getting better. We handle the rest.</h2>
          </header>

          <ol className="steps">
            {process.map((s, i) => (
              <li className="step" key={s.title} data-reveal>
                <span className="step__num">{i + 1}</span>
                <p className="step__when">{s.when}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
