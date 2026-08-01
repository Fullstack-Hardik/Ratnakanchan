# RATNAKANCHAN CREATIONS — WEBSITE REBUILD
## Complete Analysis + Product Requirements Document (PRD)
Prepared as a senior PM / UX / SEO / IA / Brand / Full-Stack Architecture exercise
Source analyzed: https://ratnakanchan.com/ (live audit, July 2026)

---

# PHASE 1 — EXISTING WEBSITE ANALYSIS

## 1.1 Brand & Company Snapshot
| Field | Current Value |
|---|---|
| Company Name | Ratnakanchan Creations |
| Founded | 2007 (~17–19 years in business) |
| Category | Jewelry photo retouching, CAD design/rendering, 360° animation, e-commerce imaging agency (B2B service provider) |
| Headquarters | Rameshwar Gruh Nirman Society, Sandesh Nagar, Kurla (W), Mumbai – 400072, India |
| Phone | +91-9820892246 |
| Emails | info@ratnakanchan.com, ratnakanchan@hotmail.com |
| Skype | Ratnakanchan |
| Social | Facebook, LinkedIn (personal profile, not company page), Instagram, YouTube Shorts |
| Primary CTA | "Free Sample" → wa.link WhatsApp deep link |
| CMS | WordPress + Elementor 4.1.4 (page builder), Supsystic Pricing Table plugin |
| Global clients (claimed) | USA, Australia, UK, Dubai + others |

## 1.2 Logo & Color Scheme (as built)
- Logo: wordmark + gem/diamond icon, PNG raster (not SVG) — currently reused as a low-res compressed 249×59 PNG (visibly compressed, not retina-ready).
- Colors observed: white background, dark navy/black text, gold/mustard accent (implied by jewelry category, not consistently coded), red-orange in favicon tile (`#da532c`), no visible documented color system.
- Fonts: default Elementor Google Font stack — no distinctive brand typography.

## 1.3 Business Description / Mission (as stated on site)
"Elevating Jewelry Imagery" — one of Mumbai's jewelry photo-editing providers. Mission: "global reputation for exceptional creativity... in graphic design." Note: mission text is generic ("graphic design") and not jewelry-specific — a content quality gap.

## 1.4 Services Offered (from nav + service pages)
1. Jewelry Retouching (clipping path, e-commerce photo editing, color correction, diamond/metal color correction)
2. CAD Designing & Rendering (CAD model → STL → 4-angle render images)
3. 360° Animation Rendering (turntable video, 700×700 and custom sizes)
4. Marketing & Printing Services
5. Website Designing

## 1.5 Trust Factors / Stats Shown
- "Clients Globally," "Projects Delivered 100+," "Images Retouched," "Videos Rendered" — **counters show "0+" or generic placeholders**, i.e., broken/unpopulated stat widgets (critical bug).
- 8 bullet trust claims: 24/7 support, 100% quality guarantee, 100% secure, reasonable prices, multiple payment methods, bulk discounts, quick turnaround, free sample.
- No testimonials section found on homepage. No client logos. No case studies. No awards/certifications/badges.

## 1.6 Pricing (from /pricing/)
| Package | Starting Price | Includes |
|---|---|---|
| Clipping Path | $0.5 | Image cutout, product path, crop |
| E-commerce Product Retouch | $1 | Cutout, crop, color correction |
| Basic Retouching | $1.5 | Clipping path, crop, diamond masking, noise/dust removal, retouching |
| High-End Retouching | $2.5 | + color correction, diamond facet, metal color correction, natural shadow |
| CAD Design | $20 | CAD design, STL file, 4-angle renders |
| Video Rendering | $25 | 700×700 video, custom size option, 4-angle renders |

All CTAs route to a single WhatsApp link — no quote form, no cart, no per-service inquiry tracking.

## 1.7 Page-by-Page Audit

### Home (`/`)
- **Purpose:** Convert visitors into WhatsApp leads; introduce all 5 services.
- **Content:** Hero slider (GIF + 2 static banners), "What You Get From Us" intro, stat counters (broken), trust bullet list, "What We Do" service teaser, "Why Ratnakanchan" block.
- **Main CTA:** "Free Sample" (WhatsApp), "Know More" (Retouching page).
- **Problems:** Duplicated header/nav markup rendered twice in DOM (sticky header duplication — bloats HTML, hurts accessibility/SEO); animated GIF hero (large payload, poor Core Web Vitals); broken stat counters; no H1 hierarchy clarity; mission text is generic; footer nav duplicates main nav; no schema; meta description is truncated mid-sentence and copy-pasted across most pages (duplicate meta description across site).
- **Improvement:** Replace GIF/slider with optimized WebP/video hero, fix counters, add real testimonials/logos, unique meta per page, single semantic header.

### About (`/about/`)
- **Purpose:** Build trust, establish 17+ years experience and expertise areas.
- **Content:** Company story (est. 2007), areas of expertise (claw/prong settings, earring posts, diamond types, gold colors 10k/14k/18k), Mission & Focus statements.
- **CTA:** None distinct — just nav/footer WhatsApp icon.
- **Problems:** No team photos/bios, no timeline/milestones, no certifications, generic "graphic design" mission language misaligned with jewelry niche, no dedicated CTA on page.
- **Improvement:** Add founder/team section, timeline of milestones, certifications, tailored mission copy, mid-page CTA.

### Services (5 sub-pages: Jewelry Retouching, CAD Designing & Rendering, 360° Animation Rendering, Marketing & Printing, Website Designing)
- **Purpose:** Explain each offering and drive quote requests.
- **Problems (common across all):** Thin content, no before/after comparisons, no process steps, no FAQs, no dedicated schema (Service schema missing), no downloadable sample packs, weak internal linking between related services.
- **Improvement:** Each service page needs: hero, benefits, before/after gallery, process timeline, FAQ, related-service cross-links, dedicated lead form + WhatsApp + "Request Free Sample."

### Pricing (`/pricing/`)
- **Purpose:** Show tiered pricing to qualify leads.
- **Problems:** Flat plugin-based table (Supsystic) — not mobile-optimized, no annual/bulk calculator, single CTA link for every tier (no differentiation/tracking), no currency selector for international clients, no enterprise/bulk-custom tier.
- **Improvement:** Interactive comparison table, bulk order calculator, custom "Enterprise" tier with contact form, multi-currency display.

### Gallery
- **Purpose:** Portfolio/before-after showcase.
- **Problems (inferred from site pattern):** Likely flat image grid without categorization, filtering, or lightbox/before-after slider — no lazy loading strategy evident, no alt text convention.
- **Improvement:** Filterable by service/jewelry type, before/after slider component, lightbox, lazy-loaded WebP/AVIF.

### Blog
- **Purpose:** SEO content and authority building.
- **Problems:** Single visible sample article about "e-commerce photo growth" with truncated/duplicate meta description; no visible category structure, no author bio (E-E-A-T weak), no related posts, no content calendar evident.
- **Improvement:** Real content strategy (see Phase 5), author E-E-A-T bios, category/tag taxonomy, internal linking to services.

### Contact
- **Purpose:** Capture leads via form/contact details.
- **Problems:** Heavy reliance on WhatsApp only; unclear if a native form exists/works; no map embed confirmed; no business hours; no multi-region contact routing for international clients.
- **Improvement:** Multi-channel contact (form + WhatsApp + email + Calendly-style booking), embedded map, business hours in local + client time zones.

### Header / Navigation
- Rendered twice in DOM (duplicate `<nav>` blocks — likely sticky-header duplication from Elementor), inconsistent capitalization ("SERVICE" singular vs "PRICING"), dropdown "SERVICE" has no direct landing page (href="#").

### Footer
- Repeats full navigation + contact + "Why Ratnakanchan" block + payment icons (PayPal). No newsletter signup, no sitemap link, no privacy policy/terms links, no certifications/badges, copyright year "2026" already set (fine) but domain typo "ratnkanchan.com" appears in copyright text (missing "a") — brand consistency bug.

---

# PHASE 2 — SEO AUDIT

| Issue | Problem | Impact | Priority | Recommended Fix |
|---|---|---|---|---|
| Title Tags | Titles are literally "HOME -", "ABOUT -", "PRICING -" (broken/incomplete Yoast-style templates) | Severe — no keyword targeting, poor CTR | Critical | Unique, keyword-rich titles per page (e.g., "Jewelry Photo Retouching Services Mumbai \| Ratnakanchan Creations") |
| Meta Description | Duplicated across Home/About/Pricing (same truncated e-commerce sentence), and Pricing's own is a fragment ("Retouch/Render in bulk and get a great deal") | Duplicate content signals to Google, weak SERP snippets | Critical | Unique 150–160 char descriptions per page with primary keyword + CTA |
| Heading Structure | Multiple H2s used as visual labels ("NAVIGATION", "CONTACT DETAILS") in footer — semantically incorrect; true H1 unclear on homepage | Confuses crawlers on page topic | High | One clear H1 per page matching primary keyword; footer labels as non-heading elements |
| URL Structure | Mostly clean (`/jewelry-retouching/`) but inconsistent slugs like `/marketing-printing-services-2/` and `/website-designing-2/` (leftover "-2" suffixes from duplicate page cleanup) | Looks unprofessional, minor SEO dilution | Medium | Clean slugs: `/marketing-printing/`, `/website-designing/` with 301 redirects |
| Image Alt Tags | Many images have empty alt (`""`) or filename-based, non-descriptive | Fails accessibility + image SEO | High | Descriptive alt text with keywords, e.g., "diamond ring CAD render 4-angle view" |
| Schema Markup | None detected (no Organization, LocalBusiness, Service, FAQ, or BreadcrumbList schema) | Missed rich-result opportunities | Critical | Implement Organization, LocalBusiness, Service, FAQPage, BreadcrumbList JSON-LD |
| Breadcrumbs | Simple text breadcrumb present on some pages ("Home / About") but not marked up with schema | Missed rich snippets | Medium | Add BreadcrumbList schema |
| Internal Linking | Weak — services don't cross-link to each other or to blog/gallery | Poor topic authority distribution | High | Contextual in-content links between related services/blog/gallery |
| Canonical Tags | Present and self-referencing (good) | — | Low | Maintain |
| Indexability | `robots: follow, index` present — fine | — | Low | Maintain, verify sitemap submission |
| Content Quality/Thin Content | Service pages likely under 300 words each (typical WP/Elementor template pattern observed) | Weak topical depth vs. competitors | Critical | 800–1500 words per service page with structured sections |
| Duplicate Content | Meta descriptions and "Why Ratnakanchan" block repeated verbatim on every page | Dilutes uniqueness signals | High | Unique intros; keep trust block but vary copy or convert to a component not duplicated in raw content |
| Search Intent Match | Pages target service/commercial intent reasonably (retouching, CAD) but lack informational funnel (guides, comparisons) to capture top-of-funnel search | Missed traffic | High | Add blog/resource hub for informational queries |
| Page Speed / Core Web Vitals | Large hero GIF, uncompressed WP images (`-scaled.jpg`, full-size uploads), Elementor CSS/JS bloat, render-blocking fonts | Poor LCP/CLS, mobile speed | Critical | Rebuild on modern stack (Next.js/Tailwind), AVIF/WebP, CDN, lazy load, font-display swap |
| Semantic HTML | Divs used for nav/heading roles inconsistently; duplicated `<nav>` | Accessibility + SEO parsing issues | High | Single semantic header, proper landmark roles |
| Accessibility | No confirmed alt text discipline, low color contrast unknown but likely default theme, no skip-link visible confirmation beyond "Skip to content" anchor present (good) | WCAG risk | High | Full WCAG 2.1 AA pass (see Phase 6) |
| Mobile Friendliness | Elementor is responsive by default but heavy assets likely hurt mobile speed | Medium-High | High | Mobile-first rebuild, test Core Web Vitals on 4G |
| Local SEO | No LocalBusiness schema, no Google Business Profile link visible, NAP not consistently repeated with schema | Missed local pack visibility for "Mumbai jewelry retouching" | High | LocalBusiness schema, GBP integration, consistent NAP |
| Blog SEO | One sample post found; no author, no categories visible, generic meta | Weak topical authority | High | Structured blog with categories, authors, schema |
| E-E-A-T Signals | No author bios, no certifications, no client logos, no case studies, no press mentions | Weak trust signal to Google & users | Critical | Add authorship, credentials, case studies, verifiable stats |
| Conversion Signals | Single CTA type (WhatsApp) everywhere; no lead form, no analytics-tracked funnel differentiation | Limits lead capture channels & attribution | High | Multi-channel CTAs + forms + tracked events |

---

# PHASE 3 — CONTENT EXTRACTION (Organized, Not Rewritten)

**Business Info:** Est. 2007, Mumbai-based, 17+ yrs experience, serves USA/Australia/UK/Dubai/global clients.

**Services:** Jewelry Retouching · CAD Designing & Rendering · 360° Animation Rendering · Marketing & Printing Services · Website Designing.

**Pricing:** See table in 1.6 (six tiers, $0.5–$25 starting prices, bulk discounts implied but not itemized).

**Process/Workflow:** Not explicitly documented on-site beyond "requisite touch up... visualize wax model in final form" — implies: raw image/CAD/sketch input → digital correction → color/metal/diamond accuracy pass → final delivery. Needs to be formalized into a clear step-by-step for the new site.

**FAQ:** None currently published — must be authored net-new.

**Benefits (as claimed):** 24/7 support, quality guarantee, secure handling, competitive pricing, multiple payment methods, bulk discounts, fast turnaround, free sample.

**Industries Served:** Jewelry manufacturers, e-commerce jewelry sellers, designers using CAD/wax models.

**Countries Served:** India (HQ), USA, Australia, UK, UAE (Dubai), "other parts of the world."

**Experience:** 17–19 years (site states both "15+" and "17 years" in different spots — inconsistency to resolve, recommend standardizing to founding year 2007).

**Client Types:** Individual jewelry designers, jewelry brands/manufacturers, e-commerce sellers.

**Portfolio Categories (implied by service list):** Rings, earrings, pendants, bracelets, necklaces; CAD renders; 360° videos; wear-model shots.

**Images/Videos Required for Rebuild:** Before/after retouching pairs per category, CAD wireframe→render sequences, 360° turntable sample videos, team/office photography, client logos (with permission), real project thumbnails for gallery filters.

**Downloads:** None currently offered — new site should offer a sample pricing PDF / capability deck as a lead magnet.

---

# PHASE 4 — COMPETITOR-LEVEL IMPROVEMENTS TO ADOPT

- **Premium hero:** Static high-quality before/after slider or short looping MP4 (not GIF) with a single clear value proposition headline + dual CTA ("Get Free Sample" / "See Pricing").
- **Interactive before/after slider** for retouching examples (drag-to-reveal).
- **Process timeline** (Upload → Quote → Edit → Review → Deliver) shown visually.
- **Comparison table** (Basic vs High-End Retouching vs CAD vs Video) with feature checkmarks.
- **Case studies:** 3–5 in-depth client success stories with real numbers (turnaround time, order volume, satisfaction).
- **Industry/segment pages:** "For Jewelry Manufacturers," "For E-commerce Sellers," "For Independent Designers."
- **Trust badges:** ISO/quality badges if applicable, payment security badges, "as seen in" press logos, years-in-business badge.
- **Client logos carousel** (with permission) grouped by country served.
- **Pricing tables** redesigned as responsive cards with a bulk-order calculator.
- **Testimonials** with photo/company name, star ratings, schema markup (Review/AggregateRating).
- **FAQ accordion** per service page + schema.
- **Lead generation:** Gated "Free Sample" upload form (collect email + WhatsApp), exit-intent offer, downloadable rate card PDF.
- **Sticky CTA bar** (mobile + desktop) with WhatsApp + Call + Get Quote.
- **WhatsApp Business API widget** (not just a static link) — with pre-filled message templates per service.
- **Live chat** (Tawk.to / Crisp / Intercom-lite) as fallback to WhatsApp.
- **Booking system** for consultation calls (Calendly embed) for enterprise/bulk clients.

---

# PHASE 5 — INFORMATION ARCHITECTURE

## 5.1 Main Navigation
```
Home
About Us
Services ▾
  ├── Jewelry Photo Retouching
  ├── CAD Designing & Rendering
  ├── 360° Animation Rendering
  ├── Marketing & Printing Services
  └── Website Designing
Industries ▾
  ├── For Jewelry Manufacturers
  ├── For E-commerce Sellers
  └── For Independent Designers
Gallery
Pricing
Blog
Contact
[CTA Button: Get Free Sample]
```

## 5.2 URL Structure (clean, flat, keyword-rich)
```
/                              → Home
/about/
/services/jewelry-retouching/
/services/cad-designing-rendering/
/services/360-animation-rendering/
/services/marketing-printing/
/services/website-designing/
/industries/jewelry-manufacturers/
/industries/ecommerce-sellers/
/industries/independent-designers/
/gallery/
/gallery/rings/  /gallery/earrings/  /gallery/cad-renders/  ...
/pricing/
/blog/
/blog/category/jewelry-photography/
/blog/category/cad-design/
/blog/category/ecommerce-tips/
/blog/{slug}/
/contact/
/faq/
/case-studies/
/case-studies/{slug}/
/privacy-policy/  /terms-of-service/  /sitemap.xml
```

## 5.3 Footer Navigation
Column 1: Services (all 5) · Column 2: Company (About, Case Studies, Blog, Contact) · Column 3: Resources (FAQ, Pricing, Free Sample, Rate Card PDF) · Column 4: Contact/NAP + social + WhatsApp + Newsletter signup + Legal links.

## 5.4 Internal Linking Strategy
- Every service page links to: 2–3 related services, 1 relevant industry page, 1–2 relevant blog posts, gallery filtered to that category.
- Every blog post links back to the relevant service page + 2 related posts.
- Homepage links to all top-level nodes (services, industries, gallery, pricing, blog, contact).

## 5.5 Blog Categories
Jewelry Photography Tips · CAD & 3D Rendering · E-commerce & Marketing · Industry Trends · Case Studies/Behind-the-Scenes.

## 5.6 Gallery Categories
Rings · Earrings · Necklaces · Bracelets · Pendants · CAD Renders · 360° Videos · Before/After.

---

# PHASE 6 — COMPLETE PRD

## 6.1 Project Overview
Rebuild ratnakanchan.com as a fast, modern, SEO-first, conversion-optimized B2B marketing website for an international jewelry post-production service company (photo retouching, CAD design, 3D rendering, animation). Replace the current WordPress/Elementor build with a lightweight, headless, JAMstack architecture.

## 6.2 Business Goals
1. Increase qualified inbound leads (form + WhatsApp) by 3x within 6 months of launch.
2. Rank on page 1 for target terms: "jewelry photo retouching services," "jewelry CAD rendering company," "360 jewelry animation service," "jewelry image editing India."
3. Establish premium brand perception matching 17+ years of experience.
4. Reduce page load time to <2s LCP on mobile.
5. Build a scalable content engine (blog + case studies) for long-term organic growth.

## 6.3 Target Audience
- Jewelry manufacturers/wholesalers (India + global) needing bulk photo editing.
- E-commerce jewelry brands (Shopify/Amazon/Etsy sellers) needing product imagery at scale.
- Independent jewelry designers needing CAD-to-render/video visualization before production.
- Marketing agencies sourcing white-label jewelry retouching.

## 6.4 User Personas
| Persona | Goal | Pain Point | Key Page |
|---|---|---|---|
| "Priya, E-comm Ops Manager" (India/UAE brand) | Bulk-edit 500 SKU photos monthly | Inconsistent quality from freelancers | Pricing + Bulk Calculator |
| "James, US Jewelry Designer" | Turn CAD file into photorealistic render before casting | Slow turnaround from local vendors | CAD Designing service page |
| "Fatima, Dubai Boutique Owner" | Get a 360° video for her website product pages | Doesn't know cost/process | 360° Animation page + FAQ |
| "Agency Producer" | White-label retouching partner | Needs reliability + NDA/confidentiality | About + Trust/Case Studies |

## 6.5 Functional Requirements
- Responsive, mobile-first design (all breakpoints).
- CMS-editable pages (services, blog, gallery, pricing, testimonials) via headless CMS.
- Multi-step "Free Sample" upload form (file upload up to 25MB, service selector, contact info) → email + CRM webhook.
- WhatsApp Business deep-link CTAs with pre-filled, per-service messages.
- Filterable/searchable gallery with lightbox and before/after slider component.
- Interactive pricing calculator (select service + volume → estimated cost).
- Blog with categories, tags, author bios, related posts, reading time.
- Case studies template (problem → solution → results with metrics).
- FAQ accordion (global + per-service), schema-marked.
- Contact form with server-side validation + spam protection (honeypot/reCAPTCHA v3).
- Newsletter signup (footer) integrated with email platform (Mailchimp/Brevo).
- Multi-language readiness (structure only; initial launch English, extensible to Spanish/Arabic for MENA/US markets).
- Cookie consent banner (GDPR/CCPA-aware given international clientele).

## 6.6 Non-Functional Requirements
- Performance: Lighthouse score ≥95 mobile/desktop across Performance, Accessibility, Best Practices, SEO.
- LCP < 2.0s, CLS < 0.1, INP < 200ms.
- Uptime SLA 99.9% (hosted on Vercel/similar edge network).
- WCAG 2.1 AA accessibility compliance.
- Fully indexable, crawlable static/SSR pages (no client-side-only rendering for core content).
- Secure: HTTPS everywhere, HSTS, CSP headers, form rate-limiting, no plugin-based attack surface (unlike WordPress).

## 6.7 User Flow (Primary Conversion Path)
```
Landing (Ads/Organic/Referral)
   ↓
Homepage or Service Page
   ↓
View Gallery / Before-After proof  →  Read testimonials/case study
   ↓
Check Pricing / Calculator
   ↓
Click "Get Free Sample" → Upload form OR WhatsApp
   ↓
Confirmation page + email autoresponder
   ↓
Sales follow-up (CRM lead created)
```

## 6.8 Site Architecture
See Phase 5 (full sitemap + URL structure).

## 6.9 SEO Requirements
- Unique title/meta per page (template: `{Primary Keyword} | Ratnakanchan Creations`).
- JSON-LD: Organization, LocalBusiness, Service (per service page), FAQPage, BreadcrumbList, Review/AggregateRating.
- XML sitemap auto-generated (`/sitemap.xml`) + submitted to GSC.
- `robots.txt` allowing full crawl, disallowing `/admin`, `/thank-you` (if applicable), pointing to sitemap.
- Canonical tags self-referencing on all pages.
- Semantic heading hierarchy (single H1 per page).
- Image optimization: WebP/AVIF, descriptive filenames + alt text, responsive `srcset`.
- Internal linking per Phase 5.5.

## 6.10 Accessibility Requirements
- Keyboard-navigable menus and forms.
- ARIA labels on icon-only buttons (WhatsApp, social, hamburger menu).
- Color contrast ratio ≥4.5:1 for body text.
- Alt text on all meaningful images; decorative images marked `alt=""`.
- Visible focus states.

## 6.11 Performance Requirements
- Static generation (SSG/ISR) for marketing pages; edge caching via CDN.
- Image CDN (Cloudinary/Imgix) with on-the-fly resizing.
- Critical CSS inlined; JS code-split per route; no render-blocking third-party scripts above the fold.
- Font subsetting + `font-display: swap`.

## 6.12 Security Requirements
- HTTPS/TLS enforced, HSTS preload.
- Form spam protection (reCAPTCHA v3 / hCaptcha).
- Rate limiting on API routes (contact/upload forms).
- File upload validation (type/size whitelist, virus scan if feasible) for sample uploads.
- No direct database exposure; headless CMS behind auth.

## 6.13 CMS Requirements
- Headless CMS (Sanity or Strapi) managing: Services, Blog Posts, Gallery Items, Testimonials, Case Studies, Pricing Tiers, FAQs, Team Members.
- Non-technical staff can add/edit content without code deploys (webhook-triggered ISR rebuild).

## 6.14 Admin Panel Requirements
- CMS studio access (Sanity Studio or Strapi Admin) with role-based permissions (Editor, Admin).
- Media library with automatic image optimization on upload.
- Lead inbox: view/download form submissions and uploaded sample files.

## 6.15 Blog Requirements
- Category/tag taxonomy, author profiles (photo + bio + credentials for E-E-A-T), related posts, estimated reading time, social share buttons, comment section optional (or disabled to reduce spam risk).

## 6.16 Gallery Requirements
- Category filters, lazy-loaded masonry/grid layout, lightbox viewer, before/after slider component for retouching examples, video embeds for 360° samples (self-hosted or YouTube-embedded for performance).

## 6.17 Lead Generation Requirements
- Primary form: "Get Free Sample" (name, email, WhatsApp/phone, service type, file upload, message).
- Secondary form: Newsletter signup.
- Tertiary: "Request Bulk Quote" for pricing calculator results.
- All leads: email notification to sales + optional CRM webhook (HubSpot/Zoho/Google Sheets via Zapier/Make).

## 6.18 Forms
| Form | Fields | Destination |
|---|---|---|
| Free Sample | Name, Email, Phone/WhatsApp, Service, File Upload, Notes | Email + CRM |
| Contact | Name, Email, Subject, Message | Email + CRM |
| Bulk Quote | Service, Volume, Country, Email | Email + CRM |
| Newsletter | Email | Mailchimp/Brevo list |

## 6.19 Email Notifications
- Instant admin notification on form submit.
- Auto-reply confirmation to user ("We've received your sample request — expect a reply within 24 hrs").
- Optional drip sequence for newsletter subscribers (case studies, tips).

## 6.20 Analytics
- GA4 with enhanced event tracking (form submits, WhatsApp clicks, file uploads, scroll depth, CTA clicks per service).
- Google Search Console verified + sitemap submitted.
- Optional: Microsoft Clarity or Hotjar for heatmaps/session recordings.
- Conversion goals mapped in GA4 (lead form, WhatsApp click, phone click).

## 6.21 Schema Plan
Organization · LocalBusiness · WebSite (with SearchAction) · Service (×5, one per service page) · FAQPage · BreadcrumbList · Review/AggregateRating (testimonials) · Article (blog posts) · ImageObject (gallery).

## 6.22 Robots & Sitemap
`robots.txt`: allow all except `/admin/*`, `/api/*`; reference `Sitemap: https://ratnakanchan.com/sitemap.xml`. Sitemap auto-regenerated on content publish (index + child sitemaps for pages/blog/gallery if volume grows).

## 6.23 Deployment Requirements
- Hosting: Vercel (or Netlify) with edge caching + preview deployments per PR.
- Domain + DNS migration plan with zero-downtime cutover, 301 redirect map from all legacy URLs (including the `-2` suffix slugs) to new clean URLs.
- Staging environment for QA before production push.

## 6.24 Testing Checklist
- [ ] Cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Cross-device (mobile/tablet/desktop, iOS/Android)
- [ ] Lighthouse ≥95 all categories
- [ ] Form submission + email delivery test
- [ ] File upload test (size/type limits)
- [ ] 301 redirect map verified (no 404s from legacy URLs)
- [ ] Schema validated (Google Rich Results Test)
- [ ] Accessibility audit (axe DevTools / WAVE)
- [ ] Broken link check (all internal/external)
- [ ] Load testing for concurrent gallery/image requests

## 6.25 Launch Checklist
- [ ] GA4 + GSC verified and goals firing
- [ ] Sitemap submitted to GSC and Bing Webmaster
- [ ] SSL/HTTPS + HSTS confirmed
- [ ] All legacy URLs 301-redirected
- [ ] Social meta (OG/Twitter cards) validated per page
- [ ] Legal pages live (Privacy Policy, Terms)
- [ ] WhatsApp Business API links tested per service
- [ ] Backups/rollback plan documented
- [ ] Client sign-off on content accuracy (stats, pricing, contact info)

## 6.26 Future Scope
- Client portal (order tracking, file delivery, invoice history).
- Multi-language site (Spanish, Arabic) for US/MENA expansion.
- AI-assisted before/after preview tool (upload a raw photo, see a sample retouch preview).
- Subscription/membership pricing tier for high-volume e-commerce clients.
- Mobile app or PWA for order submission on the go.

---

# PHASE 7 — PAGE-BY-PAGE BREAKDOWN (SEO + CONTENT SPEC)

### 7.1 Home (`/`)
- **SEO Goal:** Rank for brand + primary category term; convert cold traffic.
- **Primary KW:** "jewelry photo retouching company" | **Secondary:** "jewelry CAD rendering services," "360 jewelry animation India"
- **Hero:** Headline ("Premium Jewelry Retouching & CAD Rendering, Trusted Globally Since 2007") + subhead + dual CTA (Free Sample / View Pricing) + before/after visual proof.
- **Sections:** Trust stats (real, live numbers) → Services grid (5 cards) → Why Us → Process timeline → Testimonials → Client logos → Featured case study → Blog teaser → Final CTA band.
- **CTA:** Get Free Sample (primary), View Pricing (secondary).
- **Schema:** Organization, LocalBusiness, WebSite.
- **Meta Title:** "Jewelry Photo Retouching & CAD Rendering Company | Ratnakanchan Creations"
- **Meta Description:** "Professional jewelry photo retouching, CAD designing, and 360° rendering trusted by clients in the USA, UK, Australia & Dubai since 2007. Get a free sample today."
- **Slug:** `/`

### 7.2 About (`/about/`)
- **Primary KW:** "jewelry retouching company Mumbai" | **Secondary:** "jewelry image editing experience"
- **Sections:** Story/timeline (2007–present) → Mission/Vision/USP → Team → Certifications → Global client map → CTA.
- **Meta Title:** "About Us — 17+ Years of Jewelry Retouching Expertise | Ratnakanchan"
- **Slug:** `/about/`

### 7.3 Service Pages (×5) — Template Spec
For each of: Jewelry Retouching, CAD Designing & Rendering, 360° Animation Rendering, Marketing & Printing, Website Designing:
- **Hero:** Service name + one-line value prop + CTA.
- **Sections:** What's included → Before/after or sample gallery → Process steps → Pricing snapshot (link to full pricing) → FAQ (schema) → Related services → Related blog posts → CTA band.
- **Primary KW example (Retouching):** "jewelry photo retouching services" | **Secondary:** "diamond image editing," "e-commerce jewelry photo editing"
- **Schema:** Service, FAQPage, BreadcrumbList.
- **Slug:** `/services/jewelry-retouching/` (and siblings per 5.2)

### 7.4 Industry Pages (×3 — new)
- Jewelry Manufacturers | E-commerce Sellers | Independent Designers — each with tailored pain points, relevant service bundle, and a persona-specific case study/testimonial. Primary KW e.g. "jewelry photo editing for e-commerce sellers."

### 7.5 Gallery (`/gallery/`)
- **Primary KW:** "jewelry retouching portfolio"
- **Sections:** Category filter bar → Masonry grid → Lightbox/before-after slider → CTA.
- **Schema:** ImageObject per item.

### 7.6 Pricing (`/pricing/`)
- **Primary KW:** "jewelry photo editing pricing"
- **Sections:** Tier cards (from Phase 1.6, reformatted) → Bulk calculator → Enterprise/custom quote form → FAQ (payment methods, turnaround, revisions).

### 7.7 Blog (`/blog/` + posts)
- **Primary KW (hub):** "jewelry photography and editing tips"
- **Sections:** Category filters → Featured post → Grid with author/date/read-time → Newsletter CTA.
- Each post template: H1, intro, TOC (for long posts), body with H2/H3, author bio box, related posts, CTA.

### 7.8 Case Studies (`/case-studies/` — new)
- Problem → Approach → Results (metrics: turnaround time, volume, satisfaction) → Client quote → CTA.

### 7.9 FAQ (`/faq/` — new, global hub)
- Aggregated FAQPage schema pulling common questions across services (pricing, turnaround, file formats, confidentiality/NDA, payment, revisions).

### 7.10 Contact (`/contact/`)
- **Primary KW:** "contact jewelry retouching company"
- **Sections:** Form → Map embed → NAP + business hours (IST + client time zones) → WhatsApp/Call/Email buttons → Social links.
- **Schema:** LocalBusiness, ContactPoint.

---

# PHASE 8 — DESIGN SYSTEM

## 8.1 Brand Colors (proposed premium palette)
| Role | Color | Hex |
|---|---|---|
| Primary (Deep Luxury) | Midnight Navy | `#0B1D2E` |
| Secondary (Gold Accent — jewelry cue) | Champagne Gold | `#C9A24B` |
| Accent (CTA) | Warm Amber | `#E0A93A` |
| Neutral Dark | Charcoal | `#1F2328` |
| Neutral Light | Off-White | `#F8F6F2` |
| Success/Trust | Emerald | `#1E7F5C` |
| Error | Ruby Red | `#B23A48` |

## 8.2 Typography
- Headings: A refined serif or high-contrast sans (e.g., "Fraunces" or "Playfair Display" for luxury cue) — weight 600–700.
- Body: Clean geometric sans (e.g., "Inter" or "Manrope") for readability and speed.
- Scale: 14/16/18/24/32/40/56px modular scale, 1.5 line-height body.

## 8.3 Spacing & Grid
- 8px base spacing unit; 12-column responsive grid; max content width 1280px; section vertical rhythm 80–120px desktop / 48–64px mobile.

## 8.4 Components
- **Cards:** Rounded 12px corners, subtle shadow, gold-accent top border on hover.
- **Buttons:** Primary (filled gold/amber, navy text), Secondary (outline navy), WhatsApp CTA (distinct green, icon+label).
- **Forms:** Floating labels, inline validation, 8px rounded inputs, generous touch targets (≥44px).
- **Animations:** Subtle fade/slide-up on scroll (Framer Motion), before/after drag slider, count-up stat animation (real numbers only), micro-interactions on hover (card lift, button scale 1.03).
- **Shadows:** Soft, low-opacity (`0 8px 24px rgba(11,29,46,0.08)`).
- **Icons:** Consistent line-icon set (Lucide/Phosphor), gold accent on hover.
- **Photography Style:** High-contrast studio macro shots of jewelry against neutral backgrounds; consistent color grading; real before/after pairs (no stock jewelry photos).
- **Illustration Style:** Minimal line-art accents only where photography isn't available (e.g., process timeline icons).
- **Dark Mode:** Optional v2 — navy-based dark theme reusing same gold accent for contrast.
- **Breakpoints:** 360 / 768 / 1024 / 1280 / 1536px.

---

# PHASE 9 — TECH STACK

**Frontend:** Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS · Framer Motion · shadcn/ui components

**Backend/API:** Next.js API routes (or a thin Node.js/Express service) for form handling, file upload, calculator logic

**CMS:** Sanity.io (preferred for structured content + image pipeline) — alternative: Strapi (self-hosted, if client wants full data ownership)

**Image/Media CDN:** Cloudinary (auto WebP/AVIF, responsive transforms, video hosting for 360° samples)

**Hosting/Deployment:** Vercel (edge network, ISR, preview deployments)

**Forms/Lead Ops:** Formspree/Resend (email) + optional CRM webhook (HubSpot/Zoho/Google Sheets via Make.com)

**Analytics/Tracking:** GA4, Google Search Console, Microsoft Clarity, Google Tag Manager

**Search/Filtering (Gallery/Blog):** Client-side filtering (small dataset) or Algolia if catalog scales

**Security:** Cloudflare (DNS/CDN/WAF) in front of Vercel, reCAPTCHA v3, HSTS

**Caching/Performance:** Vercel Edge Cache + ISR (revalidate on CMS webhook), Cloudinary CDN caching

**SEO Tooling:** next-seo / native Metadata API, next-sitemap, schema-dts for typed JSON-LD

---

# PHASE 10 — ROADMAP & PRIORITY MATRIX

## 10.1 Priority Matrix
| Priority | Items |
|---|---|
| **P0 – Critical (Launch Blockers)** | Fix broken stat counters, unique titles/meta per page, clean URL slugs (remove "-2"), 301 redirect map, LocalBusiness+Organization schema, mobile performance rebuild, working lead form |
| **P1 – High (Launch-Ready)** | Service page content depth (800+ words), before/after gallery slider, testimonials + case studies, pricing calculator, FAQ schema, blog taxonomy |
| **P2 – Medium (Post-Launch, 30-60 days)** | Industry pages, client logo carousel, newsletter automation, live chat, Calendly booking |
| **P3 – Future** | Client portal, multi-language, AI preview tool, subscription pricing tier |

## 10.2 Delivery Roadmap
```
Week 1-2   Discovery finalize, IA sign-off, content collection (real stats, images, testimonials)
Week 3-4   Design system + high-fidelity UI (Home, Service template, Pricing, Gallery)
Week 5-7   Frontend build (Next.js) + CMS schema setup + content population
Week 8     Forms/integrations (WhatsApp, email, GA4, GTM, CRM webhook)
Week 9     SEO implementation (schema, sitemap, redirects), accessibility pass
Week 10    QA (Testing Checklist), staging review, client UAT
Week 11    Launch (DNS cutover, redirect verification, GSC/GA4 verification)
Week 12+   Post-launch monitoring, content cadence (2 blog posts/month), iteration
```

## 10.3 Architecture Diagram (ASCII)
```
                 ┌─────────────────────┐
                 │   Cloudflare (WAF/   │
                 │   DNS/CDN)           │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │   Vercel Edge Network │
                 │  Next.js (SSR/ISR)    │
                 └───┬───────────────┬───┘
                     │               │
        ┌────────────▼──┐      ┌─────▼───────────┐
        │ Sanity CMS API │      │ API Routes       │
        │ (content)      │      │ (forms/upload/   │
        └────────────────┘      │  calculator)      │
                                 └─────┬─────────────┘
                                       │
                        ┌──────────────┼───────────────┐
                        │              │               │
                 ┌──────▼───┐  ┌───────▼──────┐ ┌──────▼──────┐
                 │ Cloudinary│  │ Email(Resend)│ │ CRM Webhook │
                 │ (media)   │  │              │ │ (HubSpot/   │
                 └───────────┘  └──────────────┘ │ Sheets)     │
                                                  └─────────────┘
```

---

# APPENDIX — KEY FINDINGS SUMMARY (Executive Snapshot)
1. Site runs on WordPress/Elementor with performance, duplication, and broken-widget issues (stat counters show "0+").
2. SEO fundamentals are broken: titles read "HOME -"/"ABOUT -", meta descriptions are duplicated/truncated, no schema markup anywhere.
3. No testimonials, case studies, client logos, or E-E-A-T signals — a major trust gap for a 17-year-old company.
4. Single-channel conversion (WhatsApp only) limits lead capture and attribution.
5. Strong underlying business fundamentals (real niche expertise, global client base, tiered pricing) — the opportunity is entirely in **execution, structure, and trust-building**, not in reinventing the service offering.
6. Recommended path: full rebuild on Next.js + Sanity + Vercel + Cloudinary, with the IA, design system, and content specs defined above, delivered over an ~11-week roadmap.