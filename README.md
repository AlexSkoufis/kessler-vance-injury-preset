# Kessler Vance — Personal Injury Law Firm Preset

A loud, direct homepage for a **fictional** Texas car accident and injury law firm. Night-road navy, highway-sign yellow, tall condensed headlines (Big Shoulders + Public Sans) and a phone number that is never more than a thumb away. There are no photographs: every visual is drawn in CSS or SVG.

Next.js 15 (static export) · GSAP 3 + ScrollTrigger · Lenis · plain CSS. No UI libraries.

```bash
npm install
npm run dev       # dev output goes to .next-dev, so builds never disturb a running dev server
npm run build     # static site in ./out — upload anywhere
```

## Signature pieces

| Section | What it does |
|---|---|
| Call bar & nav | A yellow strip with a live "attorneys on call" light and the phone number, above the navigation. On phones a call button stays pinned to the bottom of the screen. |
| Hero | A billboard headline over a night road drawn in CSS, with lane markings running towards you. The firm's headline figure sits on a highway-sign card and counts up. A ticker of results runs along the bottom. |
| Cases we take | Eight tiles with line icons. Each opens the case review with that type already chosen. |
| What the adjuster says | Six cards that flip from the insurer's line to what it means (hover, tap or keyboard). |
| Case value | Sliders for medical bills, lost pay and share of blame, plus injury severity. Shows a value range, a bar splitting it into what you keep, the fee and what fault costs, and applies Texas's 51% bar. |
| Deadline | Enter the crash date to see the days left to file under the two-year Texas limit. |
| After a crash | A seven-step checklist you can tick off. |
| Results | Big-number result cards, filterable by case type. |
| How it works | Four numbered steps. |
| Attorneys & reviews | Monogram cards (no stock portraits) and client quotes. |
| Free case review | Four short steps with a progress bar, beside the FAQ. Demo only. |
| Footer | The phone number at billboard size, four offices and the legal disclosures. |

## Re-skin

- **Copy & data** — `lib/content.ts`: firm details and offices, navigation, hero, ticker, case types, adjuster cards, estimator rates, deadline, checklist, results, process, attorneys, reviews, FAQ, intake questions.
- **Colour** — tokens at the top of `app/globals.css` (`--night`, `--yellow`, `--paper`, `--red`).
- **Type** — `app/layout.tsx`.
- **Another state** — change `firm.state`, `deadline.years`, `estimator.faultBar` and the wording in `deadline` and the FAQ to match your state's limitation period and comparative fault rule.
- **Attorney photos** — `components/Attorneys.tsx` uses monograms; swap `.lawyer__mono` for an image to use portraits.

## Connecting the intake form

`components/Review.tsx` collects the answers in state and does nothing on submit. Send them to your intake system or an email service in the `submit` function.

## Accessibility & motion

`prefers-reduced-motion` stops the road, the ticker, the entrance animations and the counting figures (final values are shown). Tiles, flip cards, sliders, filters, the checklist and the intake steps are all real buttons and inputs with visible focus.

## Important

Kessler Vance, its attorneys, results, figures and reviews are fictional, and the phone number is a reserved fictional one.

Lawyer advertising is regulated. Before a real firm publishes this, it must replace the footer disclosures with what its state bar requires, make sure every result and figure is real and can be substantiated, check the "no fee unless we win" wording against its fee agreement and its state's rules, and have the case value and deadline tools reviewed: they are illustrations, not legal advice, and the legal rules in them (a two-year limit, a 51% fault bar) describe Texas in general terms only.
