# 🚀 Portfolio – Website

This repository contains my personal portfolio website, built to showcase my **frontend engineering skills, design sense, and real projects**. It is actively evolving and reflects my learning journey toward **frontend / full‑stack internships**.
[DEVLOG-latest 14/12/25]

---

## 🎯 Purpose

* Present real projects (Web, 3D, AI, Creative Tech)
* Demonstrate modern frontend practices (React, Next.js, Tailwind)
* Show UI/UX thinking, not just functionality
* Serve as a learning ground for advanced UI patterns (e.g., radial menu)

---

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS
* **UI Concepts:** Responsive layout, component reuse, animations
* **Assets:** SVG, PNG, custom icons
* **Deployment:** Vercel

---

## ✨ Key Features

* Fixed glassmorphism navbar
* Responsive layouts using Flexbox & Grid
* Component‑based architecture
* Interactive portfolio cards
* Radial menu (mobile navigation – WIP)
* Gradient‑based dark theme

---

## 📂 Project Structure

```text
/app
 ├─ page.tsx           # Home page
 ├─ Portfolio/         # Portfolio section
 ├─ Contact_me/        # Contact page
/components
 ├─ Navigation.tsx     # Navbar
 ├─ Footer.tsx         # Footer
 ├─ ContactButton.tsx  # Reusable button component
 ├─ RadialMenu.tsx     # Experimental radial navigation
/public
 ├─ icons & images
```

---

## 🛠️ Learning Highlights

### 1. Layout Discipline

**Before (problematic):**

```tsx
<div className="absolute inset-x-0 top-16 h-16">
```

**After (correct):**

```tsx
<main className="pt-20 flex-1">
```

> Learned to respect document flow and compensate fixed elements using padding instead of absolute positioning.

---

### 2. Component Reusability

**Before:**

```tsx
<button className="...">GitHub</button>
<button className="...">LinkedIn</button>
```

**After:**

```tsx
<ContactButton icon="/github.svg" text="GitHub" link="https://github.com/..." />
```

> Reduced duplication and improved consistency.

---

### 3. Framework Discipline

**Avoided mistakes:**

```tsx
hover:scale-20
width={80vw}
```

**Correct usage:**

```tsx
hover:scale-105
className="w-[40vw]"
```

> Learned to respect JSX and Tailwind constraints.

---

### 4. Z‑Index & Layering

**Bug:** Image rendered but hidden due to stacking order.

**Fix:**

```tsx
<Image fill className="object-cover z-10" />
```

> Gained solid understanding of stacking contexts.

---

## 🧭 Radial Menu (Experimental)

The radial menu is an experimental mobile navigation feature designed to:

* Replace traditional hamburger menus
* Demonstrate geometry‑based UI logic
* Showcase animation + state management

```ts
const angle = (i / items.length) * Math.PI * 2;
const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius;
```

This feature is still being refined for accessibility and UX clarity.

---

## 📱 Responsiveness

* Mobile‑first thinking
* Adaptive grid layouts
* Touch‑friendly buttons
* Smooth hover & tap transitions

---

## 🔍 Accessibility (In Progress)

Planned improvements:

* `aria-labels` for navigation
* Keyboard navigation
* Contrast validation

---

## 📌 Future Improvements

*

## 📫 Contact

* GitHub: [https://github.com/Cyberbee-pro](https://github.com/Cyberbee-pro)
* Email: [cyberbeepro@gmail.com](mailto:cyberbeepro@gmail.com)
* Portfolio: (this site)

---

> *"Design shows taste. Structure shows mastery."*
> This portfolio represents my transition from experimentation to engineering discipline.
