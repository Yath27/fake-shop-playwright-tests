import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/')
})

test('home page loads', async ({ page }) => {
  const response = await page.goto('/');

  expect(response && response.ok()).toBeTruthy();
  await expect(page).toHaveTitle('fake-shop');
});

test("Sample data load", async ({page}) => {
  await page.locator("(//*[normalize-space() = 'Load sample data'])[1]").click()
  await expect(page.locator("//*[normalize-space() = 'Developer experience']")).toBeVisible()
})

test("create shops", async ({page}) => {
  await page.locator("(//*[normalize-space() = 'Shops'])[1]").click()
  await page.getByPlaceholder("Demo storefront").fill("Phone Shop")
  await page.getByPlaceholder("Customer-facing label").fill("ZS Phones")
  await page.getByPlaceholder("Short shop description").fill("Best in world")
  await page.getByPlaceholder("Example: apparel").fill("Electronics")
  await page.getByPlaceholder("Example: emerald").fill("Green")
  await page.getByLabel('Scenario type').selectOption("digital-goods")
  await page.locator("(//*[@type = 'button'])[1]").click()
  await expect(page.locator("//*[normalize-space() = 'Phone Shop']")).toBeVisible()
})