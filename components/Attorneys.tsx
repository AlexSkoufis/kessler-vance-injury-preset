import { attorneys, reviews } from '@/lib/content';

/**
 * Attorneys as monogram cards rather than stock portraits, so the demo never shows a stranger
 * as a lawyer. Swap `.lawyer__mono` for a photo when you have real ones. Client reviews follow.
 */
export default function Attorneys() {
  return (
    <section className="section section--dark" id="attorneys">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow" data-reveal>Attorneys</p>
          <h2 className="display" data-reveal>Real lawyers. Not a call center.</h2>
        </header>

        <ul className="lawyers">
          {attorneys.map((a) => (
            <li className="lawyer" key={a.name} data-reveal>
              <div className="lawyer__mono" aria-hidden="true">{a.initials}</div>
              <p className="lawyer__role">{a.role}</p>
              <h3>{a.name}</h3>
              <p className="lawyer__line">{a.line}</p>
              <dl>
                <div><dt>Focus</dt><dd>{a.focus}</dd></div>
                <div><dt>Admitted</dt><dd>{a.admitted}</dd></div>
              </dl>
            </li>
          ))}
        </ul>

        <ul className="quotes">
          {reviews.map((r) => (
            <li className="quote" key={r.name} data-reveal>
              <p className="quote__stars" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote>“{r.quote}”</blockquote>
              <p><strong>{r.name}</strong>{r.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
