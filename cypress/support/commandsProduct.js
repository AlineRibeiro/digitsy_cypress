import locators from "./locators";

Cypress.Commands.add("accessSellProductMenu", () => {
  cy.get(locators.menu.sell_product).click();
});

Cypress.Commands.add(
  "createProduct",
  (name, price, description, thumbnail, sample_media, encoding, media) => {
    cy.get(locators.create_products.name).type(name);
    cy.get(locators.create_products.price).type(price);
    cy.get(locators.create_products.description).type(description);
    cy.get(locators.create_products.thumbnail).attachFile(thumbnail);
    cy.get(locators.create_products.sample_media).attachFile({
      filePath: sample_media,
      encoding: encoding,
    });
    cy.get(locators.create_products.media).attachFile({
      filePath: media,
      encoding: encoding,
    });
    cy.get(locators.create_products.btn_create).click();
  }
);
