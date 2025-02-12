// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { TIMEOUT } = require('dns');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter : 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'Chromium'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
});

module.exports = config

