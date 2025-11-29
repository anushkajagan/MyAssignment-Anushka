
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

// to verify if title exist

async function verifyUrl(page:any,compareurl : string){

    const url = await page.url();
    if (url === compareurl)
    {
        console.log(`The title ${url} is present`);
    } else {
        console.log("Title not found");
    }
    return url;
}

test("Create an account in salesforce", async ()=>{

    const browser = await chromium.launch({channel:"chrome",headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");



        await page.getByLabel("Username").fill("anushka.gsekaran916@agentforce.com");
        await page.getByLabel("Password").fill("Apple**2026");
        await page.locator("#Login").click();
        //await verifyTitle(page);
        //await verifyUrl(page,"https://orgfarm-5ed88530dd-dev-ed.develop.lightning.force.com/lightning/page/home");
        const applaunch = page.locator("appLauncher slds-context-bar__icon-action");
        await applaunch.click();
        const viewall =page.getByText("View All");
        await viewall.click();
        const searchapp = page.getByPlaceholder("Search apps and items...");
        await searchapp.fill("Service");
        await page.locator(`//*[@id="lgt-accordion-section-143"]/slot/div/one-app-launcher-app-tile[1]/div/div[2]/div[1]/p`).click();
        await page.locator('a[href="/lightning/o/Account/home"][title="Account"]').click();
        await page.getByRole('link',{name:'New'}).click();
        await page.locator('input[name="Name"]').fill("Anuact");
        await page.locator("//button[@title='Save']").click();
})

