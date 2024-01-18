import type { Config } from 'jest'

type StorybookTestConfig = { testRunnerOptions: { play: boolean } }

const baseConfig: Config & StorybookTestConfig = {
  testEnvironment: 'jsdom',

  testRunner: 'storybook-test-runner',
  testRunnerOptions: {
    play: true,
  },
}

export { baseConfig }
