# 5 Minute Content landing page

A responsive direct-response landing page built with Next.js and ready for Vercel.

## Before you publish

The page is complete, but the purchase buttons need your real checkout URL. Create a checkout link in Stripe, Gumroad, Lemon Squeezy, ThriveCart, or your preferred payment platform, then add it in Vercel as:

```text
NEXT_PUBLIC_CHECKOUT_URL=https://your-checkout-link.com
```

Without that environment variable, the buttons scroll visitors to the offer section so the page remains usable during review.

## Run locally

You need Node.js 22 or newer.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deploy with the Vercel dashboard

1. Put this folder in a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Vercel will detect Next.js. Keep the default build settings.
4. Under **Environment Variables**, add `NEXT_PUBLIC_CHECKOUT_URL` and paste your checkout link.
5. Select **Deploy**.
6. In **Settings → Domains**, attach your custom domain if you have one.

## Deploy with the Vercel CLI

```bash
npx vercel
npx vercel env add NEXT_PUBLIC_CHECKOUT_URL production
npx vercel --prod
```

## Main files

- `app/page.tsx` — page structure and sales copy
- `app/globals.css` — complete desktop and mobile styling
- `app/layout.tsx` — site metadata
- `public/` — supplied product visuals

## Validation

```bash
pnpm build
```

The current project passes a production Next.js build.
