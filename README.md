# BeforeYouGo

**Know what you need before you go.**

BeforeYouGo is a privacy-first web app for turning pre-visit preparation into clear, practical checklists. It helps people prepare documents, appointments, questions, and other tasks before visiting a service or travelling.

**Live site:** https://beforeyougo-gray.vercel.app/

## Why BeforeYouGo?

People often discover requirements only after they arrive: a missing document, an appointment they did not know they needed, an unavailable service, or an outdated instruction.

BeforeYouGo is designed around one simple idea:

> **Prepare first. Go once.**

The product focuses on actionable preparation while keeping authoritative-source links visible so users can verify requirements before they leave home.

## Features

- **Service guides** — practical preparation information organized by service and category.
- **Interactive checklists** — turn preparation into individual, actionable tasks.
- **Unlimited private checklists** — create as many independent checklists as needed.
- **Per-checklist state** — each checklist has its own items, progress, timestamps, and lifecycle.
- **Create, edit, duplicate, and delete** — full checklist management rather than a static template.
- **Completion experience** — clear progress feedback and a completion celebration when every item is finished.
- **Private browser workspace** — checklist data is stored locally in the user's browser for the current MVP; there is no shared checklist database or public checklist feed.
- **Official-source-first guidance** — guides link users to authoritative sources and encourage verification because real-world requirements can change.
- **Responsive experience** — designed for mobile, tablet, and desktop.
- **Accessibility-minded UI** — semantic controls, clear states, keyboard-friendly interactions, and reduced-motion support where appropriate.
- **SEO foundations** — metadata, canonical URL, robots.txt, sitemap.xml, and Google Search Console verification support.

## Privacy model

BeforeYouGo currently uses a **local-first, no-account architecture** for personal checklists.

A browser profile has its own private workspace and local checklist data. Opening the site in another browser profile creates a separate local storage context, so one browser's checklist data is not presented as a shared global dataset.

This is intentionally different from an account-based cloud-sync product. Clearing browser storage or changing devices can remove access to locally stored checklists. Cloud synchronization and authentication are not claimed or simulated in this MVP.

## Trust and data accuracy

BeforeYouGo does not treat guesses, community comments, or generated requirements as authoritative facts. Where a guide depends on external requirements, users are directed to the relevant official source and encouraged to confirm the current rules before acting.

Requirements for government services, travel, appointments, documents, and other real-world services can change. Always verify time-sensitive requirements with the responsible organization.

## Technology

- **Next.js** — App Router
- **React**
- **TypeScript**
- **CSS**
- **Vercel** — production deployment
- **GitHub** — source control and deployment integration

The current checklist MVP does **not** require Supabase, authentication, or a server-side database. Those technologies should only be introduced when a real product requirement—such as accounts, cross-device sync, or shared server-side data—justifies them.

## Project structure

```text
app/
  guide/          Service guide routes
  my-checklist/   Private checklist experience
  robots.ts       Search-engine crawling rules
  sitemap.ts      Dynamic sitemap generation
  layout.tsx      Global metadata and site shell

lib/
  guides/         Guide data and service information
```

## Local development

### Requirements

- Node.js
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production build

```bash
npm run build
```

### Production server

```bash
npm run start
```

## SEO

The production application includes:

- descriptive page metadata
- canonical URL configuration
- Open Graph metadata
- crawler directives
- `robots.txt`
- dynamically generated `sitemap.xml`
- Google Search Console verification metadata

Search engines decide independently whether and when eligible pages are indexed. The sitemap helps crawlers discover public pages; it does not guarantee search placement or indexing.

## Deployment

The `main` branch is connected to the production Vercel deployment. Changes pushed to `main` can trigger a new production deployment.

Before treating a release as production-ready, run the production build and verify the important checklist flows in a real browser.

## Product principles

1. **Real over decorative** — controls should perform the action they claim to perform.
2. **Private by default** — personal checklist data should not become a shared public feed.
3. **Official over assumed** — external requirements should be verified against authoritative sources.
4. **Simple over bloated** — reliable core workflows are more valuable than a large number of unfinished features.
5. **Accessible to everyone** — the experience should work across devices and interaction methods.

## Creator

Created by **Koglesh R. Murugan**.

---

BeforeYouGo is an independent project built to make everyday preparation less stressful, more organized, and easier to verify.
