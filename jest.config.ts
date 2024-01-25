import type { Config } from 'jest'

type StorybookTestConfig = { testRunnerOptions: { play: boolean } }

export { baseConfig }

const baseConfig: Config & StorybookTestConfig = {
  testEnvironment: 'jsdom',

  testRunner: 'storybook-test-runner',
  testRunnerOptions: {
    play: true,
  },
}
