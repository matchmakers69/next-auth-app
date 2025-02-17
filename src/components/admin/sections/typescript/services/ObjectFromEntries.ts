export const LICENSED_PRODUCTS_ARRAY = [
  "DISCOVERY_SELF_AWARE_PROFILE",
  "DISCOVERY_PERSONAL_PROFILE",
  "DISCOVERY_TRANSFORMATIONAL_LEADERSHIP_PROFILE",
  "DISCOVERY_FULL_CIRCLE_PROFILE",
  "DISCOVERY_EXPLORE_PROFILE",
] as const; // readonly array - typescript treats it as a readonly tuple

export type LicensedProduct = (typeof LICENSED_PRODUCTS_ARRAY)[number]; // union of all keys of LICENSED_PRODUCTS_ARRAY
//[number] is used as an index type to get the type of the elements in the array

export type ProductTypes = Record<LicensedProduct, string>;

export const LICENSED_PRODUCTS: ProductTypes = {
  DISCOVERY_SELF_AWARE_PROFILE: "Self-Aware Profile",
  DISCOVERY_PERSONAL_PROFILE: "Personal Profile",
  DISCOVERY_TRANSFORMATIONAL_LEADERSHIP_PROFILE:
    "Transformational Leadership Profile",
  DISCOVERY_FULL_CIRCLE_PROFILE: "Full Circle Profile",
  DISCOVERY_EXPLORE_PROFILE: "Explore Profile",
};

export const LICENSED_PRODUCTS_OPTIONS = Object.entries(LICENSED_PRODUCTS).map(
  ([key, value]) => ({
    value: key,
    label: value,
  }),
);

// Object.fromEntries() converts an array of key-value pairs into an object
export const INVERTED_LICENSED_PRODUCTS = Object.fromEntries(
  Object.entries(LICENSED_PRODUCTS).map(([key, value]) => [value, key]),
);
