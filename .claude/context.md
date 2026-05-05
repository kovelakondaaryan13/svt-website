# context.md — Svayantra Tech Website Structure & Architecture

## Overview
Single-page website. Smooth scroll. Sticky nav. All sections on one page.
Built in plain HTML + CSS + vanilla JS. No frameworks. No build tools.
Deployed on Vercel. File: index.html

---

## Section Order (strict — do not reorder)

1. NAV
2. HERO
3. PROBLEM
4. WHAT WE DO
5. PRODUCTS
6. RESULTS
7. MISSION & VISION
8. FOUNDER
9. CONTACT
10. FOOTER

---

## Section Architecture

### 1. NAV
- Tag: <nav>
- Position: fixed top · full width · z-index 100
- Height: 64px desktop · 56px mobile
- Background: white · border-bottom 1px #E5E7EB
- On scroll past 10px: add subtle box shadow
- Layout: flex · space-between · align-items center · max-width 1100px · centered
- Left: logo image (/logo.png) · links to #home
- Center: anchor links — About · Products · Results · Mission · Founder · Contact
- Right: single CTA button — "Talk to us" → scrolls to #contact
- Active nav link highlights on scroll using IntersectionObserver
- Mobile: hide center links and CTA · show hamburger
  - On click: full width overlay with stacked links and full width CTA at bottom
  - Clicking any link closes the overlay

### 2. HERO
- Tag: <section id="home">
- Layout: centered · max-width 800px · text-align center
- Elements (top to bottom):
  - Small eyebrow label
  - H1 headline
  - Two-line subheadline paragraph
  - Two CTA buttons side by side
  - Three stat pills in a row — metric + label each

### 3. PROBLEM
- Tag: <section id="about">
- Background: #F4F6FF off-white · full width
- Layout: centered · max-width 720px · text-align center
- Elements (top to bottom):
  - Section label pill — "The Problem"
  - H2 — "The owner is the operating system"
  - Three short paragraphs (warm, direct, no jargon)
  - No images · No cards · Pure text only
- Mobile: same layout, tighter padding

### 4. WHAT WE DO
- Tag: <section id="how">
- Background: white · full width
- Layout: max-width 1100px centered
- Top: centered section label pill — "What We Do"
- Top: centered H2 — "We add intelligence where your ERP stops"
- Two-column layout below heading · gap 64px · desktop only · single column mobile
- Left column:
  - Subheading H3 — "The SVT Approach"
  - Two short paragraphs — connect existing tools, add intelligence, no migration, value in weeks
  - Three step list — Enter · Embed · Become — bold label + one-line description each
- Right column:
  - Three stacked cards — Enter · Embed · Become
  - Each card: step number · label · one line · Electric Blue left border accent
- Below columns: full width Synapse callout box
  - Navy #0F2D6B background · white text · border-radius 16px · padding 32px
  - Left: "Powered by Synapse" label + one-line description
  - Right: "The Brain" badge
- Mobile: columns stack · Synapse box stacks internally

### 5. PRODUCTS
- Tag: <section id="products">
- Background: #F4F6FF · full width
- Layout: max-width 1100px centered
- Top: centered section label pill — "Our Products"
- Top: centered H2 — "Built for the problems we kept seeing"
- Top: centered subline — warm one-liner about verticalising real client problems
- 2x2 grid desktop · single column mobile · gap 24px
- Four product cards — same height · same padding · same border
  - Each card: product name H3 + status badge inline · one-line description · "Built for" + audience
  - Card 1: Yantra · Live · Factory ops intelligence for Indian MSMEs · Factory owners
  - Card 2: Pulse · Live · WhatsApp-native patient engagement OS · Clinic owners
  - Card 3: Helm · Live · Autonomous ops for agencies and startups · Agency founders
  - Card 4: CAOS · Coming Soon · Pre-analysis automation for CA firms · CA firms
- Live badge: Electric Blue tint bg + Electric Blue text
- Coming Soon badge: gray tint bg + gray text
- Card hover: lift + subtle Electric Blue border glow
- Below grid: centered line — "Every product is built from a real client problem. Not the other way around."
- Mobile: single column stack

### 6. RESULTS
- Tag: <section id="results">
- Background: white · full width
- Layout: max-width 1100px centered
- Top: centered section label pill — "Real Results"
- Top: centered H2 — "Numbers from real clients. Not estimates."
- Top: centered subline — warm one-liner about proof over promises
- 2x2 grid desktop · single column mobile · gap 24px
- Four result cards — same height · same padding · same border
  - Each card: client name + industry tag pill inline · big Bebas Neue number · one-line context
  - Card 1: Sarvoday Textiles · Manufacturing · 97% · reduction in reporting time
  - Card 2: Lyndoc · Healthcare · 30→76% · enquiry conversion rate
  - Card 3: Czech Textile Factory · Manufacturing · Weeks→Hours · order placement time
  - Card 4: Gladful · D2C · 0 · manual reports compiled
- Card hover: lift + subtle shadow
- Industry tag: Electric Blue tint bg + Electric Blue text pill
- Below grid: three centered stat pills — "$5K MRR" · "3 Countries" · "45 Days"
  - Each: white bg · Electric Blue border · navy text
- Mobile: single column · pills wrap

### 7. MISSION & VISION
- Tag: <section id="mission">
- Background: #F4F6FF · full width
- Layout: max-width 1100px centered
- Top: centered section label pill — "Why We Exist"
- Top: centered H2 — "Built for India. Built for the owner."
- Two cards side by side desktop · single column mobile · gap 24px
- Left card — Mission:
  - Label: "Mission" · H3: "Automate the Indian MSME landscape"
  - One sentence about one factory at a time until owners focus on growth not survival
  - Left border accent: Cyan #38B6D8 · 4px
- Right card — Vision:
  - Label: "Vision" · H3: "An India where the factory runs itself"
  - One sentence about the system stepping up so the owner drives growth
  - Left border accent: Electric Blue #6366F1 · 4px
- Both cards: white bg · same height · same padding · border accent left only
- Below cards: centered pull quote italic navy max-width 600px
  - "Svayantra is Sanskrit for self-operating machine. That is not a tagline. That is the entire plan."
- Mobile: single column stack

### 8. FOUNDER
- Tag: <section id="founder">
- Background: white · full width
- Layout: max-width 1100px centered · two-column desktop · single column mobile
- Left: founder photo (founder_picture.jpeg) — circular crop · 200px diameter
- Right:
  - Section label pill — "Founder"
  - H2: "Aryan Kovelakonda"
  - Title: "Founder & CEO, Svayantra Tech" · Electric Blue color
  - Story paragraph — first person, warm, direct, founder-led
  - Three stat pills inline: ₹80L+ LTS · 7 Ventures · 18 Years Old
  - Each pill: white bg · Electric Blue border · navy bold number · gray label
- Mobile: photo centered above text · stats wrap

### 9. CONTACT
- Tag: <section id="contact">
- Background: #F4F6FF · full width
- Layout: centered · max-width 640px
- Top: section label pill — "Get in Touch"
- Top: H2 — "Let's Talk"
- Top: subline — "Tell us what's eating your time. We'll tell you what we can automate."
- Two CTA buttons side by side: "Book a Call" (primary, Google Calendar) · "Call Us" (secondary, tel link)
- Form: Full Name · Company · Email · Message · Submit button (full width navy)
- Form submission via Supabase REST API (table: svt_leads)
- On success: inline confirmation · On error: inline error message
- Below form: contact links — email · phone · Instagram
- Email: svayantra.tech@gmail.com
- Phone: +91 6300163667
- Instagram: @svayantra.tech
- Calendar: calendar.app.google/e1jfC52rQja9pCtR8

### 10. FOOTER
- Tag: <footer>
- Background: navy #0F2D6B · full width · white text
- Layout: three-column desktop · single column mobile · max-width 1100px centered
- Left: logo (svayantra-tech-logo-bgless.png) + tagline "The Self-Operating Machine"
- Center: label "Links" (small uppercase) · nav links stacked — About · Products · Results · Mission · Founder · Contact · hover cyan
- Right: label "Connect" (small uppercase) · email · phone · Instagram (SVG icon) · LinkedIn (SVG icon) · hover cyan
- Bottom bar: left "© 2026 Svayantra Tech. All rights reserved." · right "The Self-Operating Machine" · 12px · gray-white · 1px top border rgba(255,255,255,0.1)
- Mobile: columns stack · center aligned · bottom bar stacks

---

## Global Architecture Rules

### HTML structure
```
<html>
  <head> — fonts, meta, title, styles </head>
  <body>
    <nav>
    <main>
      <section id="home">   <!-- HERO -->
      <section id="about">  <!-- PROBLEM -->
      <section id="how">    <!-- WHAT WE DO -->
      <section id="products">
      <section id="results">
      <section id="mission">
      <section id="founder">
      <section id="contact">
    </main>
    <footer>
    <script> — JS last </script>
  </body>
</html>
```

### CSS rules
- All styles in one <style> block in <head>
- Mobile-first · breakpoint at 768px
- CSS custom properties at :root for all brand colors
- No external CSS libraries
- Smooth scroll: html { scroll-behavior: smooth }
- Section alternates: white · #F8F9FA · white · #F8F9FA

### JS rules
- One <script> block at end of body
- Only vanilla JS — no libraries
- Handles: nav hamburger toggle · active nav link on scroll · form validation

### Responsive breakpoints
- Mobile: < 768px — single column · 48px section padding
- Tablet: 768px–1100px — some two-column layouts collapse
- Desktop: > 1100px — full layout as specified above

### Accessibility
- All images have alt text
- Form inputs have labels
- Nav has aria-label="main navigation"
- Color contrast meets WCAG AA minimum

### Performance
- Google Fonts loaded with preconnect
- No unused CSS
- No external JS dependencies
- Images optimised before use
