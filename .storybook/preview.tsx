import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import { LocalizationProvider } from "../src/components/providers/LocalizationProvider";
import React from "react";

// Default export with parameters and decorators
export default {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeAndLocalizationProvider],
} satisfies Preview;

// Define the custom decorator function
function withThemeAndLocalizationProvider(Story, context) {
  return (
    <LocalizationProvider>
      <Story {...context} />
    </LocalizationProvider>
  );
}
