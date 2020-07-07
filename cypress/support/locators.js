const locators = {
  login: {
    user: "[data-cy=username]",
    password: "[data-cy=password]",
    btnLogin: "[data-cy=login-btn]",
  },
  menu: {
    currentUser: "[data-cy=greeting]",
    sellProduct: "[data-cy=sell-product-btn]",
    browseProducts: "[data-cy=browse-btn]",
  },
  createProducts: {
    name: "[data-cy=name]",
    price: "[data-cy=price]",
    description: "[data-cy=description]",
    thumbnail: "[data-cy=thumbnail]",
    sampleMedia: "[data-cy=sample-media]",
    media: "[data-cy=media]",
    btnCreate: "[data-cy=submit-btn]",
    nameError: "[data-cy=error-message]",
  },
  productIndex: {
    FN_XP_FIND_PRODUCT: (name) => `//div[contains(text(),'${name}')]`,
    FN_XP_SHOPPING_CART_BTN: (name) =>
      `//div[contains(text(),'${name}')]/../../../following-sibling::div//button`,
  },
  shoppingCart: {
    checkout: "[data-cy=checkout-btn]",
    FN_XP_REMOVE_ITEM_BTN: (name) =>
      `//a[contains(text(), '${name}')]/../following-sibling::div[2]//button`,
    totalPrice: "[data-cy=total-price]",
  },
};

export default locators;
