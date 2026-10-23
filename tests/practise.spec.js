import {test} from '@playwright/test';

test('practise', async({page})=>{
    await page.goto("https://www.amazon.com/");
    const product = page.getByRole('searchbox', { name: 'Search Amazon' });
    await product.fill("yoga mat");
    await page.locator('#nav-search-submit-button').click();
    const productLocator = page.locator(".a-link-normal h2 span");
    //console.log(await productLocator.nth(0).textContent());
    //await productLocator.nth(0).click();
    await productLocator.first().textContent();
    console.log(await productLocator.allTextContents());
    console.log(await productLocator.count());
    //await page.pause();
})