import locators from "./locators";

Cypress.Commands.add("accessSellProductMenu", () => {
  cy.get(locators.menu.sellProduct).click();
});

Cypress.Commands.add(
  "createProduct",
  (name, price, description, thumbnail, sampleMedia, encoding, media) => {
    cy.get(locators.createProducts.name).type(name);
    cy.get(locators.createProducts.price).type(price);
    cy.get(locators.createProducts.description).type(description);
    cy.get(locators.createProducts.thumbnail).attachFile(thumbnail);
    cy.get(locators.createProducts.sampleMedia).attachFile({
      filePath: sampleMedia,
      encoding: encoding,
    });
    cy.get(locators.createProducts.media).attachFile({
      filePath: media,
      encoding: encoding,
    });
    cy.get(locators.createProducts.btnCreate).click();
    cy.visit("http://localhost:3001/products");
    //this should not be a visit, but a redirection. add later
  }
);
