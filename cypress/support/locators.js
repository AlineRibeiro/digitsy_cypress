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
    nameError: "[data-cy=error-message]"
  },
  productIndex: {
    mostRecent: ".container > :nth-child(4) > :nth-child(1) > :nth-child(1)",
    topShoppingCart:
      ":nth-child(1) > #product-card > .extra > .two > .row > .right > .ui",
    secondShoppingCart:
      ":nth-child(2) > #product-card > .extra > .two > .row > .right > .ui",
    FN_XP_SHOPPING_CART_BTN: (name) =>
      `//div[contains(text(),'${name}')]/../../../following-sibling::div//button`,
  },
  shoppingCart: {
    checkout: ".positive",
    removeItemBtn: ":nth-child(1) > :nth-child(2) > .extra > .ui",
    totalPrice: ".container > :nth-child(3)",
  },
};

export default locators;
