const { getJestConfig } = require('@storybook/test-runner');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...getJestConfig(),
  testEnvironment: 'jsdom',
};

