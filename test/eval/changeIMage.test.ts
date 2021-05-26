import { Browser, BrowserContext, chromium, ElementHandle, Page } from "playwright"

describe("Learn how to handle input fields", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/")
    })
    test("change image", async () => {
        const ele = await page.$("img")
        ele?.evaluate(ele => ele.src = "https://avatars.githubusercontent.com/u/58769833?v=4")
        // console.log(text);
    })
})