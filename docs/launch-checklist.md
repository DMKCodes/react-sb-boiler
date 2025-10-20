# Launch Checklist

## Domain(s) & Hosting
- [ ] DNS configured (A/AAAA/CNAME) via hosting provider
- [ ] HTTPS validated
- [ ] SITE.siteUrl set & matches project domain (see siteConfig.js)

## Meta & Feeds
- [ ] sitemap.xml & sitemap.txt generated & accessible (see ~/scripts & package.json)
- [ ] robots.txt references correct sitemap URL
- [ ] Favicon(s), manifest, apple touch icon included

## Analytics & Search
- [ ] Plausible/GA4 IDs correct; verify pageviews are seen in realtime
- [ ] Submit sitemap to Google Search Console, etc.
- [ ] Social share previews verified (FB Sharing Debugger, X/Twitter Card)

## Performance & A11y (prod build)
- [ ] Lighthouse: Perf/SEO/A11y >= 90 (3G fast & desktop)
- [ ] No 404s for images/fonts; all routes render correctly
- [ ] No meaningful console errors/warnings

## Content QA
- [ ] Copyediting: Verify phone/email, tel/mailto links, etc.
- [ ] Contact form submits (verify provider/endpoints incorporated), notifications/emails received
- [ ] Timezone/addresses correct for LocalBusiness schema

## Handoff
- [ ] README updated w/ client-specific notes if needed
- [ ] Admin guide generated for client (where & how to change data, add/remove images, add/remove events, etc.)
- [ ] Post-launch support window defined