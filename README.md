# Svayantra Tech - full-site local review build

A factory-focused website with a real Three.js scroll-led factory scene, light and dark themes, anonymous proof, systems detail, founder story and a sales enquiry draft. This is a review build, not a public release.

## Run

Use Node.js 22 or newer.

```
npm ci
npm run dev
```

For static output:

```
npm run build
npm run preview
```

Serve `dist/` over HTTP. Do not open `index.html` as a local file. The static archive is already built and can be served with `python3 -m http.server 4173 --directory dist` from its extracted folder. Production paths assume the domain root.

## Experience

- Native vertical scroll connects the factory's machines, routes and intelligence layer. Chapter buttons jump through the scene. Pointer movement adds a small camera response.
- The initial color theme follows the system. The header control changes it for the current visit.
- Reduced motion removes idle machinery movement, pointer response and scroll easing. Native scroll still chooses the scene's state.
- Rendering pauses while hidden and while below the hero. Mobile pixel ratio is capped at 1.25 and desktop at 1.5.
- If WebGL cannot initialize, the page provides a readable static introduction and all remaining content still works.
- Contact Sales is available at the top and bottom. Form validation prepares a visible review and a `mailto:` draft to founder@svayantra.tech. It does not send, submit or store lead data. The visitor must review and send with their email app.

## Content and claims

- The client names and product URLs are not exposed. The real factory photograph shows the founder, cropped to remove foreground bystanders.
- The two active groups and their combined approximately Rs 500 crore revenue are founder-reported context from October 2026. The revenue belongs to those client groups, not Svayantra.
- Approximately one GM hour/day for BMS is a founder estimate, not a measured universal result.
- QMS approximately 6,000 minutes per product with 250 parts equals approximately 100 hours. These are the same estimate, not two separate savings or an extra BMS result. Availability and fit require a workflow discussion.
- Sentinel is described as a maintenance prototype with synthesized incidents, human approval and a safety check, not a production rollout or safety guarantee.
- S.I.A and the connected autonomous factory are future vision, not current deployed capability. Hardware is a longer-term ambition.
- The six-week factory immersion and founder timeline are founder-reported.

The October 9 pitch-deck PDF was used only to recover the genuine founder/factory photograph. Its stale pipeline material was not reused. Content follows the later founder corrections and product scope checks.

## Implementation and assets

Three.js geometry includes CNC-style machines, articulated robots, conveyors, moving parts, trusses, cabinets, storage and safety markings. Static repeated geometry uses instancing. Routes and the eye are real spatial geometry, not a background video or an image sequence.

The full supplied Svayantra lockup retains its mark colors and shape. Only the wordmark pixels were recolored white; the lockup sits on black in both themes. Bebas Neue and Inter are self-hosted. Font license files are included with the fonts.

## Validation

The build passed. Screenshots at 320px, 390px and 1280px covered seven lower sections in both themes, with no horizontal overflow or runtime exceptions. Hero start/middle/end were also checked in both themes at those widths. Product disclosures, footer, form validation, edit and email-draft encoding, default system theme, reduced motion, chapter controls and forced WebGL failure were checked. Actual rendered pixels were inspected.

Observed hero scene: about 73 draw calls and 18,300 triangles in a sampled state. Physical-phone frame rate is unmeasured. Proof videos are frame-rendered captures, not performance benchmarks. The Three.js scene bundle is about 509 KB before gzip and generates Vite's 500 KB chunk-size warning; it loads separately from the page entry.

## Before release

Obtain approval of the lower-page design and final copy. Confirm the final lead-delivery choice and destination. If a real submission backend is wanted, connect and test it before claiming any submissions. Test on representative physical phones, then check deployment headers, domain routing, SEO/social assets and production availability. Do not deploy this package without approval.

No Git push, public deployment or upload was performed. The rejected baseline was not edited. This package includes only website source and assets, not working notes or private history.
