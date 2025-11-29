import {chromium, test, webkit } from "@playwright/test";
import { channel } from "diagnostics_channel";


test(`Test to launch a browser`, async ()=>{


    //browser
    //context
    //page


    
    const browser1 = await chromium.launch({channel:"msedge"});
// Step1 launchinf the browser and await key word make's sure that the browser has successfully invoked
//Promise 3 stages :
/* 1. Pending
2. Resolved
3. Rejected */


    const context1 = await browser1.newContext();//Stage 2 creating am isolated environment named as context
    const page1   = await context1.newPage(); //Stage 3 creating a page instance to load a URL


    await page1.goto(`http://leaftaps.com/opentaps/control/main`)


      const browser2 = await webkit.launch();
    const context2 = await browser2.newContext();//Stage 2 creating am isolated environment named as context
    const page2   = await context2.newPage(); //Stage 3 creating a page instance to load a URL


    await page1.goto(`http://leaftaps.com/opentaps/control/main`)


    await page2.goto(`https://www.amazon.in/`);


    const url = page1.url()
    console.log(url);


     const url2 = page2.url()
    console.log(url2);
    


})






