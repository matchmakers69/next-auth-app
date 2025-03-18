import { create } from 'zustand';
import { CURRENCY } from "@prisma/client";


type CurrencyState = {
    baseCurrency: CURRENCY;
    setBaseCurrency: (_currency: CURRENCY) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
    baseCurrency: "GBP",
    setBaseCurrency: (currency) => set({ baseCurrency: currency }),
}));