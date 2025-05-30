const {test,expect}= require ('@playwright/test')

test('referenceName', async({page})=>{

   await page.goto("https://www.facebook.com/")

})