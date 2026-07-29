# Ayesha Islam — Portfolio

A recruiter-focused portfolio built with Next.js 16, React 19, TypeScript, and
the App Router.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
├── app/                  # App Router routes, root layout, metadata, and globals
├── components/
│   ├── navigation/       # The interactive client boundary
│   └── sections/         # Server-rendered portfolio sections
├── config/               # Site-wide content and links
├── content/journey/      # Local Markdown content
└── lib/                  # Server-only content loading
public/
└── images/               # Static images rendered with next/image
```

`src/app/page.tsx` defines the home route. `src/app/layout.tsx` owns shared
navigation, side links, fonts, global metadata, and the single `<main>`
landmark. Components are Server Components by default; only the interactive
header declares `'use client'`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```
