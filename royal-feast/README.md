# 🍽️ Royal Feast — Fine Dining Restaurant Website

A premium, fully responsive restaurant website built with pure HTML5, CSS3, and Vanilla JavaScript.

## 📸 Features

- **Sticky Navbar** with scroll effect, hamburger menu & active link highlighting
- **Hero Section** with parallax background, animated headline & CTA buttons
- **Stats Bar** with animated counters
- **About Section** with overlapping image layout
- **Featured Dishes** with hover animations & "Chef Special" badges
- **Menu Section** with JavaScript category filtering (Starters / Mains / Desserts)
- **Advanced Cart System** — slide-in sidebar, add/remove/quantity, localStorage persistence, toast notifications
- **Reservation Form** with full client-side validation (email, date, required fields)
- **Google Maps** embed with contact details
- **Footer** with quick links, social icons & opening hours
- **Dark Mode Toggle** (persisted via localStorage)
- **Loading Screen** animation
- **Scroll-to-Top** button
- **Scroll Reveal** animations

## 🗂️ Folder Structure

```
royal-feast/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## 🛠️ Technologies

- HTML5 (semantic elements)
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6 (icons)
- Google Fonts (Playfair Display, Cormorant Garamond, Poppins)
- Google Maps Embed API

## 🚀 Setup & Deployment

### Local Development
1. Clone or unzip the project
2. Open `index.html` in any modern browser
3. No build tools or dependencies required

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit - Royal Feast"
git remote add origin https://github.com/YOUR_USERNAME/royal-feast.git
git push -u origin main
# Enable GitHub Pages in repo Settings → Pages → main branch
```

### Deploy to Netlify
1. Drag & drop the `royal-feast/` folder onto [netlify.com/drop](https://netlify.com/drop)
2. Your live URL is instantly generated

### Deploy to Vercel
```bash
npm i -g vercel
cd royal-feast
vercel
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| < 480px    | Mobile (single column) |
| 480–768px  | Mobile landscape |
| 768–900px  | Tablet |
| 900–1100px | Small desktop |
| > 1100px   | Full desktop |

## 🎨 Design System

- **Primary Font:** Playfair Display (headings)
- **Secondary Font:** Cormorant Garamond (subheadings)
- **Body Font:** Poppins
- **Gold:** `#c9a84c` → `#e2c97e` → `#9a7a30`
- **Background:** `#0a0a0a` (dark) / `#f5f0e8` (light)

## 📋 Evaluation Checklist (Teyzix Core Task FS-1)

- [x] Responsive layout — mobile, tablet, desktop ✅
- [x] Menu with Starters, Mains, Desserts ✅
- [x] Category filter (JavaScript) ✅
- [x] Contact/Reservation form with validation ✅
- [x] Google Maps integration ✅
- [x] Consistent UI design & color scheme ✅
- [x] Mobile-first design ✅
- [x] Clean folder structure ✅
- [x] Well-commented code ✅
- [x] Dark mode toggle ✅ (Bonus)
- [x] Hover animations on menu items ✅ (Bonus)
- [x] Loading screen animation ✅ (Bonus)
- [x] Scroll reveal animations ✅ (Bonus)
- [x] Add to cart system ✅ (Extra)
