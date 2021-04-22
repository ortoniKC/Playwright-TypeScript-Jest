import { Browser, BrowserContext, Page, chromium } from "playwright";

describe("Frames handling concept", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/frame")
    })
    test("Interact with frames", async () => {
        const frame = page.frame({ name: "firstFr" });
        // frame?.fill("")
        if (frame != null) {
            await frame.fill("input[name='fname']", "Koushik");
            await frame.fill("input[name='lname']", "Chatterjee");

            // inner frame
            const frames = frame.childFrames();
            console.log('No. of inner frames: ' + frames.length);
            if (frames != null)
                await frames[0].fill("input[name='email']", "koushik@mail.com")
            else {
                console.log("Wrong frame");
            }
            const parent = frames[0].parentFrame()
            // await frame.fill("input[name='lname']", "Letcode");
            await parent?.fill("input[name='lname']", "Youtube");
        } else throw new Error("No such frame")
    })
})