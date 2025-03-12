import { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async preRender(page, context) {
    await page.waitForTimeout(500); // Allow UI animations to settle
  },
};

export default config;
