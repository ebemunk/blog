"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
async function run() {
    const browser = await puppeteer_1.default.launch({ headless: true });
    for (let url of ['http://localhost:1234', 'http://localhost:1234?polar']) {
        const page = await browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 6000,
        });
        await page.setViewport({ width: 2016, height: 2016 });
        await page.screenshot({
            path: `./ss-${url.includes('polar') ? 'polar' : 'normal'}.png`,
            fullPage: !url.includes('polar'),
        });
        await page.close();
    }
    await browser.close();
}
run();
//# sourceMappingURL=takeSS.js.map