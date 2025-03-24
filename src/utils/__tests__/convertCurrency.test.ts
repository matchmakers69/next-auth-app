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
    expect(
      convertCurrency({
        amount: 10,
        from: "GBP",
        to: "PLN",
        rates: mockedRates,
      }),
    ).toBe("50.00");
  });
  test("should convert PLN to GBP correctly", () => {
    expect(convertCurrency({
      amount: 10,
      from: "PLN",
      to: "GBP",
      rates: mockedRates,
    })).toBe("2.00");
  });
  test("should convert GBP to EUR correctly", () => {
    expect(convertCurrency({
      amount: 10,
      from: "GBP",
      to: "EUR",
      rates: mockedRates,
    })).toBe("12.00");
  });
  test("should convert PLN to GBP correctly", () => {
    expect(convertCurrency({
      amount: 10,
      from: "EUR",
      to: "GBP",
      rates: mockedRates,
    })).toBe("8.33");
  });
  test("should convert GBP to USD correctly", () => {
    expect(convertCurrency({
      amount: 10,
      from: "GBP",
      to: "USD",
      rates: mockedRates,
    })).toBe("13.00");
  });
  test("should convert USD to GBP correctly", () => {
    expect(convertCurrency({
      amount: 10,
      from: "USD",
      to: "GBP",
      rates: mockedRates,
    })).toBe("7.69");
  });

  test("should convert to PLN as selected currency", () => {
    const selectedCurrency = "PLN";
    expect(convertCurrency({
      amount: 10,
      from: "GBP",
      to: "PLN",
      rates: mockedRates,
      defaultCurrency: selectedCurrency
    })).toBe("50.00");
  });
  test("should return '0.00' if 'from' currency is missing in rates", () => {
    expect(convertCurrency({
      amount: 10,
      from: "CAD",
      to: "EUR",
      rates: mockedRates,
    })).toBe("0.00");
  });
  test("should return '0.00' if 'to' currency is missing in rates", () => {
    expect(convertCurrency({
      amount: 10,
      from: "EUR",
      to: "CAD",
      rates: mockedRates,
    })).toBe("0.00");
  });

  test("should return '0.00' for amount 0", () => {
    expect(convertCurrency({
      amount: 0,
      from: "USD",
      to: "EUR",
      rates: mockedRates
    })).toBe("0.00");
  });

  test("should use default currency if 'from' is not provided", () => {
    expect(convertCurrency({
      amount: 10,
      to: "EUR",
      rates: mockedRates,
      defaultCurrency: "USD"
    })).toBe("9.23"); // 10 USD -> EUR
  });

  test("should use GBP as default currency if 'from' is not provided and no defaultCurrency set", () => {
    expect(convertCurrency({
      amount: 10,
      to: "EUR",
      rates: mockedRates
    })).toBe("12.00"); // GBP -> EUR
  });
  test("should handle large amounts", () => {
    expect(convertCurrency({
      amount: 1000000,
      from: "GBP",
      to: "USD",
      rates: mockedRates
    })).toBe("1300000.00");
  });

  test("should handle floating point precision issues", () => {
    expect(convertCurrency({
      amount: 10.5555,
      from: "USD",
      to: "EUR",
      rates: mockedRates
    })).toBe("9.74"); // 10.5555 USD -> EUR
  });
});
