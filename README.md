# Prince Sherathiya — Portfolio

Personal portfolio for Prince Sherathiya, software engineer and founder of [WebTurnerAI](https://webturnerai.tech). Built to showcase backend systems, workflow automation, practical AI tools, and full-stack product work.

---

## Overview

This is a production-grade Next.js portfolio. It is not a template. Every section reflects real work: an automation that cut an 8-hour process to 1 hour, hackathon-winning AI systems, full-stack platforms tested at scale, and an ongoing business building tools for real operations.

The site is designed to communicate who I am, what I build, and why it matters — directly and without noise.

---

## Engineering Focus

- **Backend systems** — REST APIs, data flows, server-side logic, and database design
- **Workflow automation** — Excel/Word macros, scripting, and process optimization
- **Operational dashboards** — tracking systems for visibility, performance, and control
- **Practical AI tools** — AI-assisted workflows, task management, and recommendation systems
- **Full-stack development** — React, Next.js, Firebase, Supabase, TypeScript

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, Vanilla CSS |
| Animation | Framer Motion |
| UI Components | Radix UI, ShadCN |
| Email | Resend |
| Database | Firebase Firestore |
| Hosting | Vercel |
| Fonts | Inter, JetBrains Mono |

---

## Site Structure

```
src/
├── app/
│   ├── api/contact/        # Resend email API route (server-side only)
│   ├── experience/[slug]/  # Dynamic experience detail pages
│   ├── explore/            # Full project and experience explorer
│   ├── project/[slug]/     # Dynamic project case study pages
│   ├── resume/             # Live resume page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Auto-generated robots.txt
├── components/
│   ├── sections/           # Hero, About, Skills, Services, Projects, Experience, Journey, Contact
│   ├── header.tsx          # Navigation with active section tracking
│   └── footer.tsx          # Brand footer
├── hooks/
│   └── use-active-section  # Intersection-based active nav detection
└── lib/
    └── data.ts             # All portfolio content and project data
```

---

## Key Features

**Navigation** — Active section tracking using IntersectionObserver with ratio scoring. Clicking a nav link instantly highlights the correct section without waiting for scroll completion.

**Contact form** — Server-side only. Uses Resend. Includes rate limiting, honeypot anti-spam, server-side input validation, and a styled HTML email. The API key is never exposed to the client.

**SEO** — Full Next.js Metadata API implementation: Open Graph, Twitter cards, JSON-LD structured data, canonical URL, auto-generated sitemap and robots.txt.

**Case studies** — Project pages render rich case study content from a typed data layer, with image grids, role-based screenshots, and structured problem/solution breakdowns.

**Design system** — One intentional design language throughout: dark background, gold/teal accent palette, consistent spacing, card treatment, and motion. No third-party UI themes.

---

## Local Development

**Prerequisites:** Node.js 18+, npm

```bash
# Clone the repository
git clone https://github.com/Aicodebyprince/prince-portfolio.git
cd prince-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:9002`.

---

## Environment Variables

Create a `.env.local` file at the project root. This file is gitignored and must never be committed.

```bash
# Required for the contact form (Resend)
RESEND_API_KEY=

# Email routing for contact form submissions
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

**`RESEND_API_KEY`** — Get this from [resend.com](https://resend.com). Required for the contact form API route to function.

**`CONTACT_TO_EMAIL`** — The inbox where contact form submissions are delivered.

**`CONTACT_FROM_EMAIL`** — The sender address. Use `onboarding@resend.dev` for testing without domain verification. For a custom domain sender, verify the domain in the Resend dashboard first.

---

## Deployment

The site is built for Vercel. No additional configuration is needed beyond setting the environment variables above in the Vercel project settings.

```bash
# Production build (local verification)
npm run build
```

The build generates static pages where possible and server-renders API routes on demand. Sitemap and robots.txt are generated automatically.

---

## WebTurnerAI

This portfolio is also the public face of [WebTurnerAI](https://webturnerai.tech), a founder-led software studio building:

- Operational dashboards for business visibility
- Workflow automation for internal processes
- Practical AI tools connected to real operations
- Backend systems and APIs for product teams

---

## Contact

**Prince Sherathiya**  
Software Engineer · Founder, WebTurnerAI

- Email: [princesher321@gmail.com](mailto:princesher321@gmail.com)
- LinkedIn: [linkedin.com/in/princesherathiya](https://www.linkedin.com/in/princesherathiya/)
- GitHub: [github.com/Aicodebyprince](https://github.com/Aicodebyprince)
- WebTurnerAI: [webturnerai.tech](https://webturnerai.tech)
