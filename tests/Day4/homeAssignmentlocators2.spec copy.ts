
import {chromium, test} from "@playwright/test"

// to get title and value from table
async function clicktablevalue(page: any, inputAttribute: string) {
    const value = await page
        .locator('tr', { hasText: `${inputAttribute}` })
        .locator('td >> nth=0')
        .innerText();
    console.log(`Input Attribute ${inputAttribute} is ${value}`);
    return value;
}

// to update text field
async function updateEditField(page: any, fieldName : string, value: string) {
   const field = await page.locator(fieldName).isVisible();
   if (!field)
   {
       console.log("Field not found");
   }else
   {    await page.locator(fieldName).fill(value);
    console.log(`Updated ${fieldName} → ${value}`);}

}

// to fill value in text field
async function fillFieldValue(page :any,locator : string,fillvalue:string) {

    const textField =await page.locator(locator).isVisible();
   // const locatorCount = await page.locator(locator).count();
    if (textField)
    {
        await page.locator(locator).fill(fillvalue);
    } else {
        console.log("Text field not found");
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

test("Edit a lead", async ()=>{

    const browser = await chromium.launch({channel:"chrome",headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(3000);

        await fillFieldValue(page ,"#username","Demosalesmanager");
        await fillFieldValue(page ,"#password","crmsfa");
        await page.waitForTimeout(5000);
        await page.locator(".decorativeSubmit").click();
        await verifyTitle(page);
        await clickLink(page, "CRM/SFA");
        await page.waitForTimeout(5000);

                    await page.click('a[href="/crmsfa/control/leadsMain"]');
                    await page.click('a[href="/crmsfa/control/findLeads"]');
                    await page.waitForTimeout(5000);
                    await page.locator('input[name="firstName"][id=ext-gen248]').fill("Anu");
                    //await fillFieldValue(page,".firstName","Anu")
                    await page.locator('button:has-text("Find Leads")').click();
                    await page.waitForTimeout(5000);
                    //await page.locator('table tbody tr td a').first().click();
                   // const linkval =await page.getByRole('link').first().innerText();
                    //console.log(linkval);
                    //const linkval =await page.locator('table a').first().innerText();
                    //onst linkval =await page.locator('table a', {hasText: 'Anu' }).first().innerText();
                    
                   // const linkvalue = await page.locator('table tr td : nth-child(1) a').first().innerText();
                    //console.log(linkvalue);
                   //await page.locator('a.linktext', { hasText: '10211' }).first().click();
                   const table = page.locator('table.x-grid3-row-table');

// get all links inside the table
                    await table.locator('a.linktext').first().click();

                    //console.log("First link text:", linkText);
                    
                  

                    

                  // const leadId = await page.locator('table tr td:nth-child(1) a').first().innerText();
                  // console.log("First Lead ID:", leadId);


                    //await page.waitForTimeout(5000)
                    await page.locator('a.subMenuButton',{hasText: 'Edit'}).first().click();
                    await page.waitForTimeout(5000);
                    await page.getByRole('textbox',{name:'companyName'}).fill('NewLeaf');
                    //updateEditField(page,"#companyName" , "NewLeaf");
                   // updateEditField(page,"#annualRevenue" , "20000");
                    //updateEditField(page,"#departmentName" , "IT");
                    //updateEditField(page, "#description", "Updated");
                    //await page.locator('input[type="submit"][value="Update"]').click();
                    




})

