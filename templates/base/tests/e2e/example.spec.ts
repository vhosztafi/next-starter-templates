import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  // Check that the main heading is visible
  await expect(
    page.getByRole('heading', { name: /welcome to next\.js starter/i })
  ).toBeVisible()

  // Check that the description text is present
  await expect(
    page.getByText(/a modern next\.js starter template/i)
  ).toBeVisible()

  // Check that buttons are present
  await expect(page.getByRole('button', { name: /get started/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /learn more/i })).toBeVisible()
})

test('health endpoint works', async ({ page }) => {
  await page.goto('/health')

  await expect(page.getByText(/health check/i)).toBeVisible()
  await expect(page.getByText(/✅ application is running/i)).toBeVisible()
})
