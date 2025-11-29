import { chromium, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async () => {


    const browser1 = await chromium.launch({ channel: "msedge" });
    const context1 = await browser1.newContext();//Stage 2 creating am isolated environment named as context
    const page1 = await context1.newPage(); //Stage 3 creating a page instance to load a URL


    await page1.goto(`http://leaftaps.com/opentaps/control/main`)


    await page1.locator(`#username`).fill(`democsr`);
    await page1.locator(`#password`).fill(`crmsfa`);
    await page1.locator(`.decorativeSubmit`).click();


    await page1.waitForTimeout(3000)
})