# Build Checklist
** Most of below is included in this project OOTB, albeit w/ limited complexity and styling. 
** Suggest reviewing each list item in detail to determine if the boilerplate version suits project reqs or needs to be upgraded/replaced.

## Initial Project Setup
- [ ] Repo created from template, .gitignore configured.
- [ ] ENV reviewed (SITE URL, analytics IDs, contact endpoints, etc.)
- [ ] siteConfig.js filled out (project-specific name, tagline, siteUrl, etc.)

## User Accessibility
- [ ] One logical <h1> per page; ordered headings
- [ ] Interactive elements are buttons/links w/ appropriate labels
- [ ] Keyboard only: skip link (see Layout.jsx), menus, dialogs, accordions, lightboxes
- [ ] Color contrast in accordance w/ WCAG; visibility (:focus-visible)
- [ ] Media: all images have alt text; video has captions and/or transcript
- [ ] User preferences for reduced motion and analytics tracking respected (see analytics.js, usePrefersReducedMotion.js)

## IA/Routing/Layout
- [ ] Routes defined for static pages (see routes.jsx)
- [ ] Layout component w/ Header -> Main -> Footer (see Layout.jsx)
- [ ] Scroll restoration on route changes

## UI Components
- [ ] Container, Section, Card, Button (see src/components, modify or replace boilerplate components as needed)
- [ ] Hero (same as above)
- [ ] Testimonials, Pricing, FAQ (w/ Radix), MediaLightbox, Video (same as above)
- [ ] ContactForm (RHF) w/ honeypot/elapsed time (same as above, this project's implementation is incredibly basic and should likely be replaced)

## SCSS Styles/Tokens
- [ ] _variables.scss & _globals.scss for SCSS -> CSS custom properties (see src/styles, modify according to preference & project specifics)
- [ ] Base reset + box-sizing
- [ ] Theming hooks: data-theme, data-brand (see _globals.scss)

## SEO & Socials
- [ ] Page-level helmets w/ react-helmet for metadata
- [ ] Open graph: default OG img incl., referenced in index.html & in page-level helmets as needed
- [ ] Twitter tags (optional, **no Twitter support incl. in this repo**)
- [ ] robots.txt present; sitemap generator wired to postbuild (basic sitemap generator incl. in ~/scripts/, purely optional & probably not optimized)

## Analytics
- [ ] Scripts added (Plausible &/or GA4) w/ manual pageviews (see AnalyticsTracker.jsx, analytics.js)
- [ ] AnalyticsRouteTracker fires on user navigation (same as above)
- [ ] Click events on key buttons and nav-links (see Header/Footer for example)
- [ ] DNT respect enabled (see analytics.js)

## Content/Data/Assets
- [ ] Necessary content/data updated in src/data/
- [ ] Legal/compliance pages generated as needed (Privacy Policy, Terms & Conditions) **not included in this repo**
