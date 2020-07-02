const locators = {
  login: {
    user: ":nth-child(1) > .ui > input",
    password: ":nth-child(2) > .ui > input",
    btnLogin: ".stacked > .teal",
  },
  menu: {
    currentUser: ".current-user",
    sellProduct: ".right > .my-menu",
    browseProducts: '[href="/products"]'
  },
  createProducts: {
    name: ":nth-child(1) > .ui > input",
    price: ":nth-child(2) > .ui > input",
    description: "textarea",
    thumbnail: 'input[name="thumbnail"]',
    sampleMedia: 'input[name="sample_media"]',
    media: 'input[name="media"]',
    btnCreate: ":nth-child(9) > .ui",
    nameError: ":nth-child(1) > p",
  },
  productIndex: {
    mostRecent: '.container > :nth-child(4) > :nth-child(1) > :nth-child(1)',
    topShoppingCart: ':nth-child(1) > #product-card > .extra > .two > .row > .right > .ui',
    secondShoppingCart: ':nth-child(2) > #product-card > .extra > .two > .row > .right > .ui'
  },
  shoppingCart: {
    checkout: '.positive'
  }
};
//para topShoppingCart e secondShopingCart, eu poderia criar um shoppingCart key que retornaria uma
//arrow function passando o xpath generico para um produto qq, e o nome do produto como argumento
//da funcao, assim como o prof fez no video 59 Saldo.

export default locators;
