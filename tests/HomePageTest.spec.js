import { test, expect } from '@playwright/test'

test('Home page - Login flow', async ({ page }) => {
    // Open Home Page
    await page.goto('https://staging.campus2community.org/')

    //Verify Page Title
    await expect(page).toHaveTitle('Campus 2 Community')
    console.log('Page title is:', await page.title())

    //Verify Page URL
    await expect(page).toHaveURL('https://staging.campus2community.org/')
    console.log('Page URL is:', page.url())

    //Click on Login
    await page.locator("//div[@class='header ']//span[contains(text(),'Login')]").click()

    //Fill login form
    await page.fill("#new_login_user_name", '9603150200')
    await page.fill("#login_password", 'Pacecom@123')

    //Click Login button
    await page.click("//button[normalize-space()='Login']")

    //Click on profilr image
    const profileMenu = page.locator("//div[@class='header-menu']//div[contains(@class,'header')]//img[@alt='Avatar']")
    await expect(profileMenu).toBeVisible()
    await profileMenu.click()

    //verify logout option
    const logoutButton = page.locator("//a[normalize-space()='Logout']")
    await expect(logoutButton).toBeVisible()

    console.log("Logout option is visible after login")
    await page.click("//a[normalize-space()='Logout']")

    await page.waitForTimeout(5000)
});
