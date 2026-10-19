import { firm, nav } from '@/lib/content';
import { tel } from '@/lib/bus';
import { Logo } from './Nav';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta" data-reveal>
          <p>Hurt? Do not wait.</p>
          <a href={tel}>{firm.phone}</a>
          <span>Free · 24/7 · {firm.spanish}</span>
        </div>

        <div className="footer__grid">
          <div>
            <Logo />
            <nav aria-label="Footer">
              {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
              <a href="#faq">Questions</a>
            </nav>
          </div>
          <ul className="offices">
            {firm.offices.map((o) => (
              <li key={o.city}><strong>{o.city}</strong>{o.address}</li>
            ))}
          </ul>
        </div>

        <div className="footer__base">
          <p>{firm.feeNote}</p>
          <p>{firm.disclaimer}</p>
          <p>© 2026 {firm.name} {firm.line}. <a href={`mailto:${firm.email}`}>{firm.email}</a></p>
        </div>
      </div>
    </footer>
  );
}
