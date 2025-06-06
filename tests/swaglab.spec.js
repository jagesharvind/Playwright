const{test, expect}= require("@playwright/test");
const { log } = require("console");

test('swaglab', async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/');
    
    let usernameText = await page.getByText(`standard_user`);
                console.log(usernameText);
                

    let passwordText = await page.getByText(`
                secret_sauce
            `).allTextContents;

           const user = await page.getByText('standard_user');
            await page.fill('#user-name',user);
            await page.locator('#password').fill("secret_sauce");
            await page.click('#login-button');
                

           await page.hover("(//button[text()='ADD TO CART'])[6]");
           
           await page.click("(//button[text()='ADD TO CART'])[6]");

           await page.hover("#shopping_cart_container");
           await page.click("#shopping_cart_container");

           await page.click("//a[text()='CHECKOUT']");
           await page.fill("#first-name", "jagesh");
           await page.fill("#last-name", "arvind");
           await page.fill("#postal-code", "600000");

           await page.click("//input[@type='submit']");
           await page.click("//a[text()='FINISH']");

           await page.screenshot({path: 'C:\Users\jages\Pictures\Screenshots\swaglab.png', fullPage: true});
})