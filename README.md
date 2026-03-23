# 🍽️ Flavour — Food Recipe App

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Cormorant+Garamond&size=28&duration=3000&pause=1000&color=C9A84C&center=true&vCenter=true&width=600&lines=Discover+%C2%B7+Cook+%C2%B7+Savour;Find+Your+Next+Favourite+Meal;6+World+Cuisines+%C2%B7+Live+API+%C2%B7+Auth+System" alt="Typing SVG" />

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![TheMealDB](https://img.shields.io/badge/TheMealDB-API-FF6B35?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==&logoColor=white)
![LocalStorage](https://img.shields.io/badge/localStorage-Session_Auth-4CAF50?style=for-the-badge&logo=databricks&logoColor=white)

<br/>

![License](https://img.shields.io/badge/License-MIT-gold?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![No Backend](https://img.shields.io/badge/Backend-None_Required-blue?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-orange?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made_with-❤️-red?style=flat-square)

</div>

---

<div align="center">

### 🌟 [Live Demo](https://your-username.github.io/flavour-recipe-app) &nbsp;·&nbsp; 📖 [Documentation](#-table-of-contents) &nbsp;·&nbsp; 🐛 [Report Bug](https://github.com/your-username/flavour-recipe-app/issues) &nbsp;·&nbsp; 💡 [Request Feature](https://github.com/your-username/flavour-recipe-app/issues)

</div>

---

## 📸 Screenshots

<div align="center">

| 🏠 Home Page | 🔐 Auth Modal | 🍛 Recipe Grid |
|:---:|:---:|:---:|
| Dark hero with search | Animated login/signup | Live API recipe cards |

</div>

```
╔══════════════════════════════════════════════════════════════╗
║  🍽 Flavour                          [ Login ]  [ Sign Up ]  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║           Discover · Cook · Savour                          ║
║                                                              ║
║         Find Your Next Favourite Meal                       ║
║                                                              ║
║         [ 🔍 Search any recipe — press Enter... ]           ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  Browse by Cuisine                                           ║
║  [🇮🇳 Indian] [🇨🇦 Canadian] [🇺🇸 American]                   ║
║  [🇹🇭 Thai]   [🇬🇧 British]  [🇷🇺 Russian]                    ║
╠══════════════════════════════════════════════════════════════╣
║  🖼 Butter Chicken   🖼 Dal Makhani   🖼 Biryani             ║
║  🖼 Palak Paneer     🖼 Samosa        🖼 Tandoori Chicken     ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔐 Authentication System](#-authentication-system)
- [🌐 API Integration](#-api-integration)
- [🎨 Design System](#-design-system)
- [⚙️ How It Works](#️-how-it-works)
- [🧩 JavaScript Concepts](#-javascript-concepts-used)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Performance](#-performance)
- [⚠️ Known Limitations](#️-known-limitations)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📜 License](#-license)

---

## ✨ Overview

**Flavour** is a full-stack-style **Single Page Application** built entirely with vanilla **HTML5, CSS3, and JavaScript ES6+** — no frameworks, no backend, no build tools required. It combines a **live recipe discovery engine** powered by the TheMealDB public REST API with a complete **client-side user authentication system** using the browser's `localStorage`.

> 💡 This project proves that a **production-quality user experience** — with auth flows, live API data, animated UI, and responsive design — can be built using only core web technologies. No React. No Node.js. No npm.

### 🎯 Why This Project Stands Out

| Aspect | What Makes It Special |
|--------|----------------------|
| 🔐 Auth System | Full Signup → Login → Logout → Session persistence without any backend |
| 🎨 UI Design | Premium dark-gold aesthetic with CSS-only animations and transitions |
| ⚡ Performance | Under 5KB JS · Zero HTTP requests on load except fonts and API |
| 🌐 Real Data | Live recipe data from a real public REST API (not hardcoded/mocked) |
| 📦 Zero Config | Clone → Open → Done. No terminal commands needed |

---

## 🎯 Features

### 🔐 Authentication
- ✅ **User Registration** — Name, email, password with validation
- ✅ **User Login** — Email + password credential matching
- ✅ **User Logout** — Clears session with farewell toast
- ✅ **Session Persistence** — Stays logged in after browser close/reopen
- ✅ **Duplicate Email Check** — Inline error on existing accounts
- ✅ **Password Validation** — Minimum 6 character enforcement
- ✅ **Inline Error Messages** — No alert popups, errors shown in form

### 🍽️ Recipe Discovery
- ✅ **6 Cuisine Filters** — Indian, Canadian, American, Thai, British, Russian
- ✅ **Live Search** — Search any dish name, fires on Enter key
- ✅ **Recipe Count** — Shows total results per cuisine/search
- ✅ **No Results State** — Friendly empty state for failed searches
- ✅ **Lazy Loading Images** — Images load only when in viewport

### 🎨 UI & UX
- ✅ **Premium Dark Theme** — Deep black with warm gold accents
- ✅ **Animated Auth Modal** — Slide-up with backdrop blur
- ✅ **Skeleton Loaders** — Shimmer placeholders during API fetch
- ✅ **Staggered Card Animations** — Cards enter with cascading delay
- ✅ **Toast Notifications** — Non-intrusive feedback for all actions
- ✅ **Hover Effects** — Cards lift with shadow on hover
- ✅ **Fully Responsive** — Mobile, tablet, and desktop layouts

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FLAVOUR APP                          │
├─────────────────┬───────────────────┬───────────────────────┤
│   index.html    │    style.css       │      index.js         │
│   (Structure)   │    (Presentation)  │      (Logic)          │
├─────────────────┼───────────────────┼───────────────────────┤
│ • Navbar        │ • CSS Variables    │ • Auth System         │
│ • Auth Modal    │ • Dark Theme       │ • API Integration     │
│ • Hero Section  │ • Animations       │ • DOM Manipulation    │
│ • Filter Btns   │ • Flexbox/Grid     │ • Event Handling      │
│ • Recipe Grid   │ • Responsive       │ • State Management    │
│ • Toast         │ • Skeleton UI      │ • Toast System        │
└─────────────────┴───────────────────┴───────────────────────┘
                              │
                    ┌─────────┴──────────┐
                    │   External Services │
                    ├────────────────────┤
                    │ TheMealDB REST API  │
                    │ Google Fonts CDN    │
                    │ Browser localStorage│
                    └────────────────────┘
```

### Data Flow
```
User Action
    │
    ▼
Event Listener (index.js)
    │
    ├──[Auth Action]──► localStorage read/write ──► checkAuthState() ──► Update Navbar UI
    │
    ├──[Cuisine Click]──► fetchData(area) ──► TheMealDB API ──► renderCards() ──► DOM Update
    │
    └──[Search Enter]──► fetch search endpoint ──► renderCards() / showNoResults() ──► DOM Update
```

---

## 🚀 Getting Started

### ✅ Prerequisites

All you need is a web browser. That's it.

- ✅ Chrome / Firefox / Safari / Edge (any modern browser)
- ✅ Internet connection (for API data and Google Fonts)
- ⭕ VS Code + Live Server extension *(optional but recommended)*

### ▶️ Option 1 — Direct Open *(Simplest)*
```bash
# Download or clone the repo, then:
open index.html
# or just double-click index.html in your file explorer
```

### ▶️ Option 2 — VS Code Live Server *(Recommended)*
```
1. Open the folder in VS Code
2. Install "Live Server" extension by Ritwick Dey
3. Right-click index.html → "Open with Live Server"
4. App runs at → http://127.0.0.1:5500
```

### ▶️ Option 3 — Clone via Git
```bash
# Clone the repository
git clone https://github.com/your-username/flavour-recipe-app.git

# Navigate into the folder
cd flavour-recipe-app

# Open in browser
open index.html

# Or open in VS Code
code .
```

### ▶️ Option 4 — Deploy to GitHub Pages *(Go Live)*
```bash
# After pushing to GitHub:
# 1. Go to your repo → Settings → Pages
# 2. Source: Deploy from branch → main → / (root)
# 3. Save → your app is live at:
#    https://your-username.github.io/flavour-recipe-app
```

---

## 📁 Project Structure

```
flavour-recipe-app/
│
├── 📄 index.html          ← App shell, layout, all HTML structure
│    ├── <nav>             → Sticky navbar with auth buttons
│    ├── #auth-overlay     → Full-screen modal with login/signup forms
│    ├── <section.hero>    → Hero banner with search input
│    ├── <section.filters> → Cuisine filter buttons
│    ├── <section.recipes> → Dynamic recipe card grid
│    └── #toast            → Toast notification element
│
├── 🎨 style.css           ← All styling, animations, theme
│    ├── :root             → CSS custom properties (design tokens)
│    ├── .navbar           → Sticky header styles
│    ├── .auth-overlay     → Modal backdrop + animation
│    ├── .auth-modal       → Split-panel auth card
│    ├── .hero             → Hero section + decorative circles
│    ├── .filter-btn       → Cuisine toggle buttons
│    ├── .recipe-card      → Recipe card + hover effects
│    ├── .skeleton         → Shimmer loading placeholder
│    ├── .toast            → Notification component
│    └── @media queries    → Mobile/tablet breakpoints
│
├── ⚡ index.js            ← All JavaScript logic
│    ├── DOM References    → All element selections
│    ├── Auth System       → signup / login / logout / checkAuthState
│    ├── Modal Control     → openAuth / closeAuth / toggleAuthMode
│    ├── API Layer         → fetchData(area) / search handler
│    ├── Render Layer      → renderCards / showSkeletons / showNoResults
│    └── Toast System      → showToast(msg, type)
│
└── 📖 README.md           ← This file
```

---

## 🔐 Authentication System

> **Built entirely on the browser's `localStorage` — no backend, no server, no database.**

### 📝 Sign Up Flow

```
User fills form (name + email + password)
         │
         ▼
Validate: password.length >= 6 ?
         │
         ├── ❌ No  → showError("Password must be at least 6 characters")
         │
         ▼
Read users array from localStorage
         │
         ▼
Check: email already exists in users[] ?
         │
         ├── ❌ Yes → showError("This email is already registered")
         │
         ▼
Create newUser = { name, email, password }
         │
         ▼
Save: localStorage.setItem("users", [...users, newUser])
Save: localStorage.setItem("currentUser", newUser)
         │
         ▼
closeAuth() → checkAuthState() → showToast("Welcome! 🎉")
```

### 🔑 Login Flow

```
User fills form (email + password)
         │
         ▼
Read users[] from localStorage
         │
         ▼
users.find(u => u.email === email && u.password === password)
         │
         ├── ❌ Not found → showError("Invalid email or password")
         │
         ├── ✅ Found → localStorage.setItem("currentUser", user)
         │
         ▼
closeAuth() → checkAuthState() → showToast("Welcome back! 👋")
```

### 🚪 Logout Flow

```
logoutBtn click
      │
      ▼
localStorage.removeItem("currentUser")
      │
      ▼
checkAuthState() → hide user info → show auth buttons
      │
      ▼
showToast("See you soon! 👋")
```

### 🔄 Session Persistence

```js
// Runs on EVERY page load — restores session automatically
function checkAuthState() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    // Show: avatar + greeting + logout button
    // Hide: login/signup buttons
  } else {
    // Show: login/signup buttons
    // Hide: user info
  }
}
```

> 🔒 **Security Note:** Passwords are stored in plain text in `localStorage`.
> This is intentional for a **frontend learning project** but is **never acceptable
> in production**. Production apps must use hashed passwords (bcrypt) and
> secure server-side session tokens (JWT / cookies / OAuth).

---

## 🌐 API Integration

### Provider: [TheMealDB](https://www.themealdb.com/api.php)
Free, no-auth-required public REST API for meal/recipe data.

### Endpoints Used

| Method | Endpoint | Purpose | Example |
|--------|----------|---------|---------|
| `GET` | `/filter.php?a={area}` | Fetch meals by cuisine | `?a=indian` |
| `GET` | `/search.php?s={name}` | Search meals by name | `?s=chicken` |

### Fetch Pattern (async/await)

```js
const fetchData = async (area) => {
  showSkeletons();                          // Show loading UI
  const res  = await fetch(`...${area}`);  // HTTP GET request
  const data = await res.json();           // Parse JSON body
  renderCards(data.meals, area);           // Update DOM
};
```

### Supported Cuisines

| Flag | Cuisine | API Value | Button Color |
|------|---------|-----------|-------------|
| 🇮🇳 | Indian | `indian` | Gold (active default) |
| 🇨🇦 | Canadian | `canadian` | Outline |
| 🇺🇸 | American | `american` | Outline |
| 🇹🇭 | Thai | `thai` | Outline |
| 🇬🇧 | British | `british` | Outline |
| 🇷🇺 | Russian | `russian` | Outline |

### Error Handling

```js
try {
  const res = await fetch(url);
  const data = await res.json();
  if (data.meals) renderCards(data.meals);
  else showNoResults(`No recipes found for "${query}"`);
} catch (err) {
  showNoResults("Connection error. Please check your internet.");
}
```

---

## 🎨 Design System

### Color Palette

```css
:root {
  --bg:         #0d0d0d;   /* Page background — deep black      */
  --bg2:        #141414;   /* Modal background                  */
  --surface:    #222222;   /* Cards, inputs, buttons            */
  --gold:       #c9a84c;   /* Primary accent — warm gold        */
  --gold-light: #e8c97a;   /* Hover state gold                  */
  --gold-dim:   rgba(201,168,76,0.15); /* Gold tint backgrounds  */
  --text:       #f5f0e8;   /* Primary text — warm white         */
  --text-muted: #8a8070;   /* Secondary text                    */
  --danger:     #e05555;   /* Error states                      */
  --success:    #4caf7d;   /* Success toasts                    */
}
```

### Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Cormorant Garamond | 700 | 2–4rem |
| Body / UI | DM Sans | 300–500 | 13–16px |

### Animation Catalogue

| Animation | Element | Duration | Easing |
|-----------|---------|----------|--------|
| `fadeIn` | Auth overlay backdrop | 0.25s | ease |
| `slideUp` | Auth modal | 0.35s | cubic-bezier(0.22,1,0.36,1) |
| `cardIn` | Recipe cards (staggered) | 0.4s | ease |
| `shimmer` | Skeleton loaders | 1.4s | infinite linear |
| `scale + translateY` | Auth widget open/close | 0.4s | cubic-bezier |

---

## ⚙️ How It Works

### On Page Load
```
1. checkAuthState()     → Check localStorage for existing session
2. fetchData("indian")  → Load default Indian cuisine from API
3. Event listeners attached to all filter buttons, search, auth forms
```

### Recipe Card Rendering
```js
foodGrid.innerHTML = meals.map((meal, i) => `
  <div class="recipe-card" style="animation-delay:${i * 0.05}s">
    <img src="${meal.strMealThumb}" loading="lazy" />
    <div class="card-body">
      <div class="card-name">${meal.strMeal}</div>
      <span class="card-tag">${area}</span>
    </div>
  </div>
`).join("");
```

### Skeleton Loading
```js
function showSkeletons(count = 6) {
  foodGrid.innerHTML = Array(count)
    .fill('<div class="skeleton"></div>')
    .join("");
}
// Called before every API fetch to show loading state immediately
```

---

## 🧩 JavaScript Concepts Used

| Concept | Implementation |
|---------|---------------|
| `async / await` | All API fetch calls — clean async code |
| `fetch()` | HTTP GET requests to TheMealDB |
| `.json()` | Response body parsing |
| `localStorage` | User data storage + session management |
| `JSON.parse / stringify` | Object ↔ string serialization |
| `Array.find()` | User credential lookup on login |
| `Array.push()` | Adding new users to the users array |
| `Array.map().join()` | Generating HTML strings from data arrays |
| `addEventListener` | All user interaction handling |
| `classList.add/remove/toggle` | All UI state transitions |
| `querySelector / querySelectorAll` | DOM element selection |
| `e.preventDefault()` | Blocking default form submission |
| Template literals | Dynamic HTML generation + API URLs |
| Arrow functions | All callbacks and handlers |
| `try / catch` | API error handling |
| Ternary operators | Conditional rendering in templates |
| `String.charAt / toUpperCase` | Avatar letter + greeting generation |
| `document.body.style.overflow` | Prevent scroll when modal is open |

---

## 📱 Responsive Design

| Breakpoint | Layout Changes |
|------------|---------------|
| `> 768px` | Full 2-column auth modal · 4+ column recipe grid |
| `≤ 768px` | Stacked auth modal · 2-column recipe grid · hidden greeting |
| `≤ 480px` | 2-column recipe grid · smaller filter buttons · hidden Login btn |

```css
/* Tablet */
@media (max-width: 768px) {
  .auth-modal  { flex-direction: column; }
  .auth-left   { width: 100%; border-bottom: 1px solid var(--border); }
  .food-grid   { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
}

/* Mobile */
@media (max-width: 480px) {
  .food-grid   { grid-template-columns: repeat(2, 1fr); }
  .btn-ghost   { display: none; } /* Hide Login, keep Sign Up */
}
```

---

## ⚡ Performance

| Metric | Value |
|--------|-------|
| 📦 Total JS size | ~5KB (unminified) |
| 🎨 Total CSS size | ~8KB (unminified) |
| 🌐 External requests on load | 1 (Google Fonts) |
| ⚡ Time to interactive | < 1 second |
| 🖼 Image loading | `loading="lazy"` on all recipe images |
| 🔄 Re-renders | Only affected DOM nodes updated (innerHTML) |

---

## ⚠️ Known Limitations

| # | Limitation | Impact |
|---|-----------|--------|
| 1 | 🔓 Passwords in plain text localStorage | Security — not for production |
| 2 | 📵 No API error retry logic | If API is down, shows error message |
| 3 | 🖱️ Recipe cards are not clickable | No detail/ingredient page |
| 4 | ⏳ No loading state for search | Brief blank state on slow connections |
| 5 | 📱 Auth modal can overflow on very small screens | Minor mobile UX issue |
| 6 | 🌍 Only 6 cuisines supported | Limited cuisine variety |
| 7 | 🔍 Search is name-only | Can't search by ingredient or category |

---

## 🗺️ Roadmap

### v2.0 — Planned Features
- [ ] 🔒 Firebase Authentication (real backend auth)
- [ ] ❤️ Favourites system — save recipes per user account
- [ ] 📄 Recipe Detail Modal — full ingredients + step-by-step instructions
- [ ] ⏳ Loading spinner / progress bar during fetch
- [ ] 🌍 More cuisines — Japanese, Mexican, Italian, French, Chinese

### v3.0 — Advanced Features
- [ ] 🔔 Toast system with queue (multiple simultaneous toasts)
- [ ] 🌙 Light / Dark mode toggle
- [ ] 🔗 Shareable recipe URLs via query params
- [ ] 📱 PWA support — installable on mobile homescreen
- [ ] 🧪 Unit tests with Jest for auth logic
- [ ] 🔍 Filter by ingredient, category, or dietary type
- [ ] 🖼 User profile with avatar upload

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome!

### Steps to Contribute

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/flavour-recipe-app.git
cd flavour-recipe-app

# 3. Create a feature branch
git checkout -b feature/recipe-detail-modal

# 4. Make your changes (edit index.html / style.css / index.js)

# 5. Commit with a clear message
git commit -m "feat: add recipe detail modal with ingredients list"

# 6. Push your branch
git push origin feature/recipe-detail-modal

# 7. Open a Pull Request on GitHub
```

### Commit Message Format
```
feat:     new feature
fix:      bug fix
style:    CSS / design changes
refactor: code restructure (no feature/fix)
docs:     README or documentation updates
```

---

## 👨‍💻 Author

<div align="center">

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](
https://github.com/kanhaiyaray
)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raykanhaiya/)

</div>

---

## 📜 License

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgements

| Resource | Purpose |
|----------|---------|
| [TheMealDB](https://www.themealdb.com) | Free recipe API |
| [Google Fonts](https://fonts.google.com) | Cormorant Garamond + DM Sans |
| [Shields.io](https://shields.io) | README badges |
| [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) | Animated header |

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

```
git clone → open index.html → done ✅
No npm. No build. No config. Just code.
```

🍽️ **Built with HTML · CSS · JavaScript · TheMealDB API**

</div>
