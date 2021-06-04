declare const reporter: any;
export default class ReportUtils {


    public static async screenshot(description?: string) {
        const screenshotBuffer = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        await reporter.addAttachment(description, screenshotBuffer, "image/png");
    }

}