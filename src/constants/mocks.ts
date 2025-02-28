import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";
import { Post } from "../types";

export const SUBSCRIPTION_BILLING_OPTIONS: SUBSCRIPTION_BILLING_PERIOD[] = [
  "MONTHLY",
  "YEARLY",
  "WEEKLY",
];

export const SUBSCRIPTION_CATEGORIES = [
  "ENTERTAINMENT",
  "HOUSE",
  "CAR",
  "FITNESS",
  "EDUCATION",
  "HOBBY",
  "OTHER",
];

export const INCOME_CATEGORIES = ["SALARY", "BONUS", "REFUNDS", "OTHER"];
export const EXPENSE_CATEGORIES = [
  "HOUSING",
  "HOBBY",
  "HOLIDAYS",
  "FOOD",
  "INSURANCES",
  "FITNESS",
  "EDUCATION",
  "OTHER",
];

export const CURRENCIES = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "PLN",
    label: "zł",
  },
];

export const CURRENCY = {
  EUR: "EUR",
  USD: "USD",
  GBP: "GBP",
  PLN: "PLN",
};

export const MOCKED_POSTS: Post[] = [
  {
    title: "Introducing AI SDK 3.0 with Generative UI support",
    description:
      "Stream React Components from LLMs to deliver richer user experiences.",
    body: "",
    date: "2024-03-01T10:00:00.000Z",
    slug: "",
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: "https://vercel.com/blog/ai-sdk-3-generative-ui",
    type: "post",
  },
  {
    title: "Introducing the Vercel AI SDK",
    description:
      "An interoperable, streaming-enabled, edge-ready software development kit for AI apps built with React and Svelte.",
    body: "",
    date: "2023-06-15T13:00:00.000Z",
    slug: "",
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: "https://vercel.com/blog/introducing-the-vercel-ai-sdk",
    type: "post",
  },
  {
    title: "Improving the accessibility of our Next.js site",
    description:
      "We've made some improvements to the accessibility of our Next.js site. Here's how we did it.",
    body: "",
    date: "2022-09-30T13:00:00.000Z",
    slug: "",
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: "https://vercel.com/blog/improving-the-accessibility-of-our-nextjs-site",
    type: "post",
  },
];

export const MOCKED_BUDGET = [
  {
    id: 1,
    attributes: {
      amount: 600,
      category: "housing",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 2,
    attributes: {
      amount: 500,
      category: "food",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 3,
    attributes: {
      amount: 150,
      category: "transportation",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 4,
    attributes: {
      amount: 1000,
      category: "savings",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
];

export const MOCKED_EXPENSES = [
  {
    id: 1,
    attributes: {
      amount: 150,
      description: "Bottom bracket",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 2,
    attributes: {
      amount: 500,
      description: "food",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 3,
    attributes: {
      amount: 70,
      description: "New chain",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 4,
    attributes: {
      amount: 100,
      description: "Supplements",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
];

export const MOCKED_INCOMES = [
  {
    id: 1,
    attributes: {
      amount: 3800,
      description: "Insights salary",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
  {
    id: 2,
    attributes: {
      amount: 90,
      description: "Refund from new balance",
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
];

export const MOCKED_BUDGET_LIMIT = [
  {
    id: 1,
    attributes: {
      limit: 1000,
      createdAt: "2024-05-30T15:46:33.071Z",
      updatedAt: "2024-05-30T17:17:33.997Z",
      publishedAt: "2024-05-30T17:17:33.616Z",
    },
  },
];
