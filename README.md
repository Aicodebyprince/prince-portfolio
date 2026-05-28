<p align="center">
  <a href="https://princebuilds.vercel.app/" target="_blank">
  </a>
</p>

<h1 align="center">
  Prince Sherathiya — Portfolio
</h1>

<p align="center">
  <strong>Software Engineer · Founder @ WebTurnerAI</strong>
  <br/>
  Backend systems · Workflow automation · Operational dashboards · Practical AI tools
</p>

<p align="center">
  <a href="https://princebuilds.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Site-princebuilds.vercel.app-10B981?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site"/>
  </a>
  <a href="https://www.linkedin.com/in/princesherathiya/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/Aicodebyprince" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://webturnerai.tech/" target="_blank">
    <img src="https://img.shields.io/badge/WebTurnerAI-8B5CF6?style=for-the-badge&logo=lightning&logoColor=white" alt="WebTurnerAI"/>
  </a>
  <br/>
  <img src="https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white" alt="Resend"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/license-MIT-8B5CF6?style=for-the-badge" alt="License"/>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-site-structure">Site Structure</a> •
  <a href="#%EF%B8%8F-sections">Sections</a> •
  <a href="#-featured-projects">Projects</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-deployment">Deployment</a>
</p>

<br/>

---

## 📋 Overview

This is **Prince Sherathiya's personal portfolio** — a production-grade **Next.js 15** application that serves as the public face of both his engineering work and his venture, **WebTurnerAI**. Every section reflects real, battle-tested work: automation that reduced an 8-hour process to 1 hour, hackathon-winning AI systems, full-stack platforms tested under heavy load, and an ongoing business building tools for real operations.

The site is designed to communicate **who I am, what I build, and why it matters** — directly and without noise.

> **Live site:** [princebuilds.vercel.app](https://princebuilds.vercel.app/)  
> **Business:** [WebTurnerAI](https://webturnerai.tech/)

### 🎯 Purpose

| Audience | What They See |
|----------|---------------|
| **Recruiters** | Engineering depth — clean architecture, typed data layers, production-ready code, SEO, accessibility |
| **Clients** | Proven delivery — case studies with measurable outcomes, workflow automation results |
| **Founders / Peers** | Founder-engineer mindset — building practical products, not just writing code |

<br/>

---

## 🏗️ Site Structure

```
princebuilds.vercel.app/
│
├── /                           # Home — single-page experience with 8 sections
├── /explore                    # Full explorer with tabbed browsing (projects, services, experience, journey)
├── /project/[slug]             # Deep-dive case studies for each project
├── /experience/[slug]          # Detailed experience pages
├── /resume                     # Live, interactive resume page
└── /api/contact                # Server-side contact form endpoint (Resend)
```

### 🧭 Navigation System

The site uses an **IntersectionObserver-based active section tracking** system with ratio scoring. Clicking a nav link instantly highlights the correct section without waiting for scroll completion. The header is sticky with a backdrop blur effect and shows the current active section at all times.

<br/>

---

## 🎨 Sections

The home page is a single-page experience composed of **8 distinct sections**, each with its own visual treatment and animation sequence.

### 1. Hero — The Hook

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/p1.png" width="92%" alt="Portfolio visual 1"/>
</p>

The hero section introduces **Prince Sherathiya** with a bold, three-line headline:
- **Backend systems.**
- **Workflow automation.**
- **Practical AI tools.**

It features:
- A **profile portrait** (`/images/Prince sherathiya.png`) with animated orbital rings, scan lines, and a cyberpunk-style grid overlay
- **Social proof metrics** — "8h → 1h workflow reduced," "13K+ realtime operations," "2+ Hackathon wins"
- **Three CTAs** — View Work, Live Resume, Experience
- A **parallax spotlight effect** that follows the mouse cursor
- Background mesh gradient with noise overlay

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/p1.png" width="32%" alt="Portfolio visual 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P2.png" width="32%" alt="Portfolio visual 2"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P3.png" width="32%" alt="Portfolio visual 3"/>
</p>

### 2. About — The Story

A clean about section explaining the founder-engineer journey — backend-first engineering, workflow automation that delivers measurable savings, and practical AI products built for real operations.

### 3. Skills — Measured Competence

| Category | Skills | Proficiency |
|----------|--------|-------------|
| **Backend** | REST APIs, Python, Java, SQL | 82–88% |
| **Automation** | Workflow automation, Excel/Word macros, Process optimization | 85–90% |
| **Full-Stack** | React, Next.js, TypeScript, Firebase, Supabase | 82–86% |
| **AI** | AI Integration, Genkit, Gemini, Prompt Engineering | 82–90% |

Each skill is rendered with an animated progress bar using Framer Motion.

### 4. Services — What I Build

| Service | Description |
|---------|-------------|
| **Backend Systems & APIs** | REST API design, authentication, databases, server-side logic |
| **Workflow Automation** | Excel/Word macros, scripting, process automation for measurable time savings |
| **AI-Powered Internal Tools** | Task managers, AI-assisted search, recommendation systems powered by Genkit & Gemini |
| **Operational Dashboards** | Client tracking, performance visibility, workflow status monitoring |

### 5. Projects — The Work

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P4.png" width="32%" alt="Portfolio visual 4"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P5.png" width="32%" alt="Portfolio visual 5"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P6.png" width="32%" alt="Portfolio visual 6"/>
</p>

Seven featured projects with deep case studies. Each project opens to a full-page case study with screenshots organized by user role (visitors, students, teachers, admins). See the [Featured Projects](#-featured-projects) section below for details.

### 6. Experience — Proven Track Record

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Experience/Kudos%201.png" width="45%" alt="Kudos recognition 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Experience/Kudos%202.png" width="45%" alt="Kudos recognition 2"/>
</p>

Dynamic experience pages with kudos/recognition screenshots, detailed role descriptions, and achievement tracking.

### 7. Journey — The Path

An interactive timeline showing the professional and educational journey — from RMC College (BSc IT, 2022–2025) to founding WebTurnerAI.

### 8. Contact — Let's Talk

Server-side contact form powered by **Resend** with:
- Rate limiting to prevent abuse
- Honeypot anti-spam field (invisible to real users)
- Server-side input validation using Zod
- Styled HTML email delivery
- Toast notifications for success/error feedback
- The API key is **never exposed to the client**

<br/>

---

## 🚀 Featured Projects

Every project in the portfolio has a full **case study page** at `/project/[slug]` with rich content blocks: headings with icons, paragraphs, feature lists, image grids organized by user role, and structured problem/solution breakdowns.

### 1. Aura AI — Task Co-Pilot

| | |
|---|---|
| **Category** | AI / Full-Stack |
| **Stack** | Genkit, Gemini, Next.js, Firebase, Tailwind |
| **Live** | [aurataskmanager.vercel.app](https://aurataskmanager.vercel.app/) |

An intelligent task management application that transforms student and teacher workflows into a collaborative partnership with AI. Features a conversational AI assistant powered by Google's Gemini model for natural language task management.

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Aura%20AI/Landing%20Page.png" width="32%" alt="Aura AI Landing Page"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Aura%20AI/Dashborad.png" width="32%" alt="Aura AI Dashboard"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Aura%20AI/Calendar.png" width="32%" alt="Aura AI Calendar"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Aura%20AI/Analytics.png" width="49%" alt="Aura AI Analytics"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Aura%20AI/AI%20Features.png" width="49%" alt="Aura AI Features"/>
</p>

### 2. Helpful Vault

| | |
|---|---|
| **Category** | Productivity Tool |
| **Stack** | Next.js, Firebase, ShadCN UI |
| **Live** | [helpfulvault.vercel.app](https://helpfulvault.vercel.app/) |

A personal productivity app designed as a single, reliable, and secure space for all your digital items — passwords, notes, schedules, and more.

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Helpful%20vault/1.png" width="32%" alt="Helpful Vault 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Helpful%20vault/2.png" width="32%" alt="Helpful Vault 2"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Helpful%20vault/3.png" width="32%" alt="Helpful Vault 3"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Helpful%20vault/4.png" width="49%" alt="Helpful Vault 4"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Helpful%20vault/5.png" width="49%" alt="Helpful Vault 5"/>
</p>

### 3. Chatbot Application

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%201.png" width="32%" alt="Chatbot SS 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%202.png" width="32%" alt="Chatbot SS 2"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%203.png" width="32%" alt="Chatbot SS 3"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%204.png" width="32%" alt="Chatbot SS 4"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%205.png" width="32%" alt="Chatbot SS 5"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Chatbot/SS%206.png" width="32%" alt="Chatbot SS 6"/>
</p>

### 4. EcoReward

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%201.png" width="32%" alt="EcoReward 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%202.png" width="32%" alt="EcoReward 2"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%203.png" width="32%" alt="EcoReward 3"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%204.png" width="32%" alt="EcoReward 4"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%205.png" width="32%" alt="EcoReward 5"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/ecoreward/Eco%206.png" width="32%" alt="EcoReward 6"/>
</p>

### 5. Additional Projects

The portfolio also features case studies for **Codepilot**, **CMMI Navigator (PPTAutomation)**, and **WordWise Chrome Extension** — each with dedicated deep-dive pages at `/project/[slug]`.

<br/>

---

## ✨ Key Features

### 🎯 Navigation & UX
- **IntersectionObserver-based active section tracking** with ratio scoring for instant nav highlighting
- **Sticky header** with backdrop blur and dynamic active state
- **Page transition animations** via custom `TransitionProvider` context
- **Scroll progress bar** at the top of the page
- **Smooth scroll** between sections with Framer Motion

### 🧠 Contact System
- **Server-side only** — API route at `/api/contact`
- **Rate limiting** to prevent spam
- **Honeypot field** — invisible to real users, catches bots
- **Zod validation** on the server for all inputs
- **Styled HTML emails** via Resend
- **Toast notifications** for user feedback
- API key **never exposed to the client**

### 🔍 SEO & Discovery
- **Full Next.js Metadata API** — Open Graph, Twitter cards, JSON-LD structured data
- **Auto-generated sitemap** (`/sitemap.ts`)
- **Auto-generated robots.txt** (`/robots.ts`)
- **Canonical URL** configuration
- **Semantic HTML** with proper heading hierarchy
- **Structured data** for Google Knowledge Graph (Person schema with `sameAs`, `knowsAbout`, `worksFor`)

### 🎨 Visual & Animation
- **3D card effects** via custom `card-3d.tsx` component
- **Circular carousel** for project showcases
- **Hyperspeed background** effect using Three.js postprocessing
- **Custom transition screen** between page navigations
- **Animated background** with gradient mesh and noise overlay
- **Framer Motion** entrance animations for every section
- **Radix UI primitives** for accessible components (Dialog, Tabs, Accordion, Tooltip, Toast, etc.)

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Touch-friendly navigation
- Optimized image loading with Next.js `next/image`
- System font stack (Inter + JetBrains Mono)

<br/>

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.3.8 | App Router, React Server Components, API Routes |
| [React](https://react.dev/) | 19.2.6 | UI component architecture |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety and developer experience |

### Styling & UI

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework with custom design system |
| [Framer Motion](https://www.framer.com/motion/) | Declarative animations and page transitions |
| [Radix UI](https://www.radix-ui.com/) | Accessible, unstyled UI primitives (Dialog, Tabs, Accordion, Select, Toast, Tooltip, Avatar, etc.) |
| [ShadCN UI](https://ui.shadcn.com/) | Component system built on Radix + Tailwind |
| [Lucide React](https://lucide.dev/) | Consistent icon system |

### 3D & Visual Effects

| Technology | Purpose |
|------------|---------|
| [Three.js](https://threejs.org/) | 3D rendering for hyperspeed background |
| [postprocessing](https://github.com/pmndrs/postprocessing) | Three.js post-processing effects |
| [Embla Carousel](https://www.embla-carousel.com/) | Lightweight, performant carousel with autoplay |

### Data & Backend

| Technology | Purpose |
|------------|---------|
| [Firebase](https://firebase.google.com/) | Authentication, Firestore database |
| [Resend](https://resend.com/) | Server-side contact form email delivery |
| [Recharts](https://recharts.org/) | SVG charts and data visualizations |

### Forms & Validation

| Technology | Purpose |
|------------|---------|
| [React Hook Form](https://react-hook-form.com/) | Performant form management |
| [Zod](https://zod.dev/) | Schema validation (client + server) |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | Zod integration with React Hook Form |

### Utilities

| Technology | Purpose |
|------------|---------|
| [date-fns](https://date-fns.org/) | Date manipulation and formatting |
| [clsx](https://github.com/lukeed/clsx) | Conditional class name construction |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Intelligent Tailwind class merging |
| [class-variance-authority](https://cva.style/) | Component variant management |

### Fonts

| Font | Usage |
|------|-------|
| [Inter](https://rsms.me/inter/) | Body text — clean, highly legible at all sizes |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Code snippets and technical content |

### Hosting & Domain

| Service | Purpose |
|---------|---------|
| [Vercel](https://vercel.com/) | Hosting, CI/CD, serverless functions |
| Custom domain | `princesherathiya.com` |

<br/>

---

## 📸 Screenshots Gallery

### Hero & Profile

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Prince%20sherathiya.png" width="250" alt="Prince Sherathiya profile" style="border-radius: 50%;"/>
</p>

<p align="center">
  <em>Prince Sherathiya — Software Engineer & Founder of WebTurnerAI</em>
</p>

### Portfolio Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/p1.png" width="32%" alt="Portfolio screenshot 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P2.png" width="32%" alt="Portfolio screenshot 2"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P3.png" width="32%" alt="Portfolio screenshot 3"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P4.png" width="32%" alt="Portfolio screenshot 4"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P5.png" width="32%" alt="Portfolio screenshot 5"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/P6.png" width="32%" alt="Portfolio screenshot 6"/>
</p>

### Design Elements

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Design.png" width="48%" alt="Design element 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Design2.png" width="48%" alt="Design element 2"/>
</p>

### Role-Based Screenshot Library

The portfolio includes **role-based screenshots** organized for case study pages:

| Role | Screenshots | Purpose |
|------|-------------|---------|
| **Visitors** | `Visitor 1–5, 7` | Landing page views for general visitors |
| **Students** | `Student 1–8`, `Stundet 4` | Student-facing dashboard views |
| **Teachers** | `Teacher 1–4` | Teacher/admin educational views |
| **Admins** | `Admin 1–4` | Administration and management panels |
| **Signup/Onboarding** | `Sign 1–4` | Registration and onboarding flows |

### Experience & Recognition

Recognitions and kudos showcasing real-world impact and professional achievements.

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Experience/Kudos%201.png" width="45%" alt="Kudo 1"/>
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Experience/Kudos%202.png" width="45%" alt="Kudo 2"/>
</p>

<br/>

---

## 📦 Project Structure

```
prince-portfolio/
├── public/
│   ├── logo.png                           # Site logo
│   ├── p1.png                             # Portfolio screenshot 1
│   ├── P2.png                             # Portfolio screenshot 2
│   ├── P3.png                             # Portfolio screenshot 3
│   ├── P4.png                             # Portfolio screenshot 4
│   ├── P5.png                             # Portfolio screenshot 5
│   ├── P6.png                             # Portfolio screenshot 6
│   └── images/
│       ├── Prince sherathiya.png          # Profile photo
│       ├── Design.png                     # Design element
│       ├── Design2.png                    # Design element
│       ├── 22.png                         # Additional asset
│       ├── Admin 1-4.jpg                  # Admin role screenshots
│       ├── Student 1-8.png                # Student role screenshots
│       ├── Stundet 4.png                  # Student screenshot (alternate)
│       ├── Teacher 1-4.jpg                # Teacher role screenshots
│       ├── Visitor 1-5, 7.png             # Visitor role screenshots
│       ├── Sign 1-4.jpg                   # Signup flow screenshots
│       ├── Aura AI/                       # Aura AI project screenshots (6 images)
│       ├── Chatbot/                       # Chatbot project screenshots (9 images)
│       ├── Experience/                    # Experience/kudos screenshots (2 images)
│       ├── Helpful vault/                 # Helpful Vault screenshots (6 images)
│       └── ecoreward/                     # EcoReward screenshots (8 images)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout with SEO, JSON-LD, fonts, metadata
│   │   ├── page.tsx                       # Home page composing all 8 sections
│   │   ├── globals.css                    # Global styles + custom CSS (hero, animations, etc.)
│   │   ├── api/
│   │   │   └── contact/route.ts           # Server-side contact endpoint (Resend + rate limiting)
│   │   ├── explore/page.tsx               # Tabbed project/service/experience explorer
│   │   ├── project/[slug]/page.tsx        # Dynamic project case study pages
│   │   ├── experience/[slug]/page.tsx     # Dynamic experience detail pages
│   │   ├── resume/page.tsx                # Live resume page
│   │   ├── sitemap.ts                     # Auto-generated sitemap
│   │   └── robots.ts                      # Auto-generated robots.txt
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx                   # Hero with profile, orbital rings, proof metrics, CTAs
│   │   │   ├── about.tsx                  # About section
│   │   │   ├── skills.tsx                 # Animated skill bars (4 categories)
│   │   │   ├── services.tsx               # 4 service cards
│   │   │   ├── projects.tsx               # Project showcase
│   │   │   ├── experience.tsx             # Experience timeline
│   │   │   ├── journey.tsx                # Educational/professional journey
│   │   │   └── contact.tsx                # Resend-powered contact form with honeypot + rate limiting
│   │   ├── header.tsx                     # Sticky nav with IntersectionObserver tracking
│   │   ├── footer.tsx                     # Brand footer with links
│   │   ├── scroll-progress.tsx            # Top-of-page scroll progress indicator
│   │   ├── transition-screen.tsx          # Page transition animation
│   │   ├── explore-view.tsx               # Tabbed explorer view
│   │   ├── card-3d.tsx                    # 3D tilt card effect component
│   │   ├── circular-carousel.tsx          # Circular project carousel
│   │   ├── hyperspeed.tsx                 # Three.js hyperspeed background
│   │   ├── animated-background.tsx        # Animated gradient background
│   │   ├── section-wrapper.tsx            # Reusable section layout wrapper
│   │   ├── icons.tsx                      # Custom icon components
│   │   └── ui/                            # ShadCN UI components (40+ primitives)
│   │
│   ├── context/
│   │   └── transition-context.tsx         # Page transition state management
│   │
│   ├── hooks/
│   │   └── use-active-section.ts          # IntersectionObserver hook for nav tracking
│   │
│   └── lib/
│       └── data.ts                        # Centralized data layer (projects, skills, services, experience)
│
├── next.config.ts                         # Next.js config (image domains, TS/Eslint build settings)
├── tailwind.config.ts                     # Tailwind theme (colors, fonts, animations)
├── tsconfig.json                          # TypeScript configuration
├── postcss.config.js                      # PostCSS config for Tailwind
├── package.json                           # Dependencies and scripts
├── .env.example                           # Environment variable template
└── .gitignore                             # Git ignore rules
```

<br/>

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|-------------|---------|
| [Node.js](https://nodejs.org/) | 18+ |
| [npm](https://www.npmjs.com/) | (comes with Node.js) |

### Installation

```bash
# Clone the repository
git clone https://github.com/Aicodebyprince/prince-portfolio.git
cd prince-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for the contact form (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email routing for contact form submissions
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Get this from [resend.com](https://resend.com/). Required for contact form. |
| `CONTACT_TO_EMAIL` | The inbox where contact form submissions are delivered. |
| `CONTACT_FROM_EMAIL` | Sender address. Use `onboarding@resend.dev` for testing. For custom domain, verify in Resend dashboard. |

### Development

```bash
# Standard dev server (port 9002)
npm run dev

# Dev server with Turbopack (port 9002)
npm run dev:turbo
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

### Code Quality

```bash
# TypeScript type checking
npm run typecheck

# Linting
npm run lint
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

The build generates **static pages where possible** and server-renders API routes on demand. Sitemap and robots.txt are generated automatically.

<br/>

---

## 📜 Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev -p 9002` | Development server on port 9002 |
| `dev:turbo` | `next dev --turbopack -p 9002` | Development with Turbopack for faster refresh |
| `build` | `next build` | Production build with static generation |
| `start` | `next start` | Production server |
| `lint` | `next lint` | Run ESLint across the codebase |
| `typecheck` | `tsc --noEmit` | TypeScript type checking without emitting files |

<br/>

---

## 🌐 Deployment

The site is built for and deployed on **Vercel**.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAicodebyprince%2Fprince-portfolio)

No additional configuration is needed beyond setting the environment variables in the Vercel project settings:

1. Push your repository to GitHub
2. Import the project into Vercel
3. Add the following environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Deploy — Vercel detects Next.js automatically

The build generates:
- **Static pages** where possible (home, resume)
- **Server-rendered pages** on demand (project case studies, experience pages)
- **API routes** as serverless functions (contact form)
- **Auto-generated** sitemap and robots.txt

<br/>

---

## 🗺️ Roadmap

### ✅ Completed
- [x] 8-section single-page home layout
- [x] IntersectionObserver active nav tracking
- [x] Server-side contact form with Resend
- [x] Rate limiting, honeypot, Zod validation
- [x] Full Next.js Metadata API (OG, Twitter, JSON-LD)
- [x] Auto-generated sitemap & robots.txt
- [x] Dynamic project case study pages
- [x] Dynamic experience detail pages
- [x] Tabbed explorer page
- [x] Live resume page
- [x] Three.js hyperspeed background
- [x] 3D card tilt effect
- [x] Circular project carousel
- [x] Page transition animations
- [x] Dark theme with gold/teal accent palette
- [x] Responsive design (mobile, tablet, desktop)
- [x] Role-based screenshot organization

### 🔄 In Progress
- [ ] Blog / writing section
- [ ] Testimonials carousel from real clients
- [ ] Dark mode / theme toggle

### 📋 Planned
- [ ] i18n / multi-language support
- [ ] Analytics dashboard (internal traffic tracking)
- [ ] AI-powered project recommendation
- [ ] Integration with GitHub API for live project stats
- [ ] Performance monitoring with Lighthouse CI
- [ ] Guestbook / visitor log

<br/>

---

## 🧠 Engineering Decisions

### Why Next.js 15 App Router?
The App Router provides **React Server Components** by default, which means the home page and resume page can be statically generated while API routes and dynamic project pages remain server-rendered. This gives the best of both worlds: **instant loads for content pages** and **dynamic data for case studies**.

### Why IntersectionObserver with Ratio Scoring?
Standard IntersectionObserver only tells you if an element is visible, not *how much* of it is visible. Ratio scoring calculates the percentage of each section in the viewport and highlights the most visible one. This prevents the nav from jumping erratically between sections.

### Why Server-Only Contact Form?
The Resend API key is sensitive credentials. By keeping the contact form entirely server-side (API route), the key is **never exposed to the client**. Combined with rate limiting, honeypot fields, and server-side validation, this creates a defense-in-depth approach to spam prevention.

### Why Centralized Data Layer?
All portfolio content (projects, skills, services, experience) lives in a single `data.ts` file. This means:
- **One source of truth** for all content
- **Type safety** via TypeScript interfaces
- **Easy updates** — edit one file to update multiple pages
- **Consistent structure** across case studies

<br/>

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. **Open an issue** — describe the suggestion, bug, or improvement
2. **Fork the repo** and make your changes
3. **Submit a pull request** with a clear description

Priority areas for contribution:
- Accessibility improvements
- Performance optimizations
- Additional project case studies
- SEO enhancements

<br/>

---

## ❓ Troubleshooting

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| Contact form not sending | Missing `RESEND_API_KEY` | Add the key to `.env.local` or Vercel env vars |
| Images not loading | Incorrect image paths | Images are served from `/public/` — use paths like `/images/file.png` |
| Build fails | TypeScript errors | Run `npm run typecheck` and fix errors, or check `next.config.ts` |
| Dev server port conflict | Port 9002 in use | Change the port in `package.json` scripts |
| Fonts not loading | Network issue / ad blocker | Fonts are loaded from Google Fonts CDN |
| Smooth scroll not working | Browser compatibility | Works in modern browsers (Chrome, Firefox, Safari, Edge) |

<br/>

---

## 🧩 Integration Points

### API Routes

| Route | Method | Purpose | Rate Limited |
|-------|--------|---------|:------------:|
| `/api/contact` | POST | Send contact form email via Resend | ✅ Yes |

### Environment Variables

```env
# Required
RESEND_API_KEY=re_xxx

# Email Routing
CONTACT_TO_EMAIL=inbox@example.com
CONTACT_FROM_EMAIL=sender@example.com
```

### External Services

| Service | Integration | Purpose |
|---------|-------------|---------|
| [Resend](https://resend.com/) | API key via env | Email delivery for contact form |
| [Firebase](https://firebase.google.com/) | Web SDK | Authentication & Firestore (project-specific) |
| [Vercel](https://vercel.com/) | Git-based deploy | Hosting & serverless functions |
| [Google Fonts](https://fonts.google.com/) | CDN link | Inter & JetBrains Mono fonts |

<br/>

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br/>

---

## 👤 About

<p align="center">
  <img src="https://raw.githubusercontent.com/Aicodebyprince/prince-portfolio/main/public/images/Prince%20sherathiya.png" width="120" alt="Prince Sherathiya" style="border-radius: 50%;"/>
</p>

<p align="center">
  <strong>Prince Sherathiya</strong><br/>
  <em>Software Engineer · Founder @ WebTurnerAI</em>
</p>

<p align="center">
  Building backend systems, workflow automation, operational dashboards, and practical AI tools for real business operations.
</p>

<table align="center">
  <tr>
    <td align="center">
      <strong>🌐 Portfolio</strong><br/>
      <a href="https://princebuilds.vercel.app/">princebuilds.vercel.app</a>
    </td>
    <td align="center">
      <strong>📧 Email</strong><br/>
      <a href="mailto:princesher321@gmail.com">princesher321@gmail.com</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🔗 LinkedIn</strong><br/>
      <a href="https://linkedin.com/in/princesherathiya">linkedin.com/in/princesherathiya</a>
    </td>
    <td align="center">
      <strong>💻 GitHub</strong><br/>
      <a href="https://github.com/Aicodebyprince">github.com/Aicodebyprince</a>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <strong>⚡ WebTurnerAI</strong><br/>
      <a href="https://webturnerai.tech/">webturnerai.tech</a>
    </td>
  </tr>
</table>

<br/>

---

<p align="center">
  <sub>Built with <a href="https://nextjs.org/">Next.js</a> · <a href="https://tailwindcss.com/">Tailwind CSS</a> · <a href="https://www.framer.com/motion/">Framer Motion</a> · Deployed on <a href="https://vercel.com/">Vercel</a></sub>
  <br/>
  <sub>© 2026 Prince Sherathiya · WebTurnerAI</sub>
</p>
