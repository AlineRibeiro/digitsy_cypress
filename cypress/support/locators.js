const locators = {
  login: {
    user: ":nth-child(1) > .ui > input",
    password: ":nth-child(2) > .ui > input",
    btn_login: ".stacked > .teal",
  },
  menu: {
    current_user: ".current-user",
    sell_product: ".right > .my-menu",
  },
  create_products: {
    name: ":nth-child(1) > .ui > input",
    price: ":nth-child(2) > .ui > input",
    description: "textarea",
    thumbnail: 'input[name="thumbnail"]',
    sample_media: 'input[name="sample_media"]',
    media: 'input[name="media"]',
    btn_create: ":nth-child(9) > .ui",
  },
};

export default locators;
