/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.google.search()
 * 
 * See the example test using this object:
 *   specs/with-page-objects/google.js
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

gdprCommands = {
  rejectGdpr() {
    this.waitForElementVisible('@gdprRejectBtn')
      .click('@gdprRejectBtn')
  },
  acceptGdpr() {
    this.waitForElementVisible('@gdprAcceptBtn')
      .click('@gdprAcceptBtn')
  }
}
const searchCommands = {
  submit() {
    this.waitForElementVisible('@searchWithGoogleSuggestionsDropdownBtn', 5000)
      .click('@searchWithGoogleSuggestionsDropdownBtn');
    
    this.pause(1000);

    return this; // for command-chaining
  }
};

module.exports = {
  url: 'https://google.no',

  commands: [
    searchCommands,
    gdprCommands
  ],

  elements: {
    gdprRejectBtn: '#W0wltc',
    gdprAcceptBtn: '#L2AGLb',
    searchWithGoogleSuggestionsDropdownBtn: '.gNO89b',
    searchBar: {
      selector: 'input[name=q]'
    },

    submitButton: {
      selector: 'input[value="Google Search"]'
    }
  }
};
