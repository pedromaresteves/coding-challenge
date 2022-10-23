 const loginCommands = {
    login(username, password) {
      this
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', username)
        .setValue('@passwordInput', password)
        .click('@loginBtn');
      return this;
    }
  }

  module.exports = {
    url: function() { 
        return this.api.launchUrl; 
    },
  
    commands: [
        loginCommands
    ],
  
    elements: {
      emailInput: '#user-name',
      passwordInput: '#password',
      loginBtn: '#login-button',
      loginErrorFeedback: '.error-message-container'
    }
  };
  