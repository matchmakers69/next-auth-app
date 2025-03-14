# 🚀 LifeCraft

## Overview

This project is a **Next.js** application that will include three main features:

1. **Managing Home Budget** - Track expenses, set savings goals, and generate financial insights.
2. **Managing Medical History & Tests** - Store and manage medical records, test results, and appointments.
3. **Articles & Topics** - Access and organize informational content related to personal finance and health.

All features will be enhanced with **AI-powered** insights and recommendations to improve user experience and decision-making.

## 🛠️ Tech Stack

- **Framework:** Next.js (version 15)
- **Styling:** Tailwind CSS / MUI
- **State Management:** React Context | Tanstack React Query
- **Database:** PostgreSQL

## 🚀 Getting Started

### 📦 Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 18.x recommended)
- **npm**

### 🔧 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/matchmakers69/next-auth-app
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:

   - Copy `.env.example` to `.env.local`:
     ```sh
     cp .env.example .env.local
     ```
   - Update `.env.local` with your API keys and configuration.

## Environment Variables

Create a `.env.local` file in the root directory and add necessary environment variables:

```
AUTH_SECRET=generate secret
NEXTAUTH_URL="http://localhost:3000"
DATABASE_URL="postgresql://*******
NEXT_PUBLIC_APP_URL="http://localhost:3000"
...
```

### 🚀 Running the Project

- **Development Mode:**

  ```sh
  npm run dev
  ```

  Runs the app at [http://localhost:3000](http://localhost:3000).

- **Production Build & Start:**

  ```sh
  npm run build && npm start  # or yarn build && yarn start
  ```

## ✅ Testing

```sh
npm test
```

## 📁 Project Structure

```
/src ├── actions/ # Server actions and utilities
├── api/ # API-related files
├── app/ # App router-based Next.js structure
│ ├── (admin)/ # Admin dashboard pages
│ ├── (application)/ # Application-related pages
│ ├── (articles)/ # Articles and topics pages
│ ├── (authentication)/ # Auth-related pages
│ ├── (dashboard)/ # Main dashboard
├── components/ # Reusable UI components
├── config/ # Configuration files
├── constants/ # App-wide constants
├── contexts/ # React Contexts for state management
├── data/ # Static and mock data
├── fonts/ # Custom fonts
├── hooks/ # Custom React hooks
├── lib/ # API calls, utilities, helper functions
├── mdx/ # MDX content files
├── prisma/ # Prisma ORM schema and migrations
├── public/ # Static assets
├── reactQuery/ # React Query API fetching logic
├── services/ # Business logic and API services
├── stories/ # Storybook components
├── types/ # TypeScript types and interfaces
├── utils/ # Utility functions
├── auth.config.ts # Authentication configuration
```

## 🚀 Deployment

Instructions for deploying to Vercel / Netlify / AWS, e.g.:

```sh
vercel deploy
```

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Docs](https://react.dev/)

## 📜 License

MIT (or another license)
