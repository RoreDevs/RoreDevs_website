# RoreDevs

> **"Learning by building. Shipping in the open. Growing together."**

RoreDevs is a community of student developers who learn by building, share ideas, and open-source real projects together. We build projects like **Seemul**, a peer-to-peer learning platform, and **Acadex**, an academic tools suite for students. This repository is the official RoreDevs website.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) via [Vite 8](https://vitejs.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + `@tailwindcss/forms` |
| Routing | [React Router DOM 6](https://reactrouter.com) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Font | [Inter](https://rsms.me/inter/) via `@fontsource/inter` |
| Build tool | Vite + PostCSS + Autoprefixer |

---

## Folder Structure

```
RoreDevs_website/
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/             # Images, SVGs, and other media
│   ├── components/         # Reusable UI components (buttons, cards, etc.)
│   ├── layouts/            # Page layout wrappers (e.g. navbar + footer shell)
│   ├── pages/              # One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # App entry point + BrowserRouter
│   └── index.css           # Tailwind directives + global styles
├── tailwind.config.js      # RoreDevs design system (colors, type, radius)
├── postcss.config.js
├── vite.config.js
├── .gitignore
└── package.json
```

---

## Running Locally

Make sure you have **Node.js 18+** installed, then:

```bash
# 1. Clone the repository
git clone https://github.com/Rosieeee344/RoreDevs_website.git
cd RoreDevs_website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

**Other useful commands:**

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/team` | Team |
| `/projects` | Projects |
| `/contact` | Contact |

---

## The Team

| Name | Role |
|---|---|
| **Rosie** | Founder & Developer |
| **Erica** | Co-founder & Developer |
| **Obed** | Co-founder & Developer |
| **Raymond** | Co-founder & Developer |

---

## Design System

The site uses a custom Tailwind theme built around a minimalistic startup aesthetic (think Linear, Stripe, Notion):

- **Primary color:** `#78350F` (warm brown)
- **Font:** Inter — large, confident headings with generous whitespace
- **Border radius:** 12–16px (`rounded-xl` / `rounded-2xl`)
- **Shadows:** Soft and subtle — `shadow-soft`, `shadow-card`, `shadow-elevated`

---

*Built with too much snacks and not enough sleep. — RoreDevs, 2026*
