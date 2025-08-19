# ORVO link in bio

Simple monorepo concept for link-in-bio web app.

## What's included?

This monorepo includes the following:

### Apps

- [`api`](apps/api) - Hono api server for link-in-bio
- [`web`](apps/web) - sveltekit Web app for link-in-bio

### Packages

- [`@repo/logger`](packages/logger) - Universal pino logger for link-in-bio
- [`@repo/ui`](packages/ui) - Shared UI components for link-in-bio

### Utilities

This monorepo has some additional tools already setup for you:

- TypeScript for static type checking
- Turbo for monorepo management
- Vite for building the apps
- Bunup for building the packages
- Prettier for code formatting
