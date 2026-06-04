# Manpreet Singh — Portfolio Website

A galaxy-themed, Gen Z energy, multi-page personal portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just open and go.

---

## 📁 Project Structure

```
manpreet-portfolio/
├── index.html              ← Home page
├── css/
│   ├── style.css           ← Main styles
│   └── animations.css      ← Animation effects
├── js/
│   ├── galaxy.js           ← Star field canvas animation
│   └── main.js             ← Interactions (cursor, typed text, scroll reveal)
└── pages/
    ├── about.html
    ├── experience.html
    ├── skills.html
    ├── projects.html
    ├── personal.html
    ├── blog.html
    └── contact.html
```

---

## 🚀 Running Locally in VS Code

1. **Open the folder** in VS Code:
   ```
   File → Open Folder → select `manpreet-portfolio`
   ```

2. **Install the Live Server extension** (if not already):
   - Press `Ctrl+Shift+X` → search "Live Server" → Install

3. **Right-click `index.html`** → "Open with Live Server"

4. Your portfolio opens at `http://127.0.0.1:5500`

---

## 🌐 Hosting on GitHub Pages

### Step 1 — Create a GitHub repository
- Go to github.com → New repository
- Name it: `manpreet-portfolio` (or `yourusername.github.io` for a root site)
- Set to **Public**

### Step 2 — Push your code
```bash
cd manpreet-portfolio
git init
git add .
git commit -m "Initial portfolio launch 🚀"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/manpreet-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main` / `/ (root)`
- Click **Save**

### Step 4 — Your site goes live at:
```
https://YOUR_USERNAME.github.io/manpreet-portfolio/
```
(Takes 1–2 minutes to deploy)

---

## ✏️ Customizing

| What to change | Where |
|---|---|
| Your name / tagline | `index.html` hero section |
| Typed text roles | `js/main.js` → `words` array |
| Contact info | `pages/contact.html` |
| LinkedIn URL | `pages/contact.html` |
| Colors / theme | `css/style.css` → `:root` variables |
| Blog posts | `pages/blog.html` → `blogs` object in `<script>` |
| Projects | `pages/projects.html` |

---

## 🎨 Design System

- **Primary**: `#a855f7` (Purple)
- **Accent**: `#38bdf8` (Blue), `#ec4899` (Pink), `#34d399` (Green)
- **Background**: `#050510` (Deep Space)
- **Fonts**: Bebas Neue (display) · Syne (headings) · DM Sans (body) · Space Mono (code/labels)

---

Built with 🔥 & stardust · © 2026 Manpreet Singh
