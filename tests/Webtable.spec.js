const {test,expect} = require("@playwright/test")

test("Frames", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");
    const table= await page.locator('#productTable');

    //finding column count
    const columnCount = await table.locator('//thead//tr//th');    //xpath
    console.log(await columnCount.count());

    //finding row count
    const totalRows = await table.locator('tbody tr');  //css
    console.log(await totalRows.count());
    
     //find the matching value and check that row

     const matchedRow = await totalRows.filter({
        has: page.locator("//td"),      //rows having td tags are filtered and collected
        hasText: "Smartwatch"           // collected td are filtered out comparing the given text
     })
     await matchedRow.locator("//input").check();
     await page.waitForTimeout(5000);
})