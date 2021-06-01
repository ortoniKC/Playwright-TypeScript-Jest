import { Page } from "playwright";

export default class LoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public get eleEmailTextField() {
        return this.page.$("input[name='email']")
        // return elename;
    }
    public get elePassTextField() {
        return this.page.$("input[name='password']")
        // return elename;
    }
    public get eleLoginBtn() {
        return this.page.$("//button[text()='LOGIN']")
        // return elename;
    }

    public async enterUserName(name: string) {
        const ele = await this.eleEmailTextField;
        await ele?.fill(name);
    }
    public async enterUserPassword(pass: string) {
        const ele = await this.elePassTextField;
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }

    public async login(username: string, pass: string) {
        await this.enterUserName(username);
        await this.enterUserPassword(pass);
        await this.clickLoginBtn();
    }
}