import CommonFunctions from "../../page/common.page";
import HeaderPage from "../../page/Header.page";
import LoginPage from "../../page/Login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.cred.json";
import { Page } from "playwright";

declare const page: Page;

describe("TC001", () => {
    // my pages
    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;

    beforeAll(async () => {
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })

    test("Login positive _ JIRA101", async () => {
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName(data.email);
        await login.enterUserPassword(data.pass);
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();
    });
    // test("Login again", async () => {
    //     await login.login("koushik350@gmail.com", "Pass123$");
    //     expect(page.url()).toBe("https://letcode.in/")
    // })
})