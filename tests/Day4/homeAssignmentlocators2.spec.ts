
import {chromium, test} from "@playwright/test"

// to get title and value from table
async function gettablevalue(page: any, inputAttribute: string) {
    const value = await page
        .locator('tr', { hasText: `${inputAttribute}` })
        .locator('td >> nth=1')
        .innerText();
    
    console.log(`Input Attribute ${inputAttribute} is ${value}`);
    return value;
}


// Update a text field if it exists
async function updateEditField(page: any, selector: string, value: string) {
  const field = page.locator(selector);

  if ((await field.count()) === 0) {
    console.log(`Field not found: ${selector}`);
    return;
  }

  await field.fill(value);
  console.log(`Updated ${selector} → ${value}`);
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

    await page.goto("http://leaftaps.com/opentaps/control/main");

        await fillFieldValue(page ,"#username","Demosalesmanager");
        await fillFieldValue(page ,"#password","crmsfa");
        
        await page.locator(".decorativeSubmit").click();
        await verifyTitle(page);
        await clickLink(page, "CRM/SFA");
      

                    await page.click('a[href="/crmsfa/control/leadsMain"]');
                    await page.click('a[href="/crmsfa/control/findLeads"]');
                    await page.waitForTimeout(2000);
                    await page.locator('input[name="firstName"][id=ext-gen248]').fill("Anu");
                    await page.locator('button:has-text("Find Leads")').click();
                    await page.waitForTimeout(2000);

                    const table = page.locator('table.x-grid3-row-table');

                    await table.locator('a.linktext').first().click();
                    await page.locator('a.subMenuButton',{hasText: 'Edit'}).first().click();
                    await page.waitForTimeout(2000);
        
                await updateEditField(page,"#updateLeadForm_companyName","NewLeaf");
                await updateEditField(page,"#updateLeadForm_firstName","20000");
                await updateEditField(page,"#updateLeadForm_departmentName","IT");
                await updateEditField(page,"#updateLeadForm_description","Updated");
                await page.locator("#updateLeadForm_description").fill("Test leaf description");
                await page.locator('input[type="submit"][value="Update"]').click();

                await gettablevalue(page,"Company Name");
                await gettablevalue(page, "First name");
                await gettablevalue(page, "Department");
                await gettablevalue(page, "Description");
                    




})

