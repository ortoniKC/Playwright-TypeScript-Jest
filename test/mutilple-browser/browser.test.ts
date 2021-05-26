import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";

describe("Launch local browser", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await firefox.launch({
            headless: false,
            // channel: "msedge"
            // executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/")
    })
    test("Goto letcode and verify title as LetCode with Koushik", async () => {
        const title = await page.title();
        console.log(title);
        expect(title).toBe("LetCode with Koushik")
    })
})