# Emmanuel Ogbodo — Compliance Analyst Portfolio

Single-page portfolio (**React**, **TypeScript**, **Vite**, **Tailwind**). Teal, blue, and white theme; responsive on mobile and desktop.

**Live site (after deploy):** [https://nuelti.github.io/Portfolio/](https://nuelti.github.io/Portfolio/)

## Prerequisites: install Node.js (includes `npm`)

If PowerShell says **`npm is not recognized`**, Node.js is not installed yet.  
Do **not** use `pip install npm` — that is a unrelated Python package and will not run this site.

1. Download **Node.js LTS**: [https://nodejs.org/](https://nodejs.org/) (Windows installer).
2. Run the installer (keep **“Add to PATH”** enabled).
3. **Close and reopen** Cursor (or open a new terminal).
4. Verify:

```powershell
node -v
npm -v
```

You should see version numbers (e.g. `v22.x` and `10.x`).

## Run locally

From the `Portfolio` folder:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm install` creates the **`node_modules`** folder (it does not exist until you run this once).

## Customize

Edit **`src/data/siteContent.ts`** — email, LinkedIn, Amazon role dates, location, certifications, and bullets.

## Build

```bash
npm run build
npm run preview
```

Production builds use base path `/Portfolio/` for GitHub Pages.

## Deploy to GitHub Pages (`nuelti.github.io`)

1. Push this repo to **`NuelTi/Portfolio`** on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to **`main`** (or run the **Deploy to GitHub Pages** workflow manually).

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the site.

> **Note:** Project repos publish at `https://nuelti.github.io/Portfolio/`. To use only `https://nuelti.github.io` (root), create a repo named **`nuelti.github.io`**, set Vite `base` to `/`, and deploy there.
