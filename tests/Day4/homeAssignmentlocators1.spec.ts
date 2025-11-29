import {chromium, test} from "@playwright/test";
import { type } from "os";

// to get title and value from table
async function gettablevalue(page: any, inputAttribute: string) {
    const value = await page
        .locator('tr', { hasText: `${inputAttribute}` })
        .locator('td >> nth=1')
        .innerText();
    
    console.log(`Input Attribute ${inputAttribute} is ${value}`);
    return value;
}
// to fill value in text field
async function fillFieldValue(page :any,locator : string,fillvalue:string) {

    const textField =await page.locator(locator).isVisible();
    if (textField)
    {
        await page.locator(locator).fill(fillvalue);
        console.log(`The text field : ${locator}value ${fillvalue}`);
        
    } else {
        console.log(`Text field ${locator} not found`);
    }
    return textField;
}

// to click on a link
async function clickLink(page:any, linkval :string){

    const link = await page.getByText(linkval).isVisible();
    if (link)
    {
        await page.getByText(linkval).click();
    } else {
        console.log("Link not found");
    }
    return link;
}
// to verify if text link exist
async function verifyTextLink(page:any, textlinkval:string){

    const textlink = await page.getByText(textlinkval).isVisible();
    if (textlink)
    {
        console.log(`The link ${textlinkval} is present`);
    } else {
        console.log("Text link not found");
    }
    return textlink;
}

// to verify if title exist

async function verifyTitle(page:any){

    const title = await page.title();
    if (title)
    {
        console.log(`The title ${title} is present`);
    } else {
        console.log("Title not found");
    }
    return title;
}

test("Create a lead", async ()=>
{

        const browser = await chromium .launch({channel:"chrome",headless :false});
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("http://leaftaps.com/opentaps/control/main");

        await page.waitForTimeout(5000);

        await fillFieldValue(page ,"#username","Demosalesmanager");
        await fillFieldValue(page ,"#password","crmsfa");
        await page.waitForTimeout(5000);
        await page.locator(".decorativeSubmit").click();
        await verifyTitle(page);
        await clickLink(page, "CRM/SFA");


      
                     await page.click('a[href="/crmsfa/control/leadsMain"]');
                     await page.click(`a[href="/crmsfa/control/createLeadForm"]`);
                     await page.waitForTimeout(5000);
                     await fillFieldValue(page ,"#createLeadForm_companyName","Testleaf");
                     await fillFieldValue(page, "#createLeadForm_firstName", "Anu");
                     await fillFieldValue(page, "#createLeadForm_lastName", "G");
                     await fillFieldValue(page, "#createLeadForm_personalTitle", "ms");
                     await fillFieldValue(page, "#createLeadForm_generalProfTitle", "Tester");
                     await fillFieldValue(page, "#createLeadForm_annualRevenue", "100000");
                     await fillFieldValue(page, "#createLeadForm_departmentName", "IT");
                     await fillFieldValue(page, "#createLeadForm_primaryPhoneNumber", "23456789");
                     await page.locator('input[type="submit"][value="Create Lead"]').click();
                     await page.waitForTimeout(5000);
                     await verifyTitle(page);
                 
                        
                        // Use the gettablevalue function to extract table data
                        await gettablevalue(page, "First Name");
                        await gettablevalue(page, "Last Name");
                        await gettablevalue(page, "Company Name");
                        await gettablevalue(page, "Status");

                    
               
})