import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.FAKE_SHOP_BASE_URL || 'http://localhost:3000',
    browserName: 'chromium',
  },
});

