# Magnaperitus Law Firm — Website

Professional website for **Magnaperitus**, a full-service law firm headquartered in Bhopal, Madhya Pradesh, with a regional presence across Central India.

## Tech Stack

- **React.js** (functional components, hooks)
- **Tailwind CSS v4** for utility styling
- **Framer Motion** for scroll animations and transitions
- **React Router v6** for multi-page routing
- **React Helmet Async** for SEO meta tags
- **Lucide React** for icons
- **Vite** for build tooling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd magnaperitus-site
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Opens the site at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Site Structure

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, practice areas preview, leadership spotlight |
| About | `/about` | Firm history, philosophy, reach, Shantanoo Saxena profile |
| Practice Areas | `/practice-areas` | All 12 practice area cards with details |
| Start-Up Hub | `/startup-hub` | Dedicated start-up and MSME legal services |
| Family Law Centre | `/family-law` | Family law services with compassionate design |
| Contact | `/contact` | Contact form, map, and office details |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SectionHeading.jsx
│   ├── StatCounter.jsx
│   ├── PracticeAreaCard.jsx
│   ├── ContactForm.jsx
│   ├── ScrollToTop.jsx
│   └── PageMeta.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── PracticeAreas.jsx
│   ├── StartupHub.jsx
│   ├── FamilyLaw.jsx
│   └── Contact.jsx
├── data/
│   └── practiceAreas.js
├── App.jsx
├── main.jsx
└── index.css
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Midnight Navy | `#0D1B2A` | Primary backgrounds, headers |
| Rich Gold | `#C9A84C` | Accents, dividers, CTAs |
| Warm Ivory | `#F5F0E8` | Body background |
| Charcoal Gray | `#2E2E2E` | Body text |
| Muted Sage | `#5A7A6A` | Optional accent |

## Typography

- **Display/Headings:** Cormorant Garamond
- **Body Text:** Lora
- **UI/Navigation:** Raleway
