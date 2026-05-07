<div align="center">

# 🍽️ Royal Feast — Fine Dining Restaurant Website

### A premium, fully responsive restaurant website built with pure HTML5, CSS3 & Vanilla JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)

**Developed by [Immad Shahzad](https://github.com/immadshahzad)**
📞 +92 330 4344535 · 📧 immadshahzad@royalfeast.com

---

*A Michelin-starred luxury dining experience — crafted in code with passion and precision.*

</div>

---

## 📌 Project Overview

**Royal Feast** is a production-quality frontend restaurant website designed for a luxury fine dining brand. Built entirely with **no frameworks or libraries** — just clean, semantic HTML5, modern CSS3, and ES6+ Vanilla JavaScript.

The project was developed as part of the **Teyzix Core Internship — Task FS-1 (Full-Stack Web Development)**, with a focus on responsive design, interactive UI, and professional code quality.

> ✅ All core requirements fulfilled + All 4 bonus challenges completed.

---

## 🖥️ Live Preview

> Deploy to GitHub Pages, Netlify, or Vercel to get a live URL.
> Local preview via XAMPP at: `http://localhost/royal-feast/`

---

## ✨ Features

### 🔹 Core Features

| Feature | Description |
|---|---|
| **Sticky Navbar** | Transparent → frosted glass on scroll, with active link highlighting |
| **Hamburger Menu** | Smooth slide-down mobile navigation |
| **Hero Section** | Full-screen parallax background, animated headline, dual CTA buttons |
| **Stats Bar** | Animated number counters (25+ years, 3 Michelin stars, 50k+ guests) |
| **About Section** | Layered image layout with overlapping accent photo and year badge |
| **Featured Dishes** | 3 chef's special cards with Chef / Signature / Most Loved badges |
| **Menu Section** | 12 dishes across 3 categories with JS-powered filter buttons |
| **Cart System** | Full slide-in sidebar — add, remove, adjust quantity, live totals |
| **Reservation Form** | Complete client-side validation with success/error states |
| **Google Maps** | Embedded interactive map with full contact info |
| **Footer** | Quick links, social icons, opening hours, developer credit |

### 🔸 Bonus Features (All Completed)

| Bonus | Status |
|---|---|
| Dark Mode Toggle | ✅ With localStorage persistence |
| Loading Screen Animation | ✅ Branded loader with progress bar |
| Hover Animations on Menu Items | ✅ Scale + overlay quick-add button |
| Form Validation UX | ✅ Inline error messages + success state |
| Scroll Reveal Animations | ✅ IntersectionObserver on all sections |
| Scroll-to-Top Button | ✅ Appears after 400px scroll |
| Toast Notifications | ✅ Slide-in on every cart add |
| Cart localStorage | ✅ Cart persists across browser sessions |

---

## 🗂️ Folder Structure

```
royal-feast/
│
├── index.html              # Main HTML file — all 9 sections
│
├── css/
│   └── style.css           # Complete stylesheet (~900 lines)
│                           # CSS variables, animations, responsive breakpoints
│
├── js/
│   └── app.js              # All JavaScript logic
│                           # Cart system, menu filter, form validation,
│                           # scroll reveal, counters, dark mode
│
├── images/                 # Folder ready (images load via Unsplash CDN)
│
└── README.md               # Project documentation (this file)
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure — `<nav>`, `<section>`, `<aside>`, `<footer>` |
| **CSS3** | Custom Properties, Grid, Flexbox, Animations, Media Queries |
| **Vanilla JavaScript ES6+** | Cart logic, DOM manipulation, IntersectionObserver, localStorage |
| **Google Fonts** | Playfair Display · Cormorant Garamond · Poppins |
| **Font Awesome 6** | All icons via CDN |
| **Google Maps Embed** | Interactive location map |
| **Unsplash CDN** | High-quality food photography (requires internet) |

---

## 🎨 Design System

```
COLOR PALETTE
─────────────────────────────────────
Gold Primary    →  #c9a84c
Gold Light      →  #e2c97e
Gold Dark       →  #9a7a30
Background      →  #0a0a0a  (dark mode)
Background      →  #f5f0e8  (light mode)
Card Surface    →  #161616
Border          →  #222222

TYPOGRAPHY
─────────────────────────────────────
Headings        →  Playfair Display  (elegant serif)
Subheadings     →  Cormorant Garamond  (refined serif)
Body / UI       →  Poppins  (clean sans-serif)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target | Layout |
|---|---|---|
| `< 480px` | Mobile Portrait | Single column, fully stacked |
| `480px – 768px` | Mobile Landscape | 2-column stats, single menu cards |
| `768px – 900px` | Tablet | Hamburger menu, stacked grids |
| `900px – 1100px` | Small Desktop | 2-column about/reservation |
| `> 1100px` | Full Desktop | All multi-column layouts active |

---

## 🚀 Setup & Installation

### ▶️ Method 1 — Run with XAMPP (Recommended for Local)

1. **Download** this repository as a ZIP and extract it
2. **Copy** the `royal-feast` folder into your XAMPP `htdocs` directory:
   ```
   C:\xampp\htdocs\royal-feast
   ```
3. **Open XAMPP Control Panel** → click **Start** next to **Apache**
4. **Open your browser** and visit:
   ```
   http://localhost/royal-feast/
   ```
5. ✅ Your website is live locally!

> ⚠️ **Keep internet ON** — images and fonts load from external CDNs (Unsplash, Google Fonts, Font Awesome)

---

### ▶️ Method 2 — Open Directly in Browser

1. Extract the ZIP file anywhere on your PC
2. Right-click `index.html` → **Open with** → **Google Chrome** or **Firefox**
3. ✅ Works instantly (internet required for images & icons)

---

### ▶️ Method 3 — Deploy to GitHub Pages

```bash
# Step 1: Initialize git repo
git init
git add .
git commit -m "Initial commit — Royal Feast Restaurant Website"

# Step 2: Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/royal-feast.git
git branch -M main
git push -u origin main
```

Then:
- Go to your GitHub Repo → **Settings** → **Pages**
- Source: **Deploy from branch** → `main` → `/ (root)` → **Save**
- ✅ Live at: `https://YOUR_USERNAME.github.io/royal-feast/`

---

### ▶️ Method 4 — Deploy to Netlify (Easiest — No Account Needed)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop the entire `royal-feast` folder onto the page
3. ✅ Instant live URL generated in seconds!

---

### ▶️ Method 5 — Deploy to Vercel

```bash
npm install -g vercel
cd royal-feast
vercel
# Follow the CLI prompts → live URL instantly
```

---

## 📋 Teyzix Core Internship — Task FS-1 Checklist

```
CORE REQUIREMENTS
─────────────────────────────────────────────────────────────
 ✅  Fully responsive layout (mobile, tablet, desktop)
 ✅  Menu section — Starters, Mains, Desserts
 ✅  Category filter buttons with JavaScript
 ✅  Reservation / Contact form
 ✅  Name, Email, Date/Time, Message fields
 ✅  Client-side form validation
 ✅  Google Maps integration
 ✅  Consistent UI design & color scheme
 ✅  Mobile-first design approach
 ✅  Clean folder structure
 ✅  Readable, well-commented code
 ✅  HTML5 + CSS3 + Vanilla JavaScript only

BONUS CHALLENGES
─────────────────────────────────────────────────────────────
 ✅  Dark mode toggle (localStorage)
 ✅  Animated hover effects on menu items
 ✅  Form validation with better UX feedback
 ✅  Loading animation on page load

EXTRA (Beyond Requirements)
─────────────────────────────────────────────────────────────
 ✅  Advanced Add-to-Cart sidebar system
 ✅  Cart localStorage persistence
 ✅  Toast notifications on add to cart
 ✅  Scroll reveal animations (IntersectionObserver)
 ✅  Animated stats counters
 ✅  Scroll-to-top button
 ✅  Active navbar link highlighting
 ✅  Glassmorphism UI effects
 ✅  Parallax hero background
```

---

## 🔗 GitHub Repository Description (Copy this below your repo name)

```
🍽️ Royal Feast — Premium responsive restaurant website | HTML5 · CSS3 · Vanilla JS | Cart system, dark mode, form validation, Google Maps | Teyzix Core Internship Task FS-1
```

---

## 👨‍💻 Developer

<div align="center">

**Immad Shahzad**

Full-Stack Web Development Intern @ Teyzix Core

📞 +92 330 4344535
📧 immadshahzad@royalfeast.com

</div>

---

## 📄 License

This project was built for internship/educational purposes under the **Teyzix Core Internship Program — Task FS-1**.
Free to use, modify, and reference for learning.

---

<div align="center">

*Made with ❤️ by **Immad Shahzad***

</div>
