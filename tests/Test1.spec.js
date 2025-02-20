    const {test, expect} = require('@playwright/test')
const { title } = require('process')

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
                const Uname = page.locator("input#username");
                const CardTitles = page.locator('div.card-body a')

                await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
                console.log(await page.title());
                await Uname.fill("rahulshetty")
                await page.locator("input.form-control").nth(1).fill("learning")
                await page.locator('[name="signin"]').click()

                //await page.waitForTimeout(1000);

                console.log(await page.locator('[style*="block"]').textContent());                
                await expect(page.locator('[style*="block"]')).toContainText('Incorrect');

                await Uname.fill("")
                await Uname.fill("rahulshettyacademy")
                
                //admin or user radio button
                await page.locator(".radiotextsty").last().click();
                //popup
                await page.locator("#okayBtn").click();
                //assert
                expect(await page.locator(".radiotextsty").last().isChecked()).toBeTruthy();
                //or
                //await page.locator(".radiotextsty").last().toBeChecked();

                await page.locator("#terms").click()
                expect(await page.locator("#terms")).toBeChecked();
                //select dropdown 
                const dropdown = await page.locator("select.form-control")
                dropdown.selectOption("Teacher")                    




                //signin
                await page.locator('[name="signin"]').click()

                //Shoppage
                /*console.log(await CardTitles.first().textContent());
                console.log(await CardTitles.nth(1).textContent());
                or
                await page.waitForLoadState('networkidle'); //not stable
                or*/
                await CardTitles.last().waitFor();
                const Title = await CardTitles.allTextContents();
                console.log(Title);


                
                //await page.pause();
                await page.waitForTimeout(3000);
            
            })