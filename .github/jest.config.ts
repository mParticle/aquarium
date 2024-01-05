import type {Config} from 'jest'

export {baseConfig}

const baseConfig: Config = {
  testEnvironment: 'jsdom',

  testRunner: "storybook-test-runner",
  testRunnerOptions: {
    play: true,
  },
}