import type { Config } from "jest";

export { baseConfig };

type StorybookTestConfig = { testRunnerOptions: { play: boolean } };

const baseConfig: Config & StorybookTestConfig = {
  testEnvironment: "jsdom",

  testRunner: "storybook-test-runner",
  testRunnerOptions: {
    play: true,
  },
};
