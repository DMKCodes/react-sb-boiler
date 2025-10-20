# Important Code Snippets

## Helmet (page)
```jsx
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";

const seo = buildSeo({ title: "About", description: "What we do", path: "/about", image: "/assets/og/about.jpg" });
{renderHelmetTags(Helmet, seo)}

## JSON-LD: Org/Business
import { ld, makeOrganization } from "../lib/schema";
<script type="application/ld+json">{ld(makeOrganization())}</script>

## JSON-LD: FAQ
import { ld, makeFAQPage } from "../lib/schema";
import { faq } from "../data/faq";
<script type="application/ld+json">{ld(makeFAQPage(faq))}</script>

## JSON-LD: Events
import { ld, makeEvent } from "../lib/schema";
<script type="application/ld+json">{ld(makeEvent({ name:"Show", startDate:"2025-12-05T10:00:00-05:00" }))}</script>

## Radix Accordion (FAQ)
<Accordion.Root type="multiple">…</Accordion.Root>

## Lightbox
import Lightbox from "yet-another-react-lightbox";
<Lightbox open={open} slides={slides} />

## Track CTA Events
import { trackCtaClick } from "../lib/analytics";
<button onClick={() => trackCtaClick({ label: "Book", location: "Hero" })}>Book</button>