# MAK Enterprises

Bilingual (EN/FR) marketing site for MAK Enterprises, a solution architecture company.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- No backend — static, deployable to Vercel as-is

## Structure

```
app/
  layout.tsx              root layout
  page.tsx                redirects "/" to "/en"
  [locale]/
    layout.tsx             per-locale <html lang>, SEO metadata (title, description, OG, canonical, hreflang)
    page.tsx                assembles all sections for the given locale
  globals.css
lib/
  content.ts                single source of truth for all EN/FR copy — edit here, not in components
components/
  Nav.tsx, Hero.tsx, Problem.tsx, Thesis.tsx, Method.tsx,
  Solutions.tsx, Diagnostics.tsx, Signature.tsx, Evidence.tsx,
  WhoThisIsFor.tsx, Engagement.tsx, FinalCta.tsx, Footer.tsx
```

Content and layout are fully separated: every string on the site lives in `lib/content.ts`
under `content.en` / `content.fr`. To edit copy, edit that file — never hardcode text in a
component.

## Design system (approved Phase 2)

Tailwind tokens are defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0F1215` | Dark section background |
| `paper` | `#F7F6F3` | Light section background |
| `structure` | `#3A4148` | Secondary text, borders |
| `signal` | `#C4491F` | Single accent — reserved for key ideas, never decorative |
| `line` / `line-dark` | `#D8D5CE` / `#2A3036` | Hairlines on light / dark sections |

No rounded corners, no gradients, no card shadows. The Evidence Ledger (`Evidence.tsx`) is
deliberately styled differently from the Solutions catalogue grid (`Solutions.tsx`) — do not
merge their visual treatments.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (redirects to `/en`). French version at `/fr`.

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub (see below).
2. In Vercel, "Add New Project" → import the GitHub repo.
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Deploy. Production domain can later be pointed at a custom domain in Vercel's Domains settings.

Current staging target: `makenterprises-solutions.vercel.app` (update the canonical URLs in
`app/[locale]/layout.tsx` if the final domain differs).

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit — MAK Enterprises bilingual site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Production checklist

- [ ] Confirm final domain and update canonical / OG URLs in `app/[locale]/layout.tsx`
- [ ] Add real favicon / OG image assets to `public/`
- [ ] Verify Cal.com link (`finalCta.calLink` in `lib/content.ts`) is live
- [ ] Run `npm run build` locally to confirm no type errors before deploying
- [ ] Test `/en` and `/fr` on mobile widths (375px) and desktop (1440px)
