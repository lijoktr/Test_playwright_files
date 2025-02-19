    const {test, expect} = require('@playwright/test')

    //test.only
    test('page test1 code', async ({page})=>
        {

            await page.goto("https://www.google.co.uk/")
            await expect(page).toHaveTitle("Google")


        })

    test('browser context test1 code', async ({browser})=>
            {
                const context = await browser.newContext();
                const page = await context.newPage();
                await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
                console.log(await page.title());
                await page.locator("input#username").fill("rahulshetty")
                await page.locator("input.form-control").nth(1).fill("learning")
                await page.locator('[name="signin"]').click()

                await page.waitForTimeout(1000);

                console.log(await page.locator('[style*="block"]').textContent());
                
                await expect(page.locator('[style*="block"]')).toContainText('Incorrect');

                await page.waitForTimeout(3000);
            
            })