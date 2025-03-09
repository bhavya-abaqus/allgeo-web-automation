class LoginPage {
    // constructor(page)
    constructor(page) {
        this.page = page;
        this.accountID = page.getByRole('textbox', { name: 'Account ID' });
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'LOGIN', exact: true });
    };

    async goTo() {
        await this.page.goto("https://app.allgeo.com/login");
    }

    async login(accountID, username, password) {
        await this.accountID.fill(accountID);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    };
}
module.exports = { LoginPage };