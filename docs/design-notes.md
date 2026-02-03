### Design Notes

#### Accessibility
- Color contrast meets WCAG AA. Eligibility badges use icon + text + accessible labels.
- All CTAs have clear labels and focus styles; form fields have programmatic labels and descriptions.
- Drawer/modal are announced via ARIA roles; focus is trapped while open and returned on close.
- Keyboard navigation: tab order follows visual order; escape closes overlays.
- Screen reader labels for badges, ETA, price, speed; microcopy avoids ambiguity.

#### Privacy & Consent
- Explain why location is needed before requesting; always provide manual address entry.
- Store only necessary signals (purpose-limited); support analytics opt-out and data deletion.
- Show “Saved for this session” when proceeding as guest; prompt to save to profile after activation.

#### Offline / Edge Behavior
- If network is flaky: show skeletons first, then cached offers if API times out; allow phone verification.
- “Activate now” uses optimistic UI where allowed; clearly show pending state until backend confirms.
- Persist questionnaire progress locally; resume flow when back online.

#### Progressive Disclosure
- Minimal plan info by default; details behind “Why recommended”, “Details”, and Comparison drawer.
- Avoid overwhelming lists; prioritize top 3 matches and provide “Show all” toggle for advanced users.

#### Localization
- Default examples use India locale (₹, Mbps, DD MMM). Keep units/formatting i18n-ready.
- Date/time picks adapt to locale; copy strings centralized and translatable.

#### Performance
- Mobile-first layout; defer non-critical JS; CSS-only skeletons; limit reflows in list rendering.
- Preload next-step UI (e.g., processing and results) after address is entered.

#### Microcopy Examples
- Eligibility badge labels:
  - Available: “✅ Available”
  - Partial: “⚠️ Partially available (fiber build required)”
  - Unavailable: “✖️ Not available (show alternatives)”
- Error:
  - “We’re having trouble fetching offers. Showing cached offers. You can verify by phone.”









