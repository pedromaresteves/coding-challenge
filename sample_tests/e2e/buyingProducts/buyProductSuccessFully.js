module.exports = {
    'With standard user, successfully buy backpack': async function(browser){
        const loginPage = browser.page.sauceDemoLogin();
        const listingPage = browser.page.sauceDemoListing();
        const cartPage = browser.page.sauceDemoCart();
        const checkoutPage = browser.page.sauceDemoCheckout();
        const itemIndexInListing = 1;
        const {userInfo} = browser.globals;

        loginPage.navigate()
            .login(browser.globals.acceptedUsernames.standardUser, 'secret_sauce');
        listingPage.waitForElementVisible('@productListing');
        const itemTitle = await listingPage.getItemTitle(itemIndexInListing);
        listingPage.addItemToCart(itemIndexInListing)
        cartPage.waitForElementVisible('@cartList')
            .assert.textContains('@cartItem', itemTitle);
        cartPage.click('@goToCheckoutBtn');
        checkoutPage.fillUserInfo(userInfo)
            .click('@continueBtn')
            .click('@finishPurchaseBtn')
            .waitForElementVisible('@checkoutComplete');
    }
}