import { Browser, BrowserContext, Page, chromium } from "playwright";

describe("Search Git Repo", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/dropable")
    })
    test("my test", async () => {
        const src = await page.$("#draggable")
        const dst = await page.$("#droppable")


        // draga and drop
        const srcbound = await src?.boundingBox()
        const dstbound = await dst?.boundingBox()
        if (srcbound && dstbound) {
            await page.mouse.move(srcbound?.x, srcbound?.y, { steps: 5 })
            await page.mouse.down();
            console.log(dstbound.x, dstbound.y, dstbound.height, dstbound.width);

            await page.mouse.move(dstbound.x + 20, dstbound.y + 30,
                { steps: 5 })
            await page.mouse.up();
        }


    })
})