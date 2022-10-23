const checkoutCommands = {
    fillUserInfo(data){
        this.waitForElementVisible('@firstNameInput')
            .setValue('@firstNameInput', data.firstName)
            .setValue('@lastNameInput', data.secondName)
            .setValue('@postalCodeInput', data.postalCode);
        return this;
    }
};

module.exports = {
    url: function() { 
      return `${this.api.launchUrl}checkout-step-one.html`; 
    },
  
    commands: [
      checkoutCommands
    ],
  
    elements: {
      firstNameInput: '[data-test="firstName"]',
      lastNameInput: '[data-test="lastName"]',
      postalCodeInput: '[data-test="postalCode"]',
      continueBtn: '[data-test="continue"]',
      finishPurchaseBtn: '[data-test="finish"]',
      checkoutComplete: '#checkout_complete_container'
    }
  };