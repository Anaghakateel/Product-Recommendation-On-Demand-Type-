### API Contract Assumptions

#### Eligibility API — Input

```json
{
  "address": "string (geo-coordinates or postal)",
  "intent": "home-broadband | mobile | bundle",
  "usage": { "monthly_gb": 250, "peak_hours_usage": true },
  "budget_range": { "min": 1200, "max": 1500 },
  "device": { "os": "iOS", "device_id": "abc123" },
  "signals": ["search:gaming", "interest:streaming", "visited:planA"],
  "customer_segment_hint": "new"
}
```

#### Recommendations API — Output

```json
[
  {
    "plan_id": "provA_stream_plus_200",
    "name": "Stream Plus 200",
    "provider": "Provider A",
    "price": 1299,
    "promo_price": null,
    "speed": 200,
    "data_cap": null,
    "availability_status": "available",
    "eligibility_reasons": ["FTTH at building", "Address verified"],
    "installation_eta": "1-2 days",
    "recommended_score": 0.92,
    "match_reasons": [
      "Matches your budget ₹1200–1500",
      "High streaming interest → CDN pack",
      "FTTH available at your building"
    ]
  },
  {
    "plan_id": "provB_family_100",
    "name": "Family 100",
    "provider": "Provider B",
    "price": 1099,
    "promo_price": 999,
    "speed": 100,
    "data_cap": null,
    "availability_status": "partial",
    "eligibility_reasons": ["Copper available; fiber build in progress"],
    "installation_eta": "2-3 days",
    "recommended_score": 0.81,
    "match_reasons": ["Contract-free option", "Budget fit"]
  }
]
```

#### Error / Edge

- 202 Accepted + async poll when building-level verification is required.
- 200 with `"availability_status": "unavailable"` items returned but hidden by default; shown only if “Show all” is toggled.
- 200 fallback with `source: "cache"` when backend latency is high; UI shows trust banner and phone verification option.

#### Dev Notes — Endpoints

- POST `/eligibility/check` → { feasibility, coverage, building_id? }
- POST `/recommendations/query` → sorted plans as above
- POST `/activation/start` → { order_id, next_steps }
- POST `/installation/book` → { booking_id, slot }
- POST `/events/track` → analytics events (see acceptance-analytics.md)









