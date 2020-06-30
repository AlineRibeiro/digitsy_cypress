const locators = {
  login: {
    user: ":nth-child(1) > .ui > input",
    password: ":nth-child(2) > .ui > input",
    btnLogin: ".stacked > .teal",
  },
  menu: {
    currentUser: ".current-user",
    sellProduct: ".right > .my-menu",
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
};

export default locators;
