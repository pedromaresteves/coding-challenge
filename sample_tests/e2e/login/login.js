module.exports = {
    beforeEach: async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        browser.deleteCookies();
        loginPage.navigate();
    },
    'Log in successfully with standard user': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        const listingPage = await browser.page.sauceDemoListing();
        loginPage.login(browser.globals.acceptedUsernames.standardUser, 'secret_sauce');
        listingPage
            .waitForElementVisible('@productListing')
            .assert.urlEquals(listingPage.url());
    },
    'Log in unsuccessfully with locked out user': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        loginPage.login(browser.globals.acceptedUsernames.lockedOutUser, 'secret_sauce');
        loginPage.waitForElementVisible('@loginErrorFeedback')
            .assert.textContains('@loginErrorFeedback', browser.globals.failedLoginFeedbacks.lockedOutUserFeedback);
    },
    'Try to log in without inserting username': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        loginPage.login('', 'wrong secret_sauce');
        loginPage.waitForElementVisible('@loginErrorFeedback')
            .assert.textContains('@loginErrorFeedback', browser.globals.failedLoginFeedbacks.usernameIsRequired);
    },
    'Try to log in not inserting a password': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        loginPage.login(browser.globals.acceptedUsernames.standardUser, '');
        loginPage.waitForElementVisible('@loginErrorFeedback')
            .assert.textContains('@loginErrorFeedback', browser.globals.failedLoginFeedbacks.passwordIsRequired);
    },
    'Try to log in using wrong password': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        loginPage.login(browser.globals.acceptedUsernames.standardUser, 'wrong password');
        loginPage.waitForElementVisible('@loginErrorFeedback')
            .assert.textContains('@loginErrorFeedback', browser.globals.failedLoginFeedbacks.wrongPassword);
    },
    'If non logged user inserts listing url, user is redirected to login page': async function(browser){
        const loginPage = await browser.page.sauceDemoLogin();
        const listingPage = await browser.page.sauceDemoListing();
        listingPage.navigate();
        loginPage.waitForElementVisible('@emailInput')
            .assert.urlEquals(loginPage.url());
    }
}