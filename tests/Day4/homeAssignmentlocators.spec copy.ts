
import {chromium, test} from "@playwright/test";
import { type } from "os";

async function gettablevalue(page: any, inputAttribute: string) {
    const value = await page
        .locator('tr', { hasText: `${inputAttribute}` })
        .locator('td >> nth=1')
        .innerText();
    
    console.log(`Input Attribute ${inputAttribute} is ${value}`);
    return value;
}

async function fillFieldValue(page :any,locator : string,fillvalue:string) {

    const textField =await page.locator(locator).isVisible();
    if (textField)
    {
        await page.locator(locator).fill(fillvalue);
    } else {
        console.log("Text field not found");
    }
}

async function clickLink(page:any, linkval :string){

    const link = await page.getByText(linkval).isVisible();
    if (link)
    {
        await page.click(linkval)
    } else {
        console.log("Link not found");
    }
}

async function verifyTextLink(page:any, textlinkval:string){

    const textlink = await page.getByText(textlinkval).isVisible();
    if (textlink)
    {
        await page.getByText(textlinkval).click();
    } else {
        console.log("Text link not found");
    }

}

test("To verify locators", async ()=>
{

        const browser = await chromium .launch({channel:"chrome",headless :false});
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("http://leaftaps.com/opentaps/control/main");

        await page.waitForTimeout(5000);

        await page.locator("#username").fill("Demosalesmanager");
        await page.locator("#password").fill("crmsfa");
        await page.waitForTimeout(5000);
        const visible = await page.locator(".decorativeSubmit").isVisible();
         if (visible)
         {
                page.locator (".decorativeSubmit").click();
                await page.waitForTimeout(5000);
                const title =page.getByText("Demo Sales Manager");
            if (title)
            {
            //page.getByText("CRM/SFA").click();
                console.log("login successful");
                const crm = page.locator("text:CRM/SFA");
                if (crm)
                {
                    await page.getByText("CRM/SFA").click();
                }else{
                console.log("CRM/SFA link not found");
                
                }

                await page.goto("http://leaftaps.com/crmsfa/control/viewLead?partyId=10212");
                    await page.waitForTimeout(5000);
                   /* await page.click('a[href="/crmsfa/control/leadsMain"]');
                    await page.click(`a[href="/crmsfa/control/createLeadForm"]`);
                    //await page.waitForTimeout(5000);
                    await page.locator("#createLeadForm_companyName").fill("Testleaf");
                    await page.locator("#createLeadForm_firstName").fill("Anu");
                    await page.locator("#createLeadForm_lastName").fill("G");
                    await page.locator("#createLeadForm_personalTitle").fill("ms");
                    await page.locator("#createLeadForm_generalProfTitle").fill("Tester");
                    await page.locator("#createLeadForm_annualRevenue").fill("100000");
                    await page.locator("#createLeadForm_departmentName").fill("IT");
                    await page.locator("#createLeadForm_primaryPhoneNumber").fill("23456789");
                    await page.locator('input[type="submit"][value="Create Lead"]').click();
                    await page.waitForTimeout(5000);*/
                    const title1 = await page.title();
                    console.log(title1);
                    if (title1)
                    {
                        console.log("Lead created successfully");
                        
                        // Use the gettablevalue function to extract table data
                        await gettablevalue(page, "First Name");
                        await gettablevalue(page, "Last Name");
                        await gettablevalue(page, "Company Name");
                        await gettablevalue(page, "Status")
                    }else{
                        console.log("Lead not created");
                    }
               }   }
})