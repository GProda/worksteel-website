# Work Steel — Official Website

**worksteel.al** — Premium custom steel fabrication workshop based in Tirana, Albania. Founded 2018.

---

## What This Is

A single-page, multi-language (Albanian / English) marketing website for Work Steel SHPK — a bespoke metalwork studio specializing in custom staircases, railings, doors, structural steel, and interior metalwork.

Built with pure HTML, external CSS (`style.css`), and external JS (`main.js`). No framework, no build step, no dependencies — just ship it.

---

## Stack

- **Pure HTML/CSS/JS** — zero dependencies, zero build process
- **Fonts** — Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Analytics** — Google Tag Manager + GA4 + Meta Pixel (GDPR consent-gated)
- **SEO** — JSON-LD structured data (LocalBusiness, FAQPage, BreadcrumbList), hreflang, Open Graph, Twitter Card
- **Hosting** — Cloudflare Pages (connected to GitHub, auto-deploys on push to `main`)
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

## Running Locally

This is a static site — no install, no build. You just need a local web server so the browser can load `style.css` and `main.js` correctly (opening `index.html` directly as a file won't work with absolute asset paths like `/style.css`).

**Option A — Node.js (recommended, one-time setup)**

1. Make sure Node.js is installed → [nodejs.org](https://nodejs.org)
2. Open a terminal in the project folder
3. Run:
   ```bash
   npx serve .
   ```
4. Open the URL shown in the terminal (usually `http://localhost:3000`)

**Option B — Python (no install needed if Python is already on your machine)**

```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`

**Option C — VS Code Live Server extension**

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

> The contact form (Web3Forms) will not send emails when running locally — this only works on the live domain.

---

## Project Structure

```
worksteel-deploy/
├── index.html              # Site HTML
├── style.css               # All site styles (extracted for caching)
├── main.js                 # All site JavaScript (extracted for caching)
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

Hosted on **Cloudflare Pages**. Push to `main` → auto-deploy via GitHub integration.

Domain `worksteel.al` is registered on Netim with nameservers pointing to Cloudflare.

---

## Contact

**Work Steel SHPK** · Tiranë, Albania  
Phone: +355 68 903 0944  
Email: worksteel.shpk@gmail.com  
Instagram: [@work_steel_shpk](https://www.instagram.com/work_steel_shpk/)
