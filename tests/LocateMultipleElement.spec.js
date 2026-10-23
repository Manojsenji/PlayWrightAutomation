const {test, expect} = require('@playwright/test')

test('LocateMultipleElements',async ({page})=>{

    await page.goto('https://staging.campus2community.org/')
    
    const links = await page.$$('a')
    
    for(const link of links)
    {
        const linktext = await link.textContent()
        console.log(linktext)
    }

})