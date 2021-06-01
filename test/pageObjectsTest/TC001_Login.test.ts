import { Browser, BrowserContext, Page, chromium } from "playwright";
import CommonFunctions from "../../page/common.page";
import HeaderPage from "../../page/Header.page";
import LoginPage from "../../page/Login.page";
import Env from "../../utils/environment";

describe("TC001", () => {


    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    // my pages
    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);

    })

    test("Login positive _ JIRA101", async () => {
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName('koushik1@letcode.in');
        await login.enterUserPassword('Pass123$');
        await login.clickLoginBtn();
        const toaster = await common.toaster;
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();
    });
    test("Login again", async () => {
        await login.login("koushik350@gmail.com", "Pass123$");
        expect(page.url()).toBe("https://letcode.in/")
    })
})