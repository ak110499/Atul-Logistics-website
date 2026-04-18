# Atul Logistics Website

Modern minimalist React site scaffolded with Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open: `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Keep **Root Directory** set to this repository root and keep Framework Preset as **Other** (the included `vercel.json` controls build/output).
4. Redeploy and open the generated URL.
5. Client-side routes are handled via rewrite fallback to `index.html`.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
