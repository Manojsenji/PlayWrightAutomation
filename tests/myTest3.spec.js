import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({browser})=>{
    page=await browser.newPage();
    await page.goto('https://staging.campus2community.org/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Mobile or Email Address' }).click();
    await page.getByRole('textbox', { name: 'Mobile or Email Address' }).fill('9603150200');
    await page.getByRole('textbox', { name: 'Mobile or Email Address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Pacecom@123');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
});

test.afterAll(async ()=>{
    await page.getByRole('img', { name: 'Avatar' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});


test('test', async () => {
    await page.waitForSelector("img[alt='Notifications']")
    await page.screenshot({path: 'screenshots/'+Date.now()+'Homepage.png'})
});

test('test1', async () => {
  await page.getByRole('link', { name: 'Gallery' }).click();
  const heading = page.locator(".h1.center")

  //Assertion
  await expect(heading).toBeVisible();
  const headingText = await heading.textContent();
  console.log('Assertion heading text:', headingText);

  await page.screenshot({path: 'screenshots/'+Date.now()+'gallery.png', fullPage:true})
});