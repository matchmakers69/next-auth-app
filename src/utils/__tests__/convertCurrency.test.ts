import { describe, expect, test } from "vitest";
import { convertCurrency } from "../convertCurrency";

describe("convertCurrency", () => {
  const mockedRates = {
    USD: 1.3,
    EUR: 1.2,
    PLN: 5.0,
    GBP: 1,
  };
  test("should convert GBP to PLN correctly", () => {
    expect(convertCurrency(10, "GBP", "PLN", mockedRates)).toBe("50.00");
  });
  test("should convert PLN to GBP correctly", () => {
    expect(convertCurrency(10, "PLN", "GBP", mockedRates)).toBe("2.00");
  });
  test("should convert GBP to EUR correctly", () => {
    expect(convertCurrency(10, "GBP", "EUR", mockedRates)).toBe("12.00");
  });
  test("should convert PLN to GBP correctly", () => {
    expect(convertCurrency(10, "EUR", "GBP", mockedRates)).toBe("8.33");
  });
  test("should convert GBP to USD correctly", () => {
    expect(convertCurrency(10, "GBP", "USD", mockedRates)).toBe("13.00");
  });
  test("should convert USD to GBP correctly", () => {
    expect(convertCurrency(10, "USD", "GBP", mockedRates)).toBe("7.69");
  });
});
