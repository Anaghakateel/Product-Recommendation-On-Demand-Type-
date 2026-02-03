### Component Library

Below are key UI components with suggested props. See `component-spec.json` for a machine-readable version.

#### RecommendationCard

Props:
- planId: string
- providerName: string
- planName: string
- priceMonthly: number
- promoPriceMonthly: number | null
- promoDurationMonths: number | null
- speedMbps: number | null
- dataCapGb: number | null
- isUnlimitedData: boolean
- features: string[]
- installationEtaDays: string
- availabilityStatus: 'available' | 'partial' | 'unavailable'
- eligibilityReasons: string[]
- matchReasons: string[]
- recommendedScore: number
- onActivate(planId): void
- onCompare(planId): void
- onDetails(planId): void
- showWhyRecommended: boolean
- compact: boolean

#### ComparisonDrawer

Props:
- selectedPlanIds: string[] (max 3)
- plans: { planId, priceMonthly, speedMbps?, installationEta, contractMonths?, effectiveMonthlyCost }[]
- toggles: { key, label, value }[]
- onToggleChange(key, value): void
- onActivateSelected(planId): void
- onClose(): void

#### EligibilityBadge

Props:
- status: 'available' | 'partial' | 'unavailable'
- labelOverride?: string
- ariaLabel: string

Suggested labels:
- available: "✅ Available"
- partial: "⚠️ Partially available"
- unavailable: "✖️ Not available"

#### CTABar

Props:
- selectedPlanId?: string
- primaryLabel: string
- onPrimaryClick(): void
- secondaryActions: { label, onClick }[]









