/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />
module.exports = {
    browsers: ["chromium"],
    exitOnPageError: false,
    launchOptions: {
        headless: true
    },
    contextOptions: {
        recordVideo: {
            dir: "<rootDir>/videos/"
        }
    }

}