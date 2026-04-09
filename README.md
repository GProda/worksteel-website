# Work Steel — Official Website

**worksteel.al** — Premium custom steel fabrication workshop based in Tirana, Albania. Founded 2018.

---

## What This Is

A single-page, multi-language (Albanian / English) marketing website for Work Steel SHPK — a bespoke metalwork studio specializing in custom staircases, railings, doors, structural steel, and interior metalwork.

Built as a single `index.html` with all CSS and JavaScript inline. No framework, no build step, no dependencies — just ship it.

---

## Stack

- **Pure HTML/CSS/JS** — zero dependencies, zero build process
- **Fonts** — Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Analytics** — Google Tag Manager + GA4 + Meta Pixel (GDPR consent-gated)
- **SEO** — JSON-LD structured data (LocalBusiness, FAQPage, BreadcrumbList), hreflang, Open Graph, Twitter Card
- **Hosting** — Netlify (via `_headers` and `_redirects` config)
- **PWA** — `site.webmanifest` + favicons for installability

---

## Pages / Sections

| Page | Description |
|------|-------------|
| Home | Hero with brand statement + CTA |
| Services | Steel staircases, railings, doors, structural, artistic metalwork |
| Portfolio | Photo gallery split by category (Architecture & Structure / Objects) |
| About | Brand story, founding year, values |
| Contact | WhatsApp + email CTA, location |
| Privacy | GDPR-compliant privacy policy |

---

## Project Structure

```
worksteel-deploy/
├── index.html              # Entire site — HTML, CSS, JS all inline
├── privacy.html            # Privacy policy page
├── og-image.jpg            # Open Graph share image (1200×630)
├── favicon.svg / .png      # Favicons
├── apple-touch-icon.png    # iOS home screen icon
├── site.webmanifest        # PWA manifest
├── _headers                # Netlify HTTP headers (security, caching)
├── _redirects              # Netlify redirect rules
└── Work-Steel-Website-photos/  # Source photo assets
    ├── Architecture and Structure/
    ├── Objects/
    └── working/
```

---

## Deployment

Hosted on **Netlify**. Push to `main` → auto-deploy (if connected).

Manual deploy: drag the entire `worksteel-deploy/` folder into the Netlify dashboard.

---

## Contact

**Work Steel SHPK** · Tiranë, Albania  
Phone: +355 68 903 0944  
Email: worksteel.shpk@gmail.com  
Instagram: [@work_steel_shpk](https://www.instagram.com/work_steel_shpk/)
