# Architecture

## 🧠 Objective
Create a clean, scalable architecture where content management is separated from frontend presentation, while keeping the website fast, SEO-friendly, and easy to maintain.

---

## High-Level Architecture
Frontend (Astro)
↓
Content Layer (Sanity CMS)
↓
End User

---

## Data Flow
Sanity CMS
→ content queried through API
→ Astro fetches data at build time
→ pages are generated
→ final user receives fast fast static pages

### Flow summary
Sanity → API → Astro → User

---

## Responsibilities by Layer

### 1. Astro (Frontend Layer)
Responsible for:
- page rendering
- layout structure
- reusable UI components
- SEO metadata
- routing
- performance optimization

Astro should contain:
- pages
- layouts
- components
- utility functions
- content queries
- styles

---

### 2. Sanity (Content Layer)
Responsible for:
- property content
- blog posts
- area pages
- service page content
- reusable CMS-managed content blocks

Sanity should manage content, not presentation.

---

### 3. User Layer
The final user interacts with:
- fast pages
- property listings
- forms
- WhatsApp contact
- calls to action

---

## Content Types Required
The architecture must support at least:
- Properties
- Areas
- Blog posts
- Services
- Testimonials
- Static pages (optional)
- SEO fields

---

## Page Types

### Static Pages
Pages that change rarely:
- Home
- About
- Contact
- Sell Property
- PVC Windows
- Legal pages

### Dynamic / CMS-Driven Pages
Pages generated from Sanity content:
- Property listings
- Individual property pages
- Area pages
- Blog posts

---

## Rendering Strategy

### Static-first
Use Astro's static generation by default.
Why:
- better performance
- better SEO
- lower complexity

### Dynamic behavior only where necessary
Use client-side JavaScript only for:
- filters
- interactive forms
- WhatsApp interactions
- small UI enhancements

---

## Suggested Frontend Structure
src/
  components/
  layouts/
  pages/
  styles/
  lib/
  utils/
  data/

### Notes
- components/ → reusable UI blocks
- layouts/ → page shells
- pages/ → route-based pages
- lib/ → Sanity queries, integrations
- utils/ → helpers and formatting
- styles/ → global styles if needed
- data/ → fallback/static content if needed

---

## Separation of Concerns

### Frontend should NOT:
- hardcode changing business content unnecessarily
- mix CMS logic inside UI components
- overload pages with logic

### CMS should NOT:
- control visual design
- duplicate presentation rules
- become a replacement for frontend structure

---

## Advantages of this Architecture
- High performance
- Clear separation between content and presentation
- Easy to scale
- Better SEO
- Easier maintenance
- Faster future updates

---

## Scalability Rules
The architecture must allow:
- adding more towns/areas
- adding more properties easily
- expanding blog content
- adding future services
- integrating forms/CRM later

---

## Technical Rules
- Keep Astro as the presentation layer
- Keep Sanity as the content source
- Use modular components
- Keep data queries centralized
- Avoid duplicating logic across pages

---

## Final Principle
This architecture should support a website that feels simple to the user, but is structured professionally underneath for speed, SEO, and future growth.
