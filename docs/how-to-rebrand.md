```md

# How to Rebrand this Repo (Colors, Fonts, Logos, Data)

1) Edit brand tokens
- [ ] src/styles/_variables.scss (colors, spacing, radii, fonts)
- [ ] src/styles/_globals.scss (export CSS variables, theme overrides)

2) Swap assets
- [ ] Logo files in */public/assets/
- [ ] OG img in */public/assets/og/

3) Site identity
- [ ] src/lib/siteConfig.js

4) Project-specific data
- [ ] src/data/ (testimonials, pricing, faq, etc.)

5) SEO
- [ ] Update page titles/descriptions w/ buildSeo()

6) Forms
- [ ] Update ContactForm, incorporate action &/or fetchUrl w/ provider endpoints