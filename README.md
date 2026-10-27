# Apparel Store + Multi-Store CMS

A multi-store e-commerce admin platform. One admin dashboard manages several independent stores or chains, with sales statistics and charts for each one.


## Features

- Create and manage multiple stores from a single admin dashboard
- Product and inventory management per store
- Sales statistics and charts for each store
- Payment integration: [TODO: Stripe, confirm checkout flow]
- Authentication: [TODO: Clerk, confirm sign-in and protected routes]
- Automated email notifications: [TODO: confirm provider and which events send emails]
- Server-side rendering and incremental static regeneration with Next.js for fast page loads

## Tech stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Language:** [TODO: JavaScript or TypeScript. The repo description says JavaScript, but the file listing includes `tsconfig.json` and `.ts` files, so check which parts use which]
- **Database:** MySQL, accessed through Prisma ORM
- **Payments:** [TODO: Stripe]
- **Auth:** [TODO: Clerk]

## Project structure

```
app/          Next.js routes and pages
components/   Reusable UI components
hooks/        Custom React hooks
lib/          Shared utilities and data helpers
prisma/       Prisma schema and migrations
providers/    React context providers
public/       Static assets
middleware.ts Route protection
```

## Data model

The database schema lives in `prisma/schema.prisma`. Main models: [TODO: list the models, for example Store, Product, Category, Order, and how they relate to a store].

## Getting started

### Prerequisites

- Node.js 18 or later
- A MySQL database (local, or a free hosted option such as PlanetScale or Railway)

### Setup

```bash
git clone https://github.com/rishisahu8459/ecommerce-admin.git
cd ecommerce-admin
npm install
```

Create a `.env` file in the project root:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DATABASE"
[TODO: list every variable the code reads, for example Stripe and Clerk keys]
```

Never commit `.env`. It is already listed in `.gitignore`.

Create the database tables and start the dev server:

```bash
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npx prisma studio` | Browse the database in a browser |

## Deployment

The easiest option is [Vercel](https://vercel.com). Import the repository, add the environment variables, and deploy. Run `npx prisma migrate deploy` against the production database.

## Design decisions

- **One database, many stores:** every store-owned record carries a store identifier, so one admin view can switch between stores without separate deployments. [TODO: confirm this is how it's modelled]
- **Prisma for schema and migrations:** the schema is the single source of truth for the database, and migrations are
