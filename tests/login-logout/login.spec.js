const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

test('@smoke Login', async ({ page }) => {
    const accountID = process.env.ACCOUNTID;
    const user = process.env.USER;
    const password = process.env.PASSWORD;

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(accountID, user, password);

    await expect(page).toHaveTitle(/Monitor/);
    await expect(page.getByRole('link', { name: 'allGeo' }).nth(1)).toBeVisible();
    console.log('Login successful URL- ' + page.url());
});

// test.afterAll('@smoke Logout & close the session', async ({ page }) => {
//     await page.goto('/logout');
//     await expect(page).toHaveTitle(/Login/);
//     await page.close();
// });