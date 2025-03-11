import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-a11y"
  ],

  "framework": {
    "name": "@storybook/experimental-nextjs-vite",
    "options": {}
  },

  "staticDirs": [
    "../public"
  ],

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }

};
export default config;