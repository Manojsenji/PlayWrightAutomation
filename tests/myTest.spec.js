import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.campus2community.org/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).fill('9603150200');
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Pacecom@123');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('img', { name: 'Avatar' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

test('test1', async ({ page }) => {
  await page.goto('https://staging.campus2community.org/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).fill('9603150200');
  await page.getByRole('textbox', { name: 'Mobile or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Pacecom@123');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
//  await page.getByText('text', { name: "Explore activities"}).click();
  await page.getByRole('link', { name: 'Gallery' }).click();
  await page.getByRole('img', { name: 'Avatar' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

});