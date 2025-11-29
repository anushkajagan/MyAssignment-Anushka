//New Browser Launch


import {chromium, firefox, test} from  "@playwright/test";

test(`To launch a browser`, async()=>{

    // To launch a browser
    const browser = await chromium.launch({channel:"msedge",headless : false});
    
    // To launch a context
    const context = await  browser.newContext();

    //To launch a page
    const page = await context.newPage();

    //To navigate to a url
    await page.goto("https://amazon.com");

    console.log(`The playwright open the page : ${await page.title()}`)

    //Wait for the browser to close.
    await page.waitForTimeout(3000);


    // second browser

    const browser2 = await firefox.launch({headless :true});
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://google.com");
    console.log(`The playwright open the page 2 : ${page2.url()}`);

    
    await page2.waitForTimeout(3000);

} )