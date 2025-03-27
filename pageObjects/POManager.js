const {LoginPage} = require('./LoginPage');
// const {HomePage} = require('./HomePage');
// const {MonitorPage} = require('./MonitorPage');
// const {ReportsPage} = require('./ReportsPage');
// const {CompanyPage} = require('./CompanyPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        // this.homePage = new HomePage(page);
        // this.monitorPage = new MonitorPage(page);
        // this.reportsPage = new ReportsPage(page);
        // this.companyPage = new CompanyPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    // getHomePage() {
    //     return this.homePage;
    // }

    // getMonitorPage() {
    //     return this.monitorPage;
    // }  

    // getReportsPage() {
    //     return this.reportsPage;
    // }

    // getCompanyPage() {
    //     return this.companyPage;
    // }
}
module.exports = {POManager};