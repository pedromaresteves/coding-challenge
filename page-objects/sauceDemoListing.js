const listingCommands = {
  async getItemTitle(index = 1){
    this.waitForElementVisible(`@inventoryItem:nth-child(${index})`);
      const itemTitle = await this.getText(`@inventoryItem:nth-child(${index}) ${this.__options.elements.itemTitle}`, function(result){
        return Promise.resolve(result.value);
      });
    return itemTitle;
  },
  async addItemToCart(index = 1){
    this.waitForElementVisible(`@inventoryItem:nth-child(${index})`)
      .click(`@inventoryItem:nth-child(${index}) ${this.__options.elements.itemButton}`)
      .waitForElementVisible('@shoppingCartBadge')
      .click('@shoppingCart');
    return this;
  }
}

module.exports = {
    url: function() { 
      return `${this.api.launchUrl}inventory.html`; 
    },
  
    commands: [
      listingCommands
    ],
  
    elements: {
      productListing: '#inventory_container',
      inventoryItem: '.inventory_item',
      itemTitle: '.inventory_item_label a',
      itemButton: '.btn_inventory',
      shoppingCart: '#shopping_cart_container',
      shoppingCartBadge: '.shopping_cart_badge'
    }
  };