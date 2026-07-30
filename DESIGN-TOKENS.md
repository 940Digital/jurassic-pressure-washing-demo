# Design Tokens — Jurassic Pressure Washing LLC

Forked from Template Zero. Every value below is a full re-run of the token brainstorm for this business, not a reskin of Template Zero's own palette/type.

## 1. Identity

Jeffrey Williams just opened Jurassic Pressure Washing in Denton, TX — veteran-owned, disabled-owned, solo-operated, 5.0★ across 8 reviews in its first stretch. There's no legacy, no fleet, no history to lean on yet — the pitch is entirely "brand new, but sharp and dependable." A visitor should feel, in the first three seconds, that something dirty is about to become clean and warm — a literal before/after promise, not a vague "quality service" claim.

## 2. Palette concept

Rejected the obvious literal read (dinosaur green, "Jurassic Park" jungle motif) — it would read as a joke/novelty brand, undermining the trust a new company needs most. Original version leaned on cedar-stain (warm amber-brown) as the dominant accent across eyebrows, nav, stats, and the signature rail, with jet-spray blue held back as a "rare" accent used only on primary buttons.

**Revised 2026-07-30, per Owen's direct feedback:** that balance was backwards for a pressure-washing business — "needs to be blue," since water/pressure is what the trade actually signals, and avoiding that association on purpose read as simply wrong rather than clever. Jet Spray is now the dominant accent everywhere (eyebrows, logo, nav hover, stats, process numbers, contact labels, the signature rail itself), and the base dark/light neutrals were cooled toward navy/blue-white to match. Cedar Stain is kept, but demoted to the one place it's actually earned: the literal "after" stain-color swatch in the before/after transformation panel — not threaded through the whole site.

| Name | Hex | Role |
|---|---|---|
| **Basalt** | `#142530` | Base dark surface — deepened toward navy (was `#1C2226`) |
| **Fossil** | `#E8EEF0` | Base light surface — cooled toward blue-white (was a warmer cream `#EDE7DE`) |
| **Ink** | `#12222C` | Body text on light surfaces — cooled to match |
| **Slate Wash** | `#64798A` | The "before" state — muted grey-blue, secondary/borders |
| **Jet Spray** | `#1C8FBD` | **Primary accent now** — the water/pressure itself, used pervasively (was a "rare" accent at `#2B8CA3`) |
| **Cedar Stain** | `#B9773F` | **Demoted to one earned use** — the actual stain-color swatch in the before/after panel only, not a site-wide accent |

## 3. Type pairing

- **Display:** Big Shoulders Display (800/900) — a tall, industrial condensed face literally named for physical labor. Reads as blue-collar and confident without slipping into a novelty/theme-park voice.
- **Body:** Public Sans — plain, legible, workmanlike. No flourish, gets out of the way for service details and form labels.

**Why this pairing over Template Zero's slab-serif/humanist-sans:** Cedar & Iron's pairing was about permanence and craft. Jurassic is about a fast, visible transformation done by one guy who just started — a tall condensed sans reads as immediate and energetic rather than heritage-brand, which fits a business with zero years of history to signal instead.

## 4. Signature element: The Spray Line

Template Zero's Story Pole (a static wayfinding rail) is replaced with the **Spray Line** — a fixed left-edge band that fills from the top down with Slate Wash (the "before" grey) as you scroll, in real time. It's not decorative wayfinding; it's the brand's whole pitch — "grime gets washed away" — happening physically as you move through the page. Hidden below 900px, same as the original device.

## 5. Structural choices

- **Layout style assigned:** asymmetric/off-balance hero (headline pinned left, image bleeding past the right edge and rotated slightly, overlapping the fold) — distinct from Template Zero's centered full-bleed hero.
- **Lead section:** Fence staining / pressure washing transformation goes directly under the hero (per brief) — this is the one thing reviews and the business's own framing point to hardest.
- **Services:** presented as a checklist/list-style block, not cards — these are secondary offerings, so they get a lower-key treatment than the lead specialty.
- **Reviews:** kept deliberately small — real 5.0★/8-review stat stated plainly, no invented testimonial quotes, since no actual review text was retrievable in research and fabricating one would misrepresent a real business.
- **About:** meaningful but short — Jeffrey is a real draw (solo, veteran, disabled-owned) but the business is brand new, so the section states that honestly instead of padding with invented history.
- **Cut entirely:** a stats/proof marquee ("14 years," "260 jobs") — Template Zero earned that section with real tenure; Jurassic has none yet, so including one would be dishonest filler.

## 6. Images

No usable real photography exists yet for this business (no site, Facebook photos not accessible). All images are real stock (Unsplash), not AI-generated, chosen to match the fence-staining before/after narrative specifically.

**Bug fixed 2026-07-30:** the hero image was visibly stretching on some viewports. Root cause: `.hero__media` used `align-self: stretch` inside a CSS grid row combined with `img { height: 100% }` — the box's height resolved ambiguously against the grid's auto row track instead of a stable value. Replaced with a fixed `aspect-ratio: 4/3` on the container, which gives `object-fit: cover` a stable box to crop against regardless of viewport — no more distortion. Also nudged `object-position` down to frame more fence, less sky.

## 7. Flag for Owen

Nothing concerning found. Business appears legitimate, licensed/insured per third-party directory listings, owner (Jeffrey Williams) confirmed via his own public Facebook post announcing the opening.
