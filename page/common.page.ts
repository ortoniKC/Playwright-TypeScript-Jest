import { Page } from "playwright";

export default class CommonFunctions {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public get toaster() {
        return this.page.waitForSelector("div[role='alertdialog']")
    }

    // public async verifToastMessage() {

    // }
}