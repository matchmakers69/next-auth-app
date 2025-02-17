import { v4 as uuidv4 } from "uuid";

export const adminSidebarNavigation = [
  {
    id: uuidv4(),
    label: "Home",
  },

  {
    id: uuidv4(),
    label: "Admin",
  },

  {
    id: uuidv4(),
    label: "Typescript",
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
  }
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
