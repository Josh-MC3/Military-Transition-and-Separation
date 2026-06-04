# Military Transition & Separation Guide

A comprehensive, free, open-source website to help U.S. military service members navigate separation and retirement from all branches of service.

## What This Is

A practical, no-fluff reference guide covering:

- **Timeline** — 24-month countdown checklist from planting seeds to final out-processing
- **TAP & SkillBridge** — How to maximize both programs, including pitching SkillBridge to hesitant commands
- **VA Claims** — BDD filing strategy, C&P exam tips, commonly missed conditions, PACT Act
- **Career** — Military-to-civilian resume translation, job search resources, corporate culture shock
- **Finances** — True military compensation math, retirement pay systems (High-3, BRS, CRDP, SBP)
- **Benefits** — GI Bill, VA Home Loan, healthcare options, and 8 benefits most veterans never claim
- **Mental Health** — Identity loss, loss of mission/community, family impact, warning signs
- **Mistakes** — The most common and costly mistakes, including the "Chief/Officer mentality" trap
- **Interactive Checklists** — 5 category checklists with progress tracking (saves to browser)

## Who It's For

- Junior Enlisted (E1–E5)
- NCOs & Petty Officers (E6–E7)
- Chiefs & Senior NCOs (E8–E9)
- Officers (O1–O10)
- Retirees (20+ years)

## Quick Start — Running Locally

No build tools required. This is a static HTML/CSS/JS site.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mil-transition-guide.git
cd mil-transition-guide

# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally (recommended for full localStorage support)
npx serve .
# or
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select `main` branch, `/ (root)` folder
5. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/mil-transition-guide/` within a few minutes.

## File Structure

```
mil-transition-guide/
├── index.html      # All content, 10 tabbed sections
├── styles.css      # All styling, responsive + print
├── app.js          # Tab navigation, subtabs, interactive checklists
└── README.md       # This file
```

## Features

- **Zero dependencies** — No frameworks, no npm, no build step
- **Fully responsive** — Mobile-first layout, works on any screen size
- **Interactive checklists** — Progress bars + localStorage persistence (checkboxes remembered between visits)
- **Hash routing** — Deep-linkable sections (e.g., `yoursite.com/#va` goes directly to VA Claims)
- **Print-friendly** — Print any section via browser print
- **Accessible** — Semantic HTML, proper heading hierarchy, keyboard-navigable

## Customizing

### Adding content
All content is in `index.html`. Each tab section has an `id` like `section-overview`, `section-va`, etc. Add cards, checklists, or paragraphs using the existing HTML patterns.

### Adding a new tab
1. Add a button in the `.tab-nav-inner` div: `<button class="tab-btn" data-section="newname">New Tab</button>`
2. Add a section: `<section class="tab-section" id="section-newname">...</section>`

### Changing colors
Edit the CSS variables in `:root {}` at the top of `styles.css`.

## Contributing

Contributions welcome. If you find outdated information, incorrect program details, or want to add branch-specific content, please open a PR.

Areas that could use expansion:
- Branch-specific transition nuances (Army, Navy, USMC, USAF, USSF, USCG)
- Reserve / National Guard-specific content
- Medical separation / IDES process
- State-by-state benefits breakdown

## Fact-Check Status

Content last reviewed and verified: **June 2026**. Key items verified:
- BDD 180–90 day window ✅ current
- GI Bill expiration rules (Forever GI Bill for post-Jan 2013 separations) ✅ corrected
- SBP-DIC offset eliminated January 2023 ✅ added
- SBP paid-up provision (age 70 + 30 years) ✅ added
- Army Credentialing Assistance reduced to $2,000/year, officers ineligible (Dec 2024) ✅ corrected
- CRDP 50% threshold ✅ current
- 2026 military pay raise (3.8%) and retiree COLA (2.8%) ✅ added
- SkillBridge 2024–2025 partner vetting tightened ✅ noted
- PACT Act still expanding presumptive conditions in 2026 ✅ current
- SGLI/VGLI 240-day window ✅ current (VGLI premiums reduced July 2025)

## Disclaimer

This guide is for informational purposes only. Military regulations, VA policies, and benefit programs change frequently. Always verify current requirements with your branch's official transition office, VA.gov, and DoD resources. This is not legal or financial advice.

## Resources

- [VA.gov](https://www.va.gov)
- [DoD TAP Program](https://www.dodtap.mil)
- [SkillBridge](https://skillbridge.osd.mil)
- [Military OneSource](https://www.militaryonesource.mil)
- [Hire Heroes USA](https://www.hireheroesusa.org)
- [Veterans Crisis Line](https://www.veteranscrisisline.net) — 988, Press 1

---

*Built to help those who served. Free forever.*
