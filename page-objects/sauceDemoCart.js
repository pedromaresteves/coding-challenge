module.exports = {
    url: function() { 
      return `${this.api.launchUrl}cart.html`; 
    },
  
    commands: [
      //cartCommands
    ],
  
    elements: {
      cartList: '#cart_contents_container',
      cartItem: '.cart_item',
      goToCheckoutBtn: '[data-test="checkout"]'
    }
  };