### Acceptance Criteria

- Show only plans eligible at the user's verified address by default (ineligible hidden behind “Show all”).
- Location permission must be optional; provide manual address entry and explain purpose clearly.
- Multi-step need analysis must be progressive (1–2 inputs per step) and skippable.
- Processing state should be instant for most cases; show skeleton/progress with meaningful copy if >1s.
- Recommendations must include: provider/plan, price (promo if any), speed, data policy, key features, install ETA, eligibility badge, and primary/secondary CTAs.
- “Why recommended” must map directly to captured signals (intent, budget, interests, location, usage).
- Comparison drawer supports up to 3 plans, shows effective monthly cost and essential attributes.
- Activation flow supports inline checks (coverage/credit), ID upload (optional), payment, and scheduling.
- Confirmation screen shows order number, schedule/ETA, plan summary, and feedback prompt.
- Accessibility: AA contrast, labels for badges/CTAs, semantic structure for screen readers, focus order logical.
- Error/empty states for: location denied, no eligible plans, backend error; provide alternatives (waitlist/agent).
- Privacy: explicit rationale for address, opt-out of analytics, data retention note; minimal data collection.
- Performance: mobile-first, skeleton loaders, optimistic UI for “Activate”, handle flaky networks gracefully.

### KPIs

- Time-to-activation: target < 5 minutes from intent to completion (happy path).
- Eligibility accuracy: % of shown plans that remain eligible at activation (target > 98%).
- Conversion rate (view → activate): baseline to be established; optimize by cohort.
- Drop-off points: by step (entry, questionnaire, processing, recommendations, activation).
- NPS / satisfaction for plan-finding: target ≥ 60 in first release.

### Analytics Events (with recommended properties)

- intent_submitted
  - props: { intentText, selectedSuggestions[], productPreference, brandAffinity?, signals[], ts }
- address_verified
  - props: { addressGranularity: 'gps'|'manual', postalCode, buildingId?, feasibilityImmediate:boolean, ts }
- processing_started / processing_completed / processing_fallback
  - props: { path: 'eligibility+promos', durationMs?, fallback: 'cached'|'manual_call'?, ts }
- plan_viewed
  - props: { plan_id, provider, position, eligibility_status, price, speed_mbps, ts }
- why_opened
  - props: { plan_id, matchReasons[], signals[], ts }
- plan_compared
  - props: { plan_ids[], toggles: { contractFree, dataCap }, ts }
- activate_clicked
  - props: { plan_id, price, promoPrice?, ts }
- activation_success
  - props: { plan_id, order_id, scheduled_date, payment_method, durationMs, ts }
- book_installation_clicked / book_installation_confirmed
  - props: { plan_id, slot, technicianAvailable, ts }
- chat_opened / chat_message_sent
  - props: { plan_context_id?, plan_id?, message_length, ts }
- show_all_toggled
  - props: { showIneligible:boolean, ts }
- feedback_submitted
  - props: { rating_1_to_5, comment_length, ts }

All events should include: session_id, device.os, device_id (if available), customer_segment_hint, and page/screen identifiers.









