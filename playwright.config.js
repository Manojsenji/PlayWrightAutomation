// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

// Generate IST timestamp for reports (DD-MM-YYYY_HH-mm-ss)
const now = new Date();
const timestampIST = now.toLocaleString('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour12: false
})
  .replace(/\//g, '-')     // replace / with -
  .replace(/,/, '')        // remove comma
  .replace(/:/g, '-')      // replace : with -
  .replace(/\s+/g, '_');   // replace space with _

// Final folder structure: ./playwright-reports/<date_time>
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // reporter: [
  //   ['html', { outputFolder: path.join(__dirname, 'playwright-reports', timestampIST), open: 'never' }]
  // ],
  
reporter: [
  ['list'],

  ['html', {
    outputFolder: path.join(
      __dirname,
      'playwright-reports',
      timestampIST
    ),
    open: 'never'
  }],

  ['junit', {
    outputFile: 'test-results/results.xml'
  }]
],


  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    headless: true,
    viewport: null,  // disables default 1280x720 size to allow full screen
    launchOptions: {
      slowMo: 100,   // slows down actions
      args: ['--window-size=1920,1080'],// maximize the window
    },

  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
