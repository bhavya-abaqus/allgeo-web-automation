const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pageObjects/LoginPage');

test('@smoke Login', async ({ page }) => {
    const accountID = 'ah-demo';
    const username = 'manager';
    const password = 'abaqus@22';

    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(accountID, username, password);

    await expect(page).toHaveTitle(/Monitor/);
    await expect(page.getByRole('link', { name: 'allGeo' }).nth(1)).toBeVisible();
});

test('@smoke Logout & close the session', async ({ page }) => {
    await page.goto('https://app.allgeo.com/logout');
    await page.close();
});