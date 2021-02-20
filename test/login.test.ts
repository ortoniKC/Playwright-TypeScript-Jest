import { chromium } from "playwright";
describe('Launch Browser', () => {

    test('Recorded script', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();

        // Open new page
        const page = await context.newPage();

        // Go to https://letcode.in/
        await page.goto('https://letcode.in/');

        // Click text=/.*Log in.*/
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/signin' }*/),
            page.click('text=/.*Log in.*/')
        ]);

        // Click input[name="email"]
        await page.click('input[name="email"]');

        // Fill input[name="email"]
        await page.fill('input[name="email"]', 'koushik350@gmail.com');

        // Press Tab
        await page.press('input[name="email"]', 'Tab');

        // Fill input[name="password"]
        await page.fill('input[name="password"]', 'Pass123$');

        // Click //button[normalize-space(.)='LOGIN']
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
            page.click('//button[normalize-space(.)=\'LOGIN\']')
        ]);

        // Click text="Let's Go"
        await page.click('text="Let\'s Go"');
        // assert.equal(page.url(), 'https://letcode.in/test');

        // Click //div[5]/div/div[3]/div/div[3]/button[normalize-space(.)='Get me in!']
        await page.click('//div[5]/div/div[3]/div/div[3]/button[normalize-space(.)=\'Get me in!\']');
        // assert.equal(page.url(), 'https://letcode.in/forms');

        // Click input[placeholder="Text input"]
        await page.click('input[placeholder="Text input"]');

        // Fill input[placeholder="Text input"]
        await page.fill('input[placeholder="Text input"]', 'koushik');

        // Press Tab
        await page.press('input[placeholder="Text input"]', 'Tab');

        // Fill //div[normalize-space(.)='Last Name']/div/input[normalize-space(@placeholder)='Text input' and normalize-space(@type)='text']
        await page.fill('//div[normalize-space(.)=\'Last Name\']/div/input[normalize-space(@placeholder)=\'Text input\' and normalize-space(@type)=\'text\']', 'chatterjee');

        // Click //div[normalize-space(.)='Email']
        await page.click('//div[normalize-space(.)=\'Email\']');

        // Fill input[placeholder="Email input"]
        await page.fill('input[placeholder="Email input"]', 'koushik350@gmail.com');

        // Click input[placeholder="Phone Number"]
        await page.click('input[placeholder="Phone Number"]');

        // Fill input[placeholder="Phone Number"]
        await page.fill('input[placeholder="Phone Number"]', '9999999999');

        // Click input[placeholder="Address Line-1"]
        await page.click('input[placeholder="Address Line-1"]');

        // Fill input[placeholder="Address Line-1"]
        await page.fill('input[placeholder="Address Line-1"]', 'adyar');

        // Click input[placeholder="Address Line-2"]
        await page.click('input[placeholder="Address Line-2"]');

        // Fill input[placeholder="Address Line-2"]
        await page.fill('input[placeholder="Address Line-2"]', 'chennai');

        // Click input[placeholder="State"]
        await page.click('input[placeholder="State"]');

        // Fill input[placeholder="State"]
        await page.fill('input[placeholder="State"]', 'TN');

        // Click input[placeholder="Postal-Code"]
        await page.click('input[placeholder="Postal-Code"]');

        // Fill input[placeholder="Postal-Code"]
        await page.fill('input[placeholder="Postal-Code"]', '600113');

        // Fill input[name="dob"]
        await page.fill('input[name="dob"]', '1994-12-04');

        // Check input[type="checkbox"]
        await page.check('input[type="checkbox"]');

        // Fill input[name="gender"]
        //   await page.fill('input[name="gender"]', 'on');

        // Click text=/.*Male.*/
        await page.click('text=/.*Male.*/');

        // Click input[type="submit"]
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/forms' }*/),
            page.click('input[type="submit"]')
        ]);

        // Click text=/.*Sign out.*/
        await page.click('text=/.*Sign out.*/');
        // assert.equal(page.url(), 'https://letcode.in/');

        // Close page
        await page.close();

        // ---------------------
        await context.close();
        await browser.close();
    })


    xtest('Open letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://letcode.in/');
        await page.click("text=Log in");
        await page.fill("input[name='email']", 'koushik350@gmail.com');
        await page.fill("input[name='password']", 'Pass123$');
        await page.click('button:text("LOGIN")')
        await page.click('"Sign out"');
        await browser.close()
    })

})