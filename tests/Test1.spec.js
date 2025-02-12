const {test} = require('@playwright/test')

test('browser context test1 code', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

})

//test.only
test('page test1 code', async ({page})=>
    {

        await page.goto("https://www.google.co.uk/")
    
    })