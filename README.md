# Next.js Atomic Sales Dashboard

A minimal Next.js (v15) + TypeScript + Tailwind project demonstrating atomic structure with Recharts charts showing mock sales for 2022, 2023, 2024.

## What is included

- Atomic design folders: `components/atoms`, `components/molecules`, `components/organisms`
- `app/dashboard/page.tsx` (empty dashboard page with components inside)
- `data/sales.ts` mock data
- Chart component (Recharts) with threshold filter and Bar/Line toggles

## Setup

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
# open http://localhost:3000/dashboard
```

## Create a GitHub repo & push

```bash
git init
git add .
git commit -m "Initial commit: Next.js atomic sales dashboard"
# create a repo on GitHub (via web UI) and then:
git remote add origin git@github.com:<your-username>/nextjs-atomic-sales-dashboard.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel

1. Sign in to Vercel and click "Import Project" and select your GitHub repo.
2. Use the default build settings (Next.js). Click Deploy.

_or_

Use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Notes
- To replace mock data with real API data: update `data/sales.ts` to fetch from your API and normalize the data.
- Add more chart types by creating new components using Recharts (PieChart for yearly breakdown).
