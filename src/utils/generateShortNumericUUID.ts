import { v4 as uuidv4 } from "uuid";

export function generateShortNumericUUID() {
  const uuid = uuidv4();
  const numericHash = uuid.split("-").join(""); // Usuń myślniki
  const shortNumericUUID = parseInt(numericHash.substring(0, 15), 16); // Przekształć pierwsze 15 znaków w liczbę
  return shortNumericUUID;
}
