const {test, expect } = require("@playwright/test")

test("locators",async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    await  page.locator("#login2");
    await page.click("#login2");
    await page.waitForTimeout(5000);

})