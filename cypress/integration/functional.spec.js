import "cypress-file-upload";
import locators from "../support/locators";

describe("Should test at functional level", () => {
  before(() => {
    cy.login("aline@email.com", "supersecret", "Hello, Aline!")
  });

  it("Should insert a product", () => {
    cy.get(locators.menu.sell_product).click();
    cy.get(locators.create_products.name).type(
      `Cypress test product ${Math.random()}`
    );
    cy.get(locators.create_products.price).type("20.00");
    cy.get(locators.create_products.description).type(
      "This is a description for my Cypress test product. It must be at least 50 chars long"
    );
    cy.get(locators.create_products.thumbnail).attachFile(
      "../fixtures/bootcamp_image.png"
    );
    cy.get(locators.create_products.sample_media).attachFile({
      filePath: "../fixtures/bootcamp_sample.pdf",
      encoding: "base64",
    });
    cy.get(locators.create_products.media).attachFile({
      filePath: "../fixtures/bootcamp_product.pdf",
      encoding: "base64",
    });
    cy.get(locators.create_products.btn_create).click();
    // cy.url().should('be', 'http://localhost:3001/products'); falta um wait aqui. algo assim
  });
});
