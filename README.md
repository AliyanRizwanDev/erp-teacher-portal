# Education Portal Frontend

Production-style faculty operations portal built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project demonstrates a modular frontend architecture for an internal education operations system, including:

- secure-style login flow (demo mode)
- dashboard with profile summary and activity surfaces
- attendance, results, timetable, requisitions, complaints, and suggestions modules
- responsive navigation for desktop and mobile breakpoints
- reusable form controls and modal-based workflows

## Tech Stack

- React 19
- TypeScript 5
- Vite 6
- Tailwind CSS 4
- React Router
- React Hook Form
- Radix UI primitives

## Project Structure

- src/components: shared and feature UI components
- src/pages: route-level page modules
- src/config: route definitions and page routing map
- src/hooks: reusable state and pagination hooks
- src/utils: static demo data and helper collections
- public/images: static assets used by UI surfaces

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run local development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Engineering Notes

- The repository uses mocked data for presentation and workflow demonstration.
- UI composition favors reusable primitives (inputs, tables, dropdowns, dialogs, pagination).
- Route composition is centralized to keep navigation predictable and maintainable.

## License

Portfolio and demonstration use.
