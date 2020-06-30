const locators = {
  LOGIN: {
    USER: ":nth-child(1) > .ui > input",
    PASSWORD: ":nth-child(2) > .ui > input",
    BTN_LOGIN: ".stacked > .teal",
  },
  MENU: {
    CURRENT_USER: ".current-user",
    SELL_PRODUCT: ".right > .my-menu",
  },
  CREATE_PRODUCTS: {
    NAME: ":nth-child(1) > .ui > input",
    PRICE: ":nth-child(2) > .ui > input",
    DESCRIPTION: "textarea",
    THUMBNAIL: 'input[name="thumbnail"]',
    SAMPLE_MEDIA: 'input[name="sample_media"]',
    MEDIA: 'input[name="media"]',
    BTN_CREATE: ":nth-child(9) > .ui",
  }
};

export default locators;
