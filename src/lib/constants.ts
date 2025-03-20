import { v4 as uuidv4 } from "uuid";
const EXCHANGE_RATES_API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATES_API_KEY;
const BASE_CURRENCY = "GBP";
export const SELECTED_CURRENCIES = "USD,EUR,GBP,PLN";

export const EXCHANGE_API_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${EXCHANGE_RATES_API_KEY}&base_currency=${BASE_CURRENCY}`;

export const defaultRates = {
  USD: 1.2987010477,
  EUR: 1.1888570553,
  GBP: 1,
  PLN: 4.9747138602,
};

export const adminSidebarNavigation = [
  {
    id: uuidv4(),
    label: "Home",
  },
  {
    id: uuidv4(),
    label: "Dashboard",
  },
  {
    id: uuidv4(),
    label: "Blog",
  },
];

export const sidebarNavigation = [
  {
    id: uuidv4(),
    label: "Home",
  },

  {
    id: uuidv4(),
    label: "Settings",
  },
  {
    id: uuidv4(),
    label: "Topics",
  },
  {
    id: uuidv4(),
    label: "Subscriptions",
  },
  {
    id: uuidv4(),
    label: "Finance tracker",
    children: [
      { id: uuidv4(), label: "Overview" },
      { id: uuidv4(), label: "Transactions" },
      { id: uuidv4(), label: "Cashflow" },
    ],
  },
];

export const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.5 },
};

export const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

export const framerText = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const acceptedDocumentTypes = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "application/rtf": [".rtf"],
  "text/plain": [".txt"],
  "image/tiff": [".tif", ".tiff"],
  "image/jpeg": [".jpeg", ".jpg"],
  "image/png": [".png"],
  "application/vnd.oasis.opendocument.text": [".odt"],
  "image/heic": [".heic"],
  "message/rfc822": [".eml"],
};

export default acceptedDocumentTypes;
