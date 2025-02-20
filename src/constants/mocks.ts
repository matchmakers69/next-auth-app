import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";
import { Post } from "../types";

export const SUBSCRIPTION_BILLING_OPTIONS: SUBSCRIPTION_BILLING_PERIOD[] = [
  "MONTHLY",
  "YEARLY",
  "WEEKLY",
];

export const SUBSCRIPTION_CATEGORIES = [
  "ENTERNTAINMENT",
  "SPORT",
  "HOME",
  "CAR",
  "EDUCATION",
  "HOBBY",
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
    title: 'Introducing AI SDK 3.0 with Generative UI support',
    description:
      'Stream React Components from LLMs to deliver richer user experiences.',
    body: '',
    date: '2024-03-01T10:00:00.000Z',
    slug: '',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://vercel.com/blog/ai-sdk-3-generative-ui',
    type: 'post',
  },
  {
    title: 'Introducing the Vercel AI SDK',
    description:
      'An interoperable, streaming-enabled, edge-ready software development kit for AI apps built with React and Svelte.',
    body: '',
    date: '2023-06-15T13:00:00.000Z',
    slug: '',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://vercel.com/blog/introducing-the-vercel-ai-sdk',
    type: 'post',
  },
  {
    title: 'Improving the accessibility of our Next.js site',
    description:
      "We've made some improvements to the accessibility of our Next.js site. Here's how we did it.",
    body: '',
    date: '2022-09-30T13:00:00.000Z',
    slug: '',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://vercel.com/blog/improving-the-accessibility-of-our-nextjs-site',
    type: 'post',
  },
]
