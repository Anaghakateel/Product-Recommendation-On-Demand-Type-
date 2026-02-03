## Telecom B2C Portal — Mobile-first Eligibility-to-Activation UX

This workspace contains:

- Flow diagram (Mermaid and SVG)
- Annotated mobile wireframes (SVG) — two variants for results (Minimal vs Exploratory)
- Interactive clickable prototype (HTML/CSS/JS)
- Component library spec (JSON + table)
- Acceptance criteria, KPIs, and analytics events
- Design notes (accessibility, privacy, offline/edge)
- API contract assumptions and sample payloads

### Quick Links

- Flow diagram (Mermaid): `docs/flow/eligibility_reco_activation_flow.mmd`
- Flow diagram (SVG): `docs/flow/eligibility_reco_activation_flow.svg`
- Wireframes (SVGs): `wireframes/`
- Interactive prototype: open `prototype/index.html` in a browser
- Components (JSON spec): `components/component-spec.json`
- Components (table): `components/README.md`
- Acceptance & Analytics: `docs/acceptance-analytics.md`
- Design Notes: `docs/design-notes.md`
- API Contract: `docs/api-contract.md`

### How to Preview

1) Open the SVGs in `wireframes/` for annotated mobile wireframes.
2) Open `prototype/index.html` directly in the browser (no server required). Tap through the flow: discovery → eligibility → recommendations → compare → CTA → feedback.
3) Read `docs/acceptance-analytics.md` for KPIs and analytics events per screen.

### Variants Provided

- Results Minimal (fast decision)
- Results Exploratory (detailed compare + bundles)

### Goal
Prioritize clarity of eligibility and speed to activation. Show only location-eligible plans by default; explain “Why recommended” using the captured signals.









