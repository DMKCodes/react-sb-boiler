# Accessibility Checklist (a/o WCAG 2.2 AA)

## Perceivables
- [ ] Text contrast >= 4.5:1 (body) / 3:1 (large/headings)
- [ ] Non-text audio & images incl. alt
- [ ] Captions/transcripts incl. for video/audio (where applicable)

## Operables
- [ ] Full keyboard support; visibility w/ :focus-visible
- [ ] Skip link to #main incl. in Layout
- [ ] Dialogs/menus/accordions/lightboxes focus-trapped & ESC-dismissable
- [ ] prefers-reduced-motion & DNT respected (incl. in this repo OOTB)

## Understandables
- [ ] One <h1> per page; ordered headings
- [ ] Form fields labeled; errors announced (aria-live)
- [ ] Link text is meaningful (even out of context)

## Robust
- [ ] All HTML is valid (no duplicate ids, etc.)
- [ ] ARIA only as needed; semantics first (button/link/input elements)
